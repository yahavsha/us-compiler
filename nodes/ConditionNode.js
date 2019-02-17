/* Get the required dependencies */
const { Node, NodeType } = require('./Node');
const Parser = require('../ast/usParser').usParser;
const ValueNode = require('./ValueNode');
const ConditionalExpressionNode = require('./ConditionalExpressionNode');
const { isLogicalOperatorSymbol, symbolToLogicalOperator } = require('../utils/ConditionsResolver');

/* Define the conditional expression node */
module.exports = class ConditionNode extends Node {
    /**
     * Initializes a new condition node.
     * @param {ParsingContext} ctx 
     * @param {*} expression The actual condition boolean expression.
     * @param {*} logicalOp A logical operator to chain to this condition [optional].
     * @param {*} chainedExpression  A chained expression to evaluate with this expression & logical op [optional].
     */
    constructor(ctx, expression, logicalOp, chainedExpression) {
        super(ctx);

        if (!(chainedExpression instanceof ConditionalExpressionNode)
                && !(chainedExpression instanceof ConditionNode)) {
            throw new Error('The given expression must be a ConditionalExpressionNode');
        }

        /* Did we got a logical operator? */
        if (typeof(logicalOp) !== 'undefined') {
            if (!isLogicalOperatorSymbol(logicalOp)) {
                throw new Error('The given symbol isn\'t a logical operator.');
            }

            if (!(chainedExpression instanceof ConditionalExpressionNode)
                && !(chainedExpression instanceof ConditionNode)) {
                throw new Error('The given chained expression must be a ConditionNode');
            }
        }

        this.expression = expression;
        this.logicalOp = logicalOp;
        this.chainedExpression = chainedExpression;
    }

    static getType() {
        return NodeType.CONDITION;
    }
    
    toString() {
        if (typeof(this.logicalOp) === 'undefined') {
            return `ConditionNode { expression = ${this.expression} }`;
        }

        return `ConditionNode { lparam = ${this.expression}, op = Symbol(${symbolToLogicalOperator(this.logicalOp)}), rparam = ${this.chainedExpression} }`;
    }
    
    eval() {
        /* If we're not chaining conditions, we just need to evaluate the expression we have.
         * This is the eval() recursion stop rule. */
        if (typeof(this.logicalOp) === 'undefined') {
            return this.expression.eval();
        }
    }
}