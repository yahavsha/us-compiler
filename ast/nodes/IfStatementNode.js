
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the IfStatementNode.
 */
module.exports = class IfStatementNode extends ASTNode {
    /**
     * Instantiate a new if statement block.
     * @param {ParsingContext} ctx The parsing contex.
     * @param {ConditionNode} condition The condition to evaluate.
     * @param {CodeBlockNode} ifTrueCode The code block node that points to the code that should be execute in case the condition yields true.
     * @param {CodeBlockNode} ifFalseCode The code block node that points to the code that should be execute in case the condition yields false.
     */
    constructor(ctx, condition, ifTrueCode, ifFalseCode) {
        super(ctx);
        
        this.condition = condition;
        this.trueScope = ifTrueCode;
        this.falseScope = ifFalseCode;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.IFSTATEMENT;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitIfStatement(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitIfStatement(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `IfStatementNode { condition = ${this.condition}, trueScope = ${this.trueScope}, falseScope = ${this.falseScope} }`;
    }
}