/*****************************************************************************
 * Load libraries
 *****************************************************************************/

 /* Requried libraries */
const {
    ASTNode,
    ASTNodeType,
    ScopeNode,
    VariableReferenceNode,
    ValueNode
} = require('../ast/nodes');
const fs = require('fs');
const path = require('path');
const debug = require('debug')('us:evaluation');
const ASTVisitor = require('../ast/ASTVisitor');
const Parser = require('../lib/usParser').usParser;
const EvaluationResult = require('./EvaluationResult');

/* Compilation Errors */
const {
    UnexpectedSymbolError,
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

module.exports = class EvaluationASTVisitor extends ASTVisitor {
    constructor(globalVariables, nativeFunctions) {
        super();
        this._symbolsTable = new SymbolTable();
        this._isMeanie = false;
        this._scopeDepth = 0;
        this._callStack = new Stack();

        if (globalVariables) {
            for (let k in globalVariables) {
                debug('Adding global variable: ' + k);
                this.setGlobalVariable(k, globalVariables[k]);
            }
        }

        if (nativeFunctions) {
            for (let def of nativeFunctions) {
                this.setNativeFunction(def.name, def.args, def.callback, def.sendTypeValue);
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
        this._addSymbol(name, SymbolFactory({
            type: SymbolType.VARIABLE,
            args: [name, value]
        }));
    }

    /**
     * Expose a JavaScript function to the US interperter.
     * @param {string} name The function name.
     * @param {*} args The function argument names.
     * @param {*} callback The actual JavaScript callback which'll get fired.
     * @param {*} sendTypeValue Set to true to get {@see TypeValue} instead of native JS values.
     */
    setNativeFunction(name, args, pointer, sendTypeValue) {
        this._addSymbol(name, SymbolFactory({
            type: SymbolType.FUNCTION,
            args: [name, args, [pointer, sendTypeValue]]
        }));
    }

    /*********************** Visiting Rules ***********************/

    /**
     * A method that's being triggered when the visitor visits a {@link ProgramNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ProgramNode.accept(ASTVisitor visitor)
     */
    visitProgram(node) {
        this._isMeanie = node.isMeanie;
        console.log('-'.repeat(30));
        console.log('\t\tEvaluating Program Nodes:');
        console.log('-'.repeat(30));
        console.log(node.toString());
        console.log('');
        console.log('');

        if (node.globalScope) {
            this._callStack.push('main()'); // Add the main to the call stack.
            node.globalScope.accept(this);
        }

        console.log('');
        console.log('');
        console.log('-'.repeat(30));
        console.log('\t\tResult Symbols Table');
        console.log('-'.repeat(30));
        console.log(this._symbolsTable.toString());
        
        return new EvaluationResult({
            isMeanie: this._isMeanie,
            symTable: this._symbolsTable
        });
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ScopeNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ScopeNode.accept(ASTVisitor visitor)
     */
    visitScope(node) {
        debug('visitScope: Parsing a new scope.');
        /* Enter into a new scope */
        if (node.scopeType != ScopeNode.prototype.ScopeType.GLOBAL) {
            this._symbolsTable.enterScope();
        }

        /* Iterate over the scope statements and perform them */
        for (let n of node.statements) {
            n.accept(this);
        }

        /* Done */
        if (node.scopeType != ScopeNode.prototype.ScopeType.GLOBAL) {
            this._symbolsTable.exitScope();
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableDeclarationNode.accept(ASTVisitor visitor)
     */
    visitVariableDeclaration(node) {
        debug(`visitVariableDeclaration: declaring variable: ${node.name}`);

        /* Declare it */
        if (node.value) {
            /* With value */
            let value = node.value.accept(this);
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
    visitAssignment(node) {
        /* Get the symbol and the actual value to store there */
        let lparam = node.lparam.accept(this);
        let rparam = node.rparam.accept(this);

        debug(`visitAssignment: assigning ${lparam} = ${rparam}`);

        /* Assign the lparam to the rparam */
        if ((lparam instanceof VariableSymbol)) {
            this._updateSymbolTable(node.context, lparam, rparam);
        } else {
            throw 'visitAssignment: lparam isnt variable';
        }
    }


    /**
     * A method that's being triggered when the visitor visits a {@link ValueNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ValueNode.accept(ASTVisitor visitor)
     */
    visitValue(node) {
        debug('visitValue');
        return TypeValue.fromNode(node);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ArithmeticOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ArithmeticOperationNode.accept(ASTVisitor visitor)
     */
    visitArithmeticOperation(node) {
        debug('visitArithmeticOperation');

        /* Get the lparam and rparam */
        let lparam = this._getValue(node.lparam);
        let rparam = this._getValue(node.rparam);

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
    visitUnaryOperation(node) {
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
        let param = node.param.accept(this);

        if (!(param instanceof VariableSymbol)) {
            throw new UnexpectedSymbolError(TypesRegistar.getUnaryOperationString(node.op), node.context);
        }

        /* Get the updated value */
        let value = TypesRegistar.performArithmeticOperation(param.value,
            node.op === Parser.UNARY_PLUS ? Parser.PLUS : Parser.MINUS,
            new TypeValue(NumberType.getInstance(), 1));
        
        /* Update the symbol table */
        this._updateSymbolTable(node.context, param, value);

        /* And return it */
        return param.value;
    }

    /**
     * A method that's being triggered when the visitor visits a {@link PostfixOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see PostfixOperationNode.accept(ASTVisitor visitor)
     */
    visitPostfixOperation(node) {
        debug('visitPostfixOperation');
        /* In postfix operators, we perform the arithmetic expression only after we evaluate the expression */
        let param = node.param.accept(this);

        if (!(param instanceof VariableSymbol)) {
            throw new UnexpectedSymbolError(TypesRegistar.getUnaryOperationString(node.op), node.context);
        }

        /* Save the value before the changes (as we shouldn't use the new value for the rest of the expression) */
        let temp = param.value; // << That'll make it postfix. and that's why unary is better in performance. See? See?
        
        /* Get the updated value */
        let value = TypesRegistar.performArithmeticOperation(param.value,
            node.op === Parser.UNARY_PLUS ? Parser.PLUS : Parser.MINUS,
            new TypeValue(NumberType.getInstance(), 1));
        
        /* Update the symbol table */
        this._updateSymbolTable(node.context, param, value);

        /* And return it */
        return temp;
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableReferenceNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableReferenceNode.accept(ASTVisitor visitor)
     */
    visitVariableReference(node) {
        debug('visitVariableReference: ' + node.toString());
        return this._variableLookup(node.context, node.name);
    }


    /**
     * A method that's being triggered when the visitor visits a {@link CastingNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see CastingNode.accept(ASTVisitor visitor)
     */
    visitCasting(node) {
        /* Simply try to cast this variable */
        try {
            return node.toType.cast(this._getValue(node.value));
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
    visitCondition(node) {
        debug(`visitCondition: ${node}`);

        /* Do we got a logical operator & rparam? */
        if (!node.rparam) {
            // Nope so just use the lparam
            return this._getValue(node.lparam.accept(this));
        }

        /* Get the values */
        let lparam = this._getValue(node.lparam.accept(this));
        let rparam = this._getValue(node.rparam.accept(this));

        /* Apply the operator */
        return AnswerType.getInstance().applyLogicalOperator(lparam, node.logicalOp, rparam);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ConditionalExpressionNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ConditionalExpressionNode.accept(ASTVisitor visitor)
     */
    visitConditionalExpression(node) {
        debug(`visitConditionalExpression: ${node}`);

        /* Get the values */
        let lparam = this._getValue(node.lparam.accept(this));
        let rparam = this._getValue(node.rparam.accept(this));

        /* Compare them using */
        return AnswerType.getInstance().compareValues(lparam, node.op, rparam);
    }

    /**
     * A method that's being triggered when the visitor visits a {@link IfStatementNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see IfStatementNode.accept(ASTVisitor visitor)
     */
    visitIfStatement(node) {
        debug('visitIfStatement: Evaluating ' + node.condition.toString());

        /* Evaluate the condition */
        let result = node.condition.accept(this);
        if (result.value) { // result.value is a standard JS boolean
            return node.trueScope.accept(this);
        } else if (typeof(node.falseScope) !== 'undefined') {
            return node.falseScope.accept(this);
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link FunctionDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see FunctionDeclarationNode.accept(ASTVisitor visitor)
     */
    visitFunctionDeclaration(node) {
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
    visitFunctionCall(node) {
        /* Attempt to find 'at function */
        let symbol = this._functionLookup(node.context, node.name, node.args.length);
        
        /* Is this a native function or a user one? */
        if (symbol.isNativeFunction()) {
            return this._executeNativeFunction(node, symbol);
        } else {
            return this._executeUserFunction(node, symbol);
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ForLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ForLoopNode.accept(ASTVisitor visitor)
     */
    visitForLoop(node) {
        debug('visitForLoop');

        /* Initialize */
        if (node.initialization) {
            node.initialization.accept(this);
        }

        let conditionResult = node.termination.accept(this);
        let iter = 0;
        while (conditionResult.value) {
            /* Perform the loop body */
            node.scope.accept(this);
            
            /* Perform the increment */
            if (node.increment) {
                node.increment.accept(this);
            }

            /* Are we exceeding the maximum iterations? */
            if (node.context.settings.maxIterations > -1 && ++iter >= node.context.settings.maxIterations) {
                throw new StackOverflowError();
            }

            /* Check the loop condition again */
            conditionResult = node.termination.accept(this);
        }
    }

    /**
     * A method that's being triggered when the visitor visits a {@link WhileLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see WhileLoopNode.accept(ASTVisitor visitor)
     */
    visitWhileLoop(node) {
        debug('visitWhileLoop based on condition: ' + node.condition.toString());

        let conditionResult = node.condition.accept(this);
        let iter = 0;
        while (conditionResult.value) {
            /* Perform the loop body */
            node.scope.accept(this);
            
            /* Are we exceeding the maximum iterations? */
            if (node.context.settings.maxIterations > -1 && ++iter >= node.context.settings.maxIterations) {
                throw new StackOverflowError();
            }

            /* Check the loop condition again */
            conditionResult = node.condition.accept(this);
        }
    }

    /*********************** Private helpers ***********************/

    _addSymbol(name, symbol, context = {}) {
        /* Did we delcared it before? */
        let existingSymbol = this._symbolsTable.find(name);
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
        this._symbolsTable.add(name, symbol);
    }

    /**
     * Searchs for the given variable name in the symbols table.
     * @param {EvaluationContext} context The evaluation context.
     * @param {string} name The variable name.
     * @return {VariableSymbol}
     */
    _variableLookup(context, name) {
        let symbol = this._symbolsTable.find(name);
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
    _functionLookup(context, name, argsCount) {
        let symbol = this._symbolsTable.find(name);
        if (symbol === null) {
            debug(`Could not find the symbol ${name} in the symbols table.`);
            throw new UnexpectedSymbolError(name, context);
        }

        /* Is this a variable symbol */
        if (!(symbol instanceof FunctionSymbol)) {
            throw new UnexpectedSymbolError(name, context);
        }

        /* The number of arguments matches what we expect to get? */
        if (symbol.args.length != argsCount) {
            throw new InvalidArgumentsCountError(symbol.name, symbol.args.length, argsCount, context);
        }

        return symbol;
    }

    /**
     * Attempts to get a value from the AST node.
     * @param {ASTNode} node The ast node.
     */
    _getValue(node) {
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
            return this._getValue(node.accept(this));
        }

        /* Is it a symbol? */
        if (node instanceof VariableSymbol) {
            return node.value;
        }

        throw '_getValue dk how to resolve this node ' + node.toString();
    }

    /**
     * Update the symbol table with a new value.
     * @param {ASTContext} ctx
     * @param {Symbol} symbol 
     * @param {Symbol} newValue 
     */
    _updateSymbolTable(ctx, symbol, newValue) {
        debug(`Updating symbol table for ${symbol.name} with ${newValue}`);
        if (!(symbol instanceof VariableSymbol)) {
            throw new Error('_updateSymbolTable expects to get a Symbol.');
        }

        newValue = this._getValue(newValue);

        if (this._isMeanie) {
            // If we're mean, we won't allow to switch data types
            if (symbol.value.type.name != NullType.getInstance().name // we can always use null
                && newValue.type.name != NullType.getInstance().name // we can always use null
                && symbol.value.type.name != newValue.type.name) {
                throw new InvalidOperationError(`The variable "${symbol.name}" contains rvalue of type ${symbol.value.type.name}. It can not get assigned with an rvalue of type ${newValue.type.name}.`, ctx);
            }
        }

        symbol.value = newValue;
        this._symbolsTable.set(symbol.name, symbol);
    }

    /**
     * Executes a native (JS) function.
     * @param {ASTNode} node 
     * @param {FunctionSymbol} symbol 
     */
    _executeNativeFunction(node, symbol) {
        /* Get the args */
        let args = this._executeFunctionGetArgs(node, symbol);

        /* Do we use the type values or should we unpack them? */
        if (!symbol.scope[1]) {
            args = args.map(v => v.value);
        }
        
        /* That's the time we've been waiting forrrrrr!!
        Yesss!! (◡ ‿ ◡✿). Execute it! */
        let result = symbol.scope[0](... args);

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
    _executeUserFunction(node, symbol) {
        throw 'here';
    }

    /**
     * Gets the function arguments.
     * @param {ASTNode} node 
     * @param {FunctionSymbol} symbol 
     */
    _executeFunctionGetArgs(node, symbol) {
        let args = [];
        for (let arg of node.args) {
            let argValue = arg.accept(this);
            if (!(argValue instanceof TypeValue)) {
                throw new UnexpectedSymbolError(symbol.name, node.context);
            }
            
            args.push(argValue);
        }

        return args;
    }

};