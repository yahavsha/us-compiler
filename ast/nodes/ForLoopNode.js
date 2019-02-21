
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the ForLoopNode.
 */
module.exports = class ForLoopNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {ASTNode} initialization The loop initialization statement.
     * @param {ASTNode} termination The loop termination statement.
     * @param {ASTNode} increment The loop increment statement.
     * @param {ASTNode} scope The loop content.
     */
    constructor(ctx, initialization, termination, increment, scope) {
        super(ctx);

        this.initialization = initialization;
        this.termination = termination;
        this.increment = increment;
        this.scope = scope;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.FORLOOP;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitForLoop(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitForLoop(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        let builder = [];

        if (this.initialization) {
            builder.push(`initialization = "${this.initialization}"`);
        }

        if (this.termination) {
            builder.push(`termination = "${this.termination}"`);
        }

        if (this.increment) {
            builder.push(`increment = "${this.increment}"`);
        }
        return `ForLoopNode { ${builder.join(', ')}, scope = "${this.scope}" }`;
    }
}