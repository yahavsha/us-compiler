
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the CastingNode.
 */
module.exports = class CastingNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx, value, toType) {
        super(ctx);

        this.value = value;
        this.toType = toType;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.CASTING;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitCasting(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitCasting(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `CastingNode { to = ${this.toType.name}, value = ${this.value} }`;
    }
}