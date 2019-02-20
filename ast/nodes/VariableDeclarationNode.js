
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
module.exports = class VariableDeclarationNode extends ASTNode {
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
        return ASTNodeType.VARIABLEDECLARATION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitVariableDeclaration(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitVariableDeclaration(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `VariableDeclarationNode { name = "${this.name}" }`;
    }
}