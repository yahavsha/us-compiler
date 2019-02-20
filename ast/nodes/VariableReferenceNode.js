
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the VariableReferenceNode.
 */
module.exports = class VariableReferenceNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {string} name The variable name.
     */
    constructor(ctx, name) {
        super(ctx);
        this.name = name;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.VARIABLEREFERENCE;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitVariableReference(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitVariableReference(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `VariableReferenceNode { name = "${this.name}" }`;
    }
}