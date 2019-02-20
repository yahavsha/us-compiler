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
    SemanticError,
    UnexpectedSymbolError,
    VariableAlreadyDefinedError,
    VariableNotDefinedError
} = require('../interperter/CompilationErrors');

/* Symbols */
const {
    SymbolType,
    SymbolFactory,
    SymbolTable,
    VariableSymbol
} = require('./symbols');

/* Misc */
const { TypesRegistar, TypeValue, NumberType } = require('../types');
const Stack = require('../utils/Stack');

/*****************************************************************************
 * Define our strong evaluator! ᕙ(＠°▽°＠)ᕗ
 *****************************************************************************/

module.exports = class EvaluationASTVisitor extends ASTVisitor {
    constructor() {
        super();
        this._symbolsTable = new SymbolTable();
        this._isMeanie = false;
        this._scopeDepth = 0;
        this._callStack = new Stack();
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
        /* Did we delcared it before? */
        if (this._symbolsTable.exists(node.name)) {
            if (this._isMeanie) {
                throw new VariableAlreadyDefinedError(node.name, node.context);
            }

            return; // Otherwise we just ignore it.
        }

        /* Declare it */
        if (node.value) {
            /* With value */
            let value = node.value.accept(this);
            this._symbolsTable.add(node.name, SymbolFactory({
                type: SymbolType.VARIABLE,
                args: [node.name, value]
            }));
        } else {
            /* W/O value */
            this._symbolsTable.add(node.name, SymbolFactory({
                type: SymbolType.VARIABLE,
                args: [node.name]
            }));
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
            this._updateSymbolTable(lparam, rparam);
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
        this._updateSymbolTable(param, value);

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
        this._updateSymbolTable(param, value);

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

    /*********************** Private helpers ***********************/

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
                this._symbolsTable.add(node.name, symbol);
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
     * @param {Symbol} symbol 
     * @param {Symbol} newValue 
     */
    _updateSymbolTable(symbol, newValue) {
        if (!(symbol instanceof VariableSymbol)) {
            throw new Error('_updateSymbolTable expects to get a Symbol.');
        }

        symbol.value = this._getValue(newValue);
        this._symbolsTable.set(symbol.name, symbol);
    }
};