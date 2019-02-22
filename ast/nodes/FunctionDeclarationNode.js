
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the FunctionDeclarationNode.
 */
module.exports = class FunctionDeclarationNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx, name, args, scope) {
        super(ctx);

        this.name = name;
        this.args = args;
        this.scope = scope;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.FUNCTIONDECLARATION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitFunctionDeclaration(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitFunctionDeclaration(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `FunctionDeclarationNode { name = "${this.name}", args = "${this.args}", scope = "${this.scope}" }`;
    }
}