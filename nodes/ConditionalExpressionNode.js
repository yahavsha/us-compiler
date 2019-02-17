/* Get the required dependencies */
const { Node, NodeType } = require('./Node');
const Parser = require('../ast/usParser').usParser;
const ValueNode = require('./ValueNode');
const { isComparatorSymbol, symbolToComparatorOperator } = require('../utils/ConditionsResolver');

/* Define the conditional expression node */
module.exports = class ConditionalExpressionNode extends Node {
    constructor(ctx, lparam, op, rparam) {
        super(ctx);

        if (!(lparam instanceof Node) || !(rparam instanceof Node)) {
            throw new Error('lparam and rparam must be nodes.');
        }

        if (!isComparatorSymbol(op)) {
            throw new Error('The given op must be a comparison operator symbol.');
        }

        this.lparam = lparam;
        this.op = op;
        this.rparam = rparam;
    }

    getType() {
        return NodeType.CONDITION_EXPR;
    }
    
    toString() {
        return `ConditionalExpressionNode { lparam = ${this.lparam}, op = Symbol(${symbolToComparatorOperator(this.op)}), rparam = ${this.rparam} }`;
    }
    
    eval() {
        /* Get the actual value nodes */
        let lparam = this.lparam;
        let rparam = this.rparam;

        if (!(lparam instanceof ValueNode)) {
            lparam = lparam.eval();
        }

        if (!(rparam instanceof ValueNode)) {
            rparam = rparam.eval();
        }
        
        /* What is the operator? */
        let result;
        switch (this.op) {
            case Parser.COMPARE_EQUAL:
                result = lparam.eval() == rparam.eval();
                break;
            case Parser.COMPARE_NOT_EQUAL:
                result = lparam.eval() != rparam.eval();
                break;
            case Parser.COMPARE_SMALLER:
                result = lparam.eval() < rparam.eval();
                break;
            case Parser.COMPARE_GREATER:
                result = lparam.eval() > rparam.eval();
                break;
            case Parser.COMPARE_SMALLER_EQUAL:
                result = lparam.eval() <= rparam.eval();
                break;
            case Parser.COMPARE_GREATER_EQUAL:
                result = lparam.eval() >= rparam.eval();
                break;
            default:
                throw new Error('Unknown comparator operator detected.');
        }

        return result ? ValueNode.TRUE : ValueNode.FALSE;
    }
}