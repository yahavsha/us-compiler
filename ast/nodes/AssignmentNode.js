
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the node class.
 */
module.exports = class AssignmentNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx, lparam, rparam) {
        super(ctx);

        this.lparam = lparam;
        this.rparam = rparam;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.ASSIGNMENT;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTNode.visitAssignment(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitAssignment(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `AssignmentNode { lparam = ${this.lparam}, rparam = ${this.rparam} }`;
    }
}