/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

 /* The basic node types */
const { Node, NodeType } = require('./Node');

/* The ValueNode (for instanceof) */
const ValueNode = require('./ValueNode');

/* Semantic Errors */
const { DivisionByZeroError, ArithmeticOperationError } = require('../interperter/CompilationErrors');

/* Access to the parser for symbols etc. */
const Parser = require('../ast/usParser').usParser;

/* Types & Operations Resolution */
const {
    isOPSymbol,
    arithmeticOperationToString,
    symbolToTypeName,
    createJSValue
} = require('../utils/TypesResolver');

/*****************************************************************************
 * Define the arithmetic operation node
 *****************************************************************************/

module.exports = class ArithmeticOperationNode extends Node {
    constructor(ctx, lparam, op, rparam) {
        super(ctx);

        if (!(lparam instanceof Node) || !(rparam instanceof Node)) {
            throw new Error("ArithmeticOperationNode expects lparam and rparam to be nodes.");
        }
        if (!isOPSymbol(op)) {
            throw new Error("The given operator symbol is invalid.");
        }
        
        this.lparam = lparam;
        this.op = op;
        this.rparam = rparam;
    }

    static getType() {
        return NodeType.ARITHMETIC_OPERATION;
    }

    toString() {
        return `ArithmeticOperationNode(${this.lparam} Symbol(${arithmeticOperationToString(this.op)}) ${this.rparam})`;
    }

    eval() {
        /* Setup */
        let lparam = this.lparam;
        let rparam = this.rparam;

        /* LParam and RParam might already been a ValueNode, or more complex nodes,
           such as nested arithmetic results. In this case, we need to evaluate them */
        if (!(lparam instanceof ValueNode)) {
            lparam = lparam.eval();
        }
        if (!(rparam instanceof ValueNode)) {
            rparam = lparam.eval();
        }

        /* Now we can forward them to the evaluation function */
        return this._evalValueNodes(lparam, rparam);
    }

    /**
     * Evaluates two value nodes.
     * @param {ValueNode} lparam The left parameter.
     * @param {ValueNode} rparam The right parameter.
     * @return {*} The evaluation result.
     */
    _evalValueNodes(lparam, rparam) {
        /* If both types are numbers, it's simple mathematical expression */
        if (lparam.type == Parser.NUMBER && rparam.type == Parser.NUMBER) {
            return this._evalNumbers(lparam, rparam);
        }
        
        /* Handle strings */
        if (lparam.type == Parser.STRING && rparam.type == Parser.STRING) {
            return this._evalStrings(lparam, rparam);
        }

        /* Handle String & Number operations */
        if (lparam.type == Parser.NUMBER) {
            if (rparam.type == Parser.STRING) {
                return this._evalStringAndNumber(lparam, rparam);
            }
        } 

        if (rparam.type == Parser.NUMBER) {
            if (lparam.type == Parser.STRING) {
                return this._evalStringAndNumber(lparam, rparam);
            }
        }

        /* The rest of the allowed operations (e.g. with booleans) are just concats */
        if (lparam.type == Parser.STRING || rparam.type == Parser.STRING) {
            return this._evalStringConcat(lparam, rparam);
        }

        // Operators with booleans & booleans are not allowed
        throw new ArithmeticOperationError(this.context, lparam, this.op, rparam);
    }

    _evalNumbers(lparam, rparam) {
        let value;
        switch (this.op) {
            case Parser.PLUS:
                value = lparam.eval() + rparam.eval();
                break;
            case Parser.MINUS:
                value = lparam.eval() - rparam.eval();
                break;
            case Parser.MULTIPLY:
                value = lparam.eval() * rparam.eval();
                break;
            case Parser.DIVIDE:
                if (rparam.eval() == 0) {
                    throw new DivisionByZeroError(this.context);
                }

                value = lparam.eval() / rparam.eval();
                break;
            case Parser.MOD:
                value = lparam.eval() % rparam.eval();
                break;
            case Parser.POWER:
                value = lparam.eval() ** rparam.eval();
                break;
            default:
                throw new Error("Could not resolve the arithmetic operation.");
        }

        const NodeFactory = Node.getNodeFactory();
        return NodeFactory({ ctx: this.context, type: NodeType.VALUE, args: [Parser.NUMBER, value] });
    }

    _evalStrings(lparam, rparam) {
        const NodeFactory = Node.getNodeFactory();
        /* With both strings, we only support operator+ */
        if (this.op == Parser.PLUS) {
            return NodeFactory({
                ctx: this.context,
                type: NodeType.VALUE,
                args: [Parser.STRING, lparam.eval() + rparam.eval()]
            });
        }

        throw new ArithmeticOperationError(this.context, lparam, this.op, rparam);
    }

    _evalStringAndNumber(lparam, rparam) {
        const NodeFactory = Node.getNodeFactory();
        
        /* What is the operation? */
        switch (this.op) {
            case Parser.PLUS:
                /* If it's a plus, we'll cast the number into a string and concat them */
                return NodeFactory({
                    ctx: this.context,
                    type: NodeType.VALUE,
                    args: [Parser.STRING, lparam.eval() + rparam.eval()]
                });
            case Parser.MULTIPLY:
                /* Who's the string and who's the number? */
                let strParam = lparam.type == Parser.STRING ? lparam : rparam;
                let numParam = lparam.type == Parser.NUMBER ? lparam : rparam;

                return NodeFactory({
                    ctx: this.context,
                    type: NodeType.VALUE,
                    args: [Parser.STRING, strParam.eval().repeat(numParam.eval())]
                });
            case Parser.MINUS:
            case Parser.DIVIDE:
            case Parser.MOD:
            case Parser.POWER:
                throw new ArithmeticOperationError(this.context, lparam, this.op, rparam);
            default:
                throw new Error("Could not resolve the arithmetic operation.");
        }
    }

    _evalStringConcat(lparam, rparam) {
        if (this.op == Parser.PLUS) {
            /* We need to cast the other parameter, so we'll use the casting node */
            throw new Error('here');

             return NodeFactory({
                 ctx: this.context,
                 type: NodeType.VALUE,
                 args: [Parser.STRING, strParam.eval().repeat(numParam.eval())]
             });
        }
    }
}