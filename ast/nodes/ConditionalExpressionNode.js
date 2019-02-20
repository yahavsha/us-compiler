
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');
const { AnswerType } = require('../../types');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the ConditionalExpressionNode.
 */
module.exports = class ConditionalExpressionNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx, lparam, op, rparam) {
        super(ctx);

        if (!(lparam instanceof ASTNode) || !(rparam instanceof ASTNode)) {
            throw new Error('lparam and rparam must be nodes.');
        }

        if (!AnswerType.getInstance().isComparatorSymbol(op)) {
            throw new Error('The given op must be a comparison operator symbol.');
        }

        this.lparam = lparam;
        this.op = op;
        this.rparam = rparam;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.CONDITIONALEXPRESSION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitConditionalExpression(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitConditionalExpression(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `ConditionalExpressionNode { lparam = ${this.lparam}, op = Symbol(${AnswerType.getInstance().symbolToComparatorOperator(this.op)}), rparam = ${this.rparam} }`;
    }
}