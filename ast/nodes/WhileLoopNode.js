
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the WhileLoopNode.
 */
module.exports = class WhileLoopNode extends ASTNode {
    /**
     * Instantiate a new while loop block node.
     * @param {ParsingContext} ctx The parsing contex.
     * @param {ConditionNode} condition The condition to evaluate.
     * @param {CodeBlockNode} scope The code scope to execute as the loop body.
     */
    constructor(ctx, condition, scope) {
        super(ctx);

        this.condition = condition;
        this.scope = scope;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.WHILELOOP;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitWhileLoop(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitWhileLoop(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `WhileLoopNode { condition = ${this.condition}, body = ${this.scope} }`;
    }
}