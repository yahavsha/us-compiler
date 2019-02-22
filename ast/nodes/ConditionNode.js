
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');
const ConditionalExpressionNode = require('./ConditionalExpressionNode');
const { AnswerType } = require('../../types');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the ConditionNode.
 */
module.exports = class ConditionNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {*} lparam The actual condition boolean expression.
     * @param {*} logicalOp A logical operator to chain to this condition [optional].
     * @param {*} rparam  A chained expression to evaluate with this expression & logical op [optional].
     */
    constructor(ctx, lparam, logicalOp, rparam) {
        super(ctx);

        /* Did we got a logical operator? */
        if (!AnswerType.getInstance().isLogicalOperatorSymbol(logicalOp)) {
            throw new Error('The given symbol isn\'t a logical operator.');
        }

        this.lparam = lparam;
        this.logicalOp = logicalOp;
        this.rparam = rparam;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.CONDITION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitCondition(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitCondition(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        if (typeof(this.logicalOp) === 'undefined') {
            return `ConditionNode { lparam = ${this.lparam} }`;
        }

        return `ConditionNode { lparam = ${this.lparam}, op = Symbol(${AnswerType.getInstance().symbolToLogicalOperator(this.logicalOp)}), rparam = ${this.rparam} }`;
    }
}