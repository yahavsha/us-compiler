
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
module.exports = class ProgramNode extends ASTNode {
    /**
     * Instantiate a new program node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx) {
        super(ctx);

        this.globalScope = undefined;
        this.isMeanie = false;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.PROGRAM;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTNode.visitProgram(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitProgram(this);
    }
    
    /**
     * Gets a description of this node.
     */
    toString() {
        return `ProgramNode { isMeanie = ${this.isMeanie}, globalScope = ${this.globalScope} }`;
    }
}