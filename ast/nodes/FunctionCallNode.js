
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the FunctionCallNode.
 */
module.exports = class FunctionCallNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {string} name The function name.
     * @param {array} args The function args.
     */
    constructor(ctx, name, args) {
        super(ctx);

        this.name = name;
        this.args = args;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.FUNCTIONCALL;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitFunctionCall(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitFunctionCall(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `FunctionCallNode { name = "${this.name}", args = "${this.args}" }`;
    }
}