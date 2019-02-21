
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the ReturnStatementNode.
 */
module.exports = class ReturnStatementNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {ASTNode} expression The returned expression.
     */
    constructor(ctx, expression) {
        super(ctx);
        this.expression = expression;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.RETURNSTATEMENT;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitReturnStatement(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitReturnStatement(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `ReturnStatementNode { expression = "${this.expression}" }`;
    }
}