/*****************************************************************************
 * Load libraries
 *****************************************************************************/

 /* Requried libraries */
const {
    ASTNode,
    ASTNodeType,
    ScopeNode,
    VariableReferenceNode,
    ValueNode,
    ReturnStatementNode
} = require('../ast/nodes');
const fs = require('fs');
const path = require('path');
const debug = require('debug')('us:evaluation');
const ASTVisitor = require('../ast/ASTVisitor');
const Parser = require('../lib/usParser').usParser;
const EvaluationResult = require('./EvaluationResult');

/* Bridging data */
const NativeFunctionDeclaration = require('./NativeFunctionDeclaration');

/* Compilation Errors */
const {
    SemanticError,
    UnexpectedSymbolError,
    UnknownSymbolError,
    VariableAlreadyDefinedError,
    VariableNotDefinedError,
    InvalidOperationError,
    StackOverflowError,
    AmbiguousSymbolError,
    FunctionAlreadyDefinedError,
    InvalidArgumentsCountError
} = require('../interperter/CompilationErrors');

/* Symbols */
const {
    SymbolType,
    SymbolFactory,
    SymbolTable,
    VariableSymbol,
    FunctionSymbol
} = require('./symbols');

/* Misc */
const { TypesRegistar, TypeValue, NumberType, AnswerType, NullType } = require('../types');
const Stack = require('../utils/Stack');

/*****************************************************************************
 * Define our strong evaluator! ᕙ(＠°▽°＠)ᕗ
 *****************************************************************************/

/**
 * Defines a class that allows to evaluates and performs the AST instructions.
 * @descritpion Some notes about the implementation:
 * 
 * 1) _isMeanie:
 *  This can be determined only by one node - IsMeanieInstruction. Thus we just use a plain flag.
 * 
 * 2) _callStack:
 *  This is a simple functions stack trace implementation based on strings stack.
 *  Each time a FunctionCall occured, we're pushing the called function to the stack.
 *  Then, after it quits, we pop this value from the stack.
 * 
 * 3) _returnStack:
 *  We need to allow to return values from multiple functions. A returns tatement
 *  means that we stop to perform every statement and quit the function. To do it
 *  we're using a stack that contains the returned value on top of it (LIFO). If we got
 *  anything on the stack, we continue to stop executing inner scopes until we return to the
 *  visitFunctionCall call. There, we pop the stack value and returns it.
 * 
 *  For example:
 *  ```java
 *  void foo() { bar(); }
 *  int bar() {
 *      for (int = 0; i < 5; i++) {
 *          return 5;
 *          if (1 + 1 == 2) {
 *              return 2;
 *          }
 *      }
 *  }
 * ```
 * In this call, when foo executed we'll have the following:
 *      A. visitFunctionCall: calls bar()
 *      B. visitForLoop: Executes the loop.
 *      C. visitReturnStatement: returns 5.
 * Here, we'll take 5 and push it to the stack and return from the return statement.
 * Then, the visitForLoop will notice when executing the statemnts one after another that
 * the _returnStack isn't empty. It has something on top of it. That means we need to pop back.
 * We'll return from visitForLoop and get back to visitFunctionCall. This function will
 * pop the value on the stack, and return it.
 * 
 * So why do we need stack and can't use plain variable? because when calling multiple functions,
 * which return values, we need a stack to store them.
 * 
 *  4) _symbolsTable:
 *      The symbols table contains the symbols that's being defined in the program. Each scope takes it's own scope
 *      thus variables defined in inner scopes won't be availabale at outer scopes.
 * 5) _globalSymbolTable:
 *      This is the global symbols table. It contains any global symbol that should be accessed
 *      from within any portion of the script. Of course, it's a symbol table so it supports scoping as well.
 */
module.exports = class EvaluationASTVisitor extends ASTVisitor {
    constructor(globalVariables, nativeFunctions) {
        super();
        this._globalSymbolTable = new SymbolTable();
        this._symbolsTable = new Stack();
        this._isMeanie = false;
        this._callStack = new Stack();
        this._returnStack = new Stack();

        if (globalVariables) {
            for (let k in globalVariables) {
                this.setGlobalVariable(k, globalVariables[k]);
            }
        }

        if (nativeFunctions) {
            for (let f of Object.values(nativeFunctions)) {
                this.setNativeFunction(f);
            }
        }
    }

    /*********************** Public API ***********************/

    /**
     * Sets the given global variable.
     * @param {string} name The variable name.
     * @param {TypeValue} value The variable value.
     */
    setGlobalVariable(name, value) {
        debug(`Defining a global variable: ${name} = ${value}`);

        this._addSymbol(name, SymbolFactory({
            type: SymbolType.VARIABLE,
            args: [name, value]
        }));
    }

    /**
     * Expose a JavaScript function to the US interperter.
     * @param {NativeFunctionDeclaration} nativeFunction The native function instance.
     */
    setNativeFunction(nativeFunction) {
        if (!(nativeFunction instanceof NativeFunctionDeclaration)) {
            throw new Error('The supplied function must be of type NativeFunctionDeclaration.');
        }

        const symbol = SymbolFactory({
            type: SymbolType.FUNCTION,
            args: [nativeFunction.name, nativeFunction.args, [nativeFunction.pointer, nativeFunction.sendTypeValue]]
        });
        this._addSymbol(nativeFunction.name, symbol);
        debug(`Defining a native function: ${symbol.getSignature()}`);
    }

    /*********************** Visiting Rules ***********************/

    /**
     * A method that's being triggered when the visitor visits a {@link ProgramNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ProgramNode.accept(ASTVisitor visitor)
     */
    async visitProgram(node) {
        this._isMeanie = node.isMeanie;
        // console.log('-'.repeat(30));
        // console.log('\t\tEvaluating Program Nodes:');
        // console.log('-'.repeat(30));
        // console.log(node.toString());
        // console.log('');
        // console.log('');

        if (node.globalScope) {
            /* Add main to the call stack */
            this._callStack.push('main()'); // Add the main to the call stack.

            /* Performs the scope */
            await node.globalScope.accept(this);
        }

        // console.log('');
        // console.log('');
        // console.log('-'.repeat(30));
        // console.log('\t\tResult Symbols Table');
        // console.log('-'.repeat(30));
        // console.log(this._globalSymbolTable.toString());
        
        return new EvaluationResult(this);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ScopeNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ScopeNode.accept(ASTVisitor visitor)
     */
    async visitScope(node) {
        debug('visitScope: Parsing a new scope.');

        for (let n of node.statements) {
            /* Is this a return statement? */
            if (n instanceof ReturnStatementNode) {
                /* Get the return value and put it at the top of the stack */
                let returnValue = await n.accept(this);
                this._returnStack.push(returnValue);
                return;
            }

            /* Otherwise just perform it */
            await n.accept(this);

            /* Do we have anything left in the return stack? */
            if (!this._returnStack.isEmpty()) {
                /* We should stop executing things. */
                return;
            }
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableDeclarationNode.accept(ASTVisitor visitor)
     */
    async visitVariableDeclaration(node) {
        debug(`visitVariableDeclaration: declaring variable: ${node.name}`);

        /* Declare it */
        if (node.value) {
            /* With value */
            let value = await node.value.accept(this);
            this._addSymbol(node.name, SymbolFactory({
                type: SymbolType.VARIABLE,
                args: [node.name, value]
            }), node.context);
        } else {
            /* W/O value */
            this._addSymbol(node.name, SymbolFactory({
                type: SymbolType.VARIABLE,
                args: [node.name]
            }), node.context);
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link AssignmentNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see AssignmentNode.accept(ASTVisitor visitor)
     */
    async visitAssignment(node) {
        /* Get the symbol and the actual value to store there */
        let lparam = await node.lparam.accept(this);
        let rparam = await node.rparam.accept(this);

        debug(`visitAssignment: assigning ${lparam} = ${rparam}`);

        /* Assign the lparam to the rparam */
        if ((lparam instanceof VariableSymbol)) {
            await this._updateSymbolTable(node.context, lparam, rparam);
        } else {
            throw new InvalidOperationError(`Invalid Assignment: The supplied lparam is an rvalue.`);
        }
    }


    /**
     * A method that's being triggered when the visitor visits a {@link ValueNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ValueNode.accept(ASTVisitor visitor)
     */
    async visitValue(node) {
        debug('visitValue');
        return TypeValue.fromNode(node);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ArithmeticOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ArithmeticOperationNode.accept(ASTVisitor visitor)
     */
    async visitArithmeticOperation(node) {
        debug('visitArithmeticOperation');

        /* Get the lparam and rparam */
        let lparam = await this._getValue(node.lparam);
        let rparam = await this._getValue(node.rparam);

        /* Perfomr the computation. Note that it might throw a semantic error */
        try {
            let result = TypesRegistar.performArithmeticOperation(lparam, node.op, rparam);
            return result;
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link UnaryOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see UnaryOperationNode.accept(ASTVisitor visitor)
     */
    async visitUnaryOperation(node) {
        debug('visitUnaryOperation');
        
        /* When we deal with unary operations, we have to perform them first and only then
           forward the call.
           
           A little note: Unary V. Postfix -
                Unary
                ```java
                    int a = 1;
                    int b = ++a + 1;
                    System.out.println("a: " + a + ", b " + b);
                ```
                Prints: "a = 2, b = 3"

                Postfix
                ```java
                    int a = 1;
                    int b = a++ + 1;
                    System.out.println("a: " + a + ", b " + b);
                ```
                Prints: "a = 2, b = 2"
           */
        let param = await node.param.accept(this);

        if (!(param instanceof VariableSymbol)) {
            throw new UnexpectedSymbolError(TypesRegistar.getUnaryOperationString(node.op), node.context);
        }

        try {
            /* Get the updated value */
            let value = TypesRegistar.performArithmeticOperation(param.value,
                node.op === Parser.UNARY_PLUS ? Parser.PLUS : Parser.MINUS,
                new TypeValue(NumberType.getInstance(), 1));
            
            /* Update the symbol table */
            await this._updateSymbolTable(node.context, param, value);
    
            /* And return it */
            return param.value;
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link PostfixOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see PostfixOperationNode.accept(ASTVisitor visitor)
     */
    async visitPostfixOperation(node) {
        debug('visitPostfixOperation');
        /* In postfix operators, we perform the arithmetic expression only after we evaluate the expression */
        let param = await node.param.accept(this);

        if (!(param instanceof VariableSymbol)) {
            throw new UnexpectedSymbolError(TypesRegistar.getUnaryOperationString(node.op), node.context);
        }

        /* Save the value before the changes (as we shouldn't use the new value for the rest of the expression) */
        let temp = param.value; // << That'll make it postfix. and that's why unary is better in performance. See? See?
        
        try {
            /* Get the updated value */
            let value = TypesRegistar.performArithmeticOperation(param.value,
                node.op === Parser.UNARY_PLUS ? Parser.PLUS : Parser.MINUS,
                new TypeValue(NumberType.getInstance(), 1));
            
            /* Update the symbol table */
            await this._updateSymbolTable(node.context, param, value);
    
            /* And return it */
            return temp;    
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableReferenceNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableReferenceNode.accept(ASTVisitor visitor)
     */
    async visitVariableReference(node) {
        debug('visitVariableReference: ' + node.toString());
        return this._variableLookup(node.context, node.name);
    }


    /**
     * A method that's being triggered when the visitor visits a {@link CastingNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see CastingNode.accept(ASTVisitor visitor)
     */
    async visitCasting(node) {
        /* Simply try to cast this variable */
        try {
            return node.toType.cast(await this._getValue(node.value));
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ConditionNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ConditionNode.accept(ASTVisitor visitor)
     */
    async visitCondition(node) {
        debug(`visitCondition: ${node}`);

        /* Do we got a logical operator & rparam? */
        if (!node.rparam) {
            // Nope so just use the lparam
            return await this._getValue(await node.lparam.accept(this));
        }

        /* Get the values */
        let lparam = await this._getValue(await node.lparam.accept(this));
        let rparam = await this._getValue(await node.rparam.accept(this));

        /* Apply the operator */
        try {
            return AnswerType.getInstance().applyLogicalOperator(lparam, node.logicalOp, rparam);
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ConditionalExpressionNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ConditionalExpressionNode.accept(ASTVisitor visitor)
     */
    async visitConditionalExpression(node) {
        debug(`visitConditionalExpression: ${node}`);

        /* Get the values */
        let lparam = await this._getValue(await node.lparam.accept(this));
        let rparam = await this._getValue(await node.rparam.accept(this));

        /* Compare them using */
        try {
            return AnswerType.getInstance().compareValues(lparam, node.op, rparam);
        } catch (e) {
            /* We didnt pass a context to this method but the SemanticError Classes demands it. To get around it w/o
            requiring a context in every arithmetic method, we've thrown the exceptions with empty object.
            Thus, we'll put here the context */
            node.context.stackTrace = this._callStack;
            e.setContext(node.context);
            throw e;
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link IfStatementNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see IfStatementNode.accept(ASTVisitor visitor)
     */
    async visitIfStatement(node) {
        debug('visitIfStatement: Evaluating ' + node.condition.toString());

        /* Evaluate the condition */
        let conditionResult = await node.condition.accept(this);
        
        /* What should we do? */
        if (conditionResult.value) { // << result.value is a standard JS boolean
            /* Create a new scope in the symbols table */
            this._getActiveSymbolTable().enterScope();

            /* Perform the is-true code */
            await node.trueScope.accept(this);

            /* Exit from the scope */
            this._getActiveSymbolTable().exitScope();
        } else if (typeof(node.falseScope) !== 'undefined') {
            /* Create a new scope in the symbols table */
            this._getActiveSymbolTable().enterScope();

            /* Perform the is-false code */
            await node.falseScope.accept(this);

            /* Exit from the scope */
            this._getActiveSymbolTable().exitScope();
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link FunctionDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see FunctionDeclarationNode.accept(ASTVisitor visitor)
     */
    async visitFunctionDeclaration(node) {
        debug(`visitFunctionDeclaration: declaring ${node.name}(${node.args.join(', ')})`);
        
        /* Try to declare that new symbol, ya? */
        this._addSymbol(node.name, SymbolFactory({
            type: SymbolType.FUNCTION,
            args: [node.name, node.args, node.scope]
        }), node.context);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link FunctionCallNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see FunctionCallNode.accept(ASTVisitor visitor)
     */
    async visitFunctionCall(node) {
        debug(`visitFunctionCall: Calling function ${node.name}`);

        /* Attempt to find 'at function */
        let symbol = this._functionLookup(node.context, node.name, node.args);
        
        /* Push to the call stack */
        this._callStack.push(symbol.getSignature()); 

        /* Is this a native function or a user one? */
        let result = undefined;
        if (symbol.isNativeFunction()) {
            result = await this._executeNativeFunction(node, symbol);
        } else {
            result = await this._executeUserFunction(node, symbol);
        }

        /* Pop the call stack */
        this._callStack.pop();

        return result;
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ForLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ForLoopNode.accept(ASTVisitor visitor)
     */
    async visitForLoop(node) {
        debug('visitForLoop');

        /* Enters into a new scope. Yes. Enter NOW and not for each iteration.
        Why it's important? because
        ```java
        for (int i = 1; i <= n; i++) {
            int j = 0;
        }
        System.out.println("i = " + i);```
        Both j **and i** are available only at the for scope level, so doing the last line
        is incorrect. If we'll open the scope only at the iteration-level basis, it won't
        allow us to enforce this rule as i will be allocated on the outer scope. */
        this._getActiveSymbolTable().enterScope();

        /* Initialize */
        if (node.initialization) {
            await node.initialization.accept(this);
        }

        let conditionResult = await node.termination.accept(this);
        let iter = 0;
        while (conditionResult.value) {
            /* Perform the loop body */
            await node.scope.accept(this);
            
            /* Perform the increment */
            if (node.increment) {
                await node.increment.accept(this);
            }

            /* Are we exceeding the maximum iterations? */
            if (node.context.settings.maxIterations > -1 && ++iter >= node.context.settings.maxIterations) {
                throw new StackOverflowError();
            }

            /* Check the loop condition again */
            conditionResult = await node.termination.accept(this);
        }

        /* Finalize */
        this._getActiveSymbolTable().exitScope();
    }

    /**
     * A method that's being triggered when the visitor visits a {@link WhileLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see WhileLoopNode.accept(ASTVisitor visitor)
     */
    async visitWhileLoop(node) {
        debug('visitWhileLoop based on condition: ' + node.condition.toString());

        /* Enter into a new scope */
        this._getActiveSymbolTable().enterScope();

        /* Performs the condition */
        let conditionResult = await node.condition.accept(this);
        let iter = 0;
        while (conditionResult.value) {
            /* Perform the loop body */
            await node.scope.accept(this);
            
            /* Are we exceeding the maximum iterations? */
            if (node.context.settings.maxIterations > -1 && ++iter >= node.context.settings.maxIterations) {
                throw new StackOverflowError();
            }

            /* Check the loop condition again */
            conditionResult = await node.condition.accept(this);
        }

        /* Exit from the scope */
        this._getActiveSymbolTable().exitScope();
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ReturnStatementNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ReturnStatementNode.accept(ASTVisitor visitor)
     */
    async visitReturnStatement(node) {
        debug(`visitReturnStatement: Returning ${node.expression.toString()}`);
        /* Do we return a value? */
        if (node.expression) {
            return await node.expression.accept(this);
        }
        
        return TypeValue.Null;
    }

    /*********************** Private helpers ***********************/

    /**
     * Adds a new symbol to the symbols table.
     * @param {string} name The symbol name.
     * @param {Symbol} symbol The symbol itself.
     * @param {ASTCOntext} context The evaluation context.
     */
    _addSymbol(name, symbol, context = {}) {
        let existingSymbol = this._doSymbolLookup(name);

        /* Did we delcared it before? */
        if (existingSymbol != null) {
            if (existingSymbol instanceof VariableSymbol
                && symbol instanceof VariableSymbol) {
                /* Both are variables, that's a good start. If we're not being mean, we'll
                allow that mistake. otherwise we'll kill the program! */
                if (this._isMeanie) {
                    throw new VariableAlreadyDefinedError(name, context);
                }

                return; // Otherwise we just ignore it.
            } else if (existingSymbol instanceof FunctionSymbol
                && symbol instanceof FunctionSymbol) {
                    /* Both are functions. We might allow to overload at the future, but not right now. */
                    throw new FunctionAlreadyDefinedError(name, context);
                } else {
                    /* One is a function and one is a variable. Wut?! */
                    throw new AmbiguousSymbolError(name, context);
                }
        }
        
        /* Do we already have this symbol? */
        if (this._symbolsTable.isEmpty()) {
            this._globalSymbolTable.add(name, symbol);
        } else {
            this._symbolsTable.peek().add(name, symbol);
        }
    }

    /**
     * Searchs for the given variable name in the symbols table.
     * @param {EvaluationContext} context The evaluation context.
     * @param {string} name The variable name.
     * @return {VariableSymbol}
     */
    _variableLookup(context, name) {
        let symbol = this._doSymbolLookup(name);

        if (symbol === null) {
            debug(`Could not find the symbol ${name} in the symbols table.`);
            // If we're in meanie mode, we won't allow to use a variable before it was declared
            if (this._isMeanie) {
                context.stackTrace = this._callStack;
                throw new VariableNotDefinedError(name, context);
            } else {
                // Otherwise we'll define this variable right... now!
                symbol = SymbolFactory({
                    type: SymbolType.VARIABLE,
                    args: [node.name]
                });
                this._symbolsTable.add(node.name, symbol, context);
                return symbol; // We have return later, but I wanna skip on the type check (the instanceof thingy).
            }
        }

        /* Is this a variable symbol */
        if (!(symbol instanceof VariableSymbol)) {
            throw new UnexpectedSymbolError(name, context);
        }

        return symbol;
    }

    /**
     * Searchs for the given function name in the symbols table.
     * @param {EvaluationContext} context The evaluation context.
     * @param {string} name The variable name.
     * @return {VariableSymbol}
     */
    _functionLookup(context, name, sentArgs) {
        let symbol = this._doSymbolLookup(name);
        
        if (symbol === null) {
            debug(`Could not find the symbol ${name} in the symbols table.`);
            throw new UnknownSymbolError(name, context);
        }

        /* Is this a variable symbol */
        if (!(symbol instanceof FunctionSymbol)) {
            throw new UnexpectedSymbolError(name, context);
        }

        /* If the arguments is an integer, we just need to make sure that we
           match the number of supplied arguments */
        if (symbol.isNativeFunction()) {
            /* A native function args might be just a number or arguments descriptor */
            if (typeof(symbol.args) === 'number') {
                if (symbol.args > -1 && symbol.args != sentArgs.length) {
                    throw new InvalidArgumentsCountError(symbol.name, symbol.args.length, argsCount, context);
                }
            } else {
                if (symbol.args.length != sentArgs.length) {
                    throw new InvalidArgumentsCountError(symbol.name, symbol.args.length, argsCount, context);
                }
            }
        } else {
            /* User functions are ValueNodes array. We can't know what the user expect to get,
            so we can only compare the number of args */
            if (symbol.args.length != sentArgs.length) {
                throw new InvalidArgumentsCountError(symbol.name, symbol.args.length, argsCount, context);
            }
        }
        return symbol;
    }

    /**
     * Perfoms the actual symbol lookup in the symbols table stack & global symbols table.
     * @param {string} name The symbol name.
     */
    _doSymbolLookup(name) {
        debug(`_doSymbolLookup: looking for the symbol "${name}"`);
        let symbol = undefined;
        /* If we have a symbol table on the stack, it means we're handling a function.
           So we need to check if we can find it there. */
        if (!this._symbolsTable.isEmpty()) {
            symbol = this._symbolsTable.peek().find(name);
        }

        if (!symbol) {
            /* It doesn't exists at the functions symbol tables stack, so look for it at the
               global symbols table. */
            symbol = this._globalSymbolTable.find(name);
        }

        return symbol;
    }

    /**
     * Gets the active symbol table.
     */
    _getActiveSymbolTable() {
        if (this._symbolsTable.isEmpty()) {
            /* We don't have anything on the symbols table stack, so we're in the global scope */
            return this._globalSymbolTable;
        } else {
            return this._symbolsTable.peek();
        }
    }

    /**
     * Attempts to get a value from the AST node.
     * @param {ASTNode} node The ast node.
     */
    async _getValue(node) {
        /* Is it the value? lol. We can get here with a value by recursion */
        if (node instanceof TypeValue) {
            return node;
        }

        /* Is it an AST ValueNode? */
        if (node instanceof ValueNode) {
            // Easy, just convert it into Z. That was a literal in the code itself (like in "sum is sum * 2", then 2 is ValueNode)
            return TypeValue.fromNode(node);
        }
        
        /* Is it a variable reference? */
        if (node instanceof VariableReferenceNode) {
            /* Attempt to find that variable in the symbols table */
            let symbol = this._variableLookup(node.context, node.name);
            return symbol.value;
        } else if (node instanceof ASTNode) {
            /* This is a nested node, so lets parse it */
            return await this._getValue(await node.accept(this));
        }

        /* Is it a symbol? */
        if (node instanceof VariableSymbol) {
            return node.value;
        }

        throw new SemanticError('Could not resolve the AST tree node value.', node.context);
    }

    /**
     * Update the symbol table with a new value.
     * @param {ASTContext} ctx
     * @param {Symbol} symbol 
     * @param {Symbol} newValue 
     */
    async _updateSymbolTable(ctx, symbol, newValue) {
        debug(`Updating symbol table for ${symbol.name} with ${newValue}`);
        if (!(symbol instanceof VariableSymbol)) {
            throw new Error('_updateSymbolTable expects to get a Symbol.');
        }

        newValue = await this._getValue(newValue);

        if (this._isMeanie) {
            // If we're mean, we won't allow to switch data types
            if (symbol.value.type.name != NullType.getInstance().name // we can always use null
                && newValue.type.name != NullType.getInstance().name // we can always use null
                && symbol.value.type.name != newValue.type.name) {
                throw new InvalidOperationError(`The variable "${symbol.name}" contains rvalue of type ${symbol.value.type.name}. It can not get assigned with an rvalue of type ${newValue.type.name}.`, ctx);
            }
        }

        symbol.value = newValue;
        this._getActiveSymbolTable().set(symbol.name, symbol);
    }

    /**
     * Executes a native (JS) function.
     * @param {ASTNode} node 
     * @param {FunctionSymbol} symbol 
     */
    async _executeNativeFunction(node, symbol) {
        /* Get the args */
        let args = await this._executeFunctionGetArgs(node, symbol);

        /* Do we use the type values or should we unpack them? */
        if (!symbol.data[1]) {
            args = args.map(v => v.value);
        }
        
        debug(`Calling the native function ${symbol.name} with the arguments: ${args}`);

        /* That's the time we've been waiting forrrrrr!!
           Yesss!! (✿ ◠ ‿ ◠). Execute it! */
        let result = undefined;
        try {
            result = symbol.data[0](... args); // Note that the pointer is sandboxed. It doesn't have access to "this".
        } catch (e) {
            throw new NativeFunctionError(symbol, e, node.context);
        }
        
        /* Did we got a promise? If so, lets wait for it */
        if (result instanceof Promise) {
            result = await result;
        }

        /* Convert the result into TypeValue */
        if (result instanceof TypeValue) {
            return result;
        }

        return TypesRegistar.createValue(result);
    }

    /**
     * Executes a user function.
     * @param {ASTNode} node 
     * @param {FunctionSymbol} symbol 
     */
    async _executeUserFunction(node, symbol) {
        /* Get the args */
        let args = await this._executeFunctionGetArgs(node, symbol);
        
        /* Create a new symbol table in the symbol table stack. Why? because we need it being separated
           from other variables and functions that were defined at other functions.
            so "foo(a, b)" and "bar(a, b)" will have their own a and b values. */
        this._symbolsTable.push(new SymbolTable());

        for (let i = 0; i < args.length; i++) {
            this._addSymbol(symbol.args[i], SymbolFactory({
                type: SymbolType.VARIABLE,
                args: [symbol.args[i], args[i]]
            }), node.context);
        }

        /* Visit the node scope, which's the function pointer */
        await symbol.data.accept(this);

        /* Exit from the execution scope */
        this._symbolsTable.pop();

        /* Do we have any value in the return stack? if we do, that's the vaue
        we're going to return backwards */
        
        if (!this._returnStack.isEmpty()) {
            return this._returnStack.pop();
        } else {
            /* No return statement at the function, so return Null */
            return TypeValue.Null;
        }
    }

    /**
     * Gets the function arguments.
     * @param {ASTNode} node 
     * @param {FunctionSymbol} symbol 
     */
    async _executeFunctionGetArgs(node, symbol) {
        let args = [];
        for (let arg of node.args) {
            let argValue = await this._getValue(await arg.accept(this));
            if (!(argValue instanceof TypeValue)) {
                throw new UnexpectedSymbolError(symbol.name, node.context);
            }
            
            args.push(argValue);
        }

        return args;
    }
};