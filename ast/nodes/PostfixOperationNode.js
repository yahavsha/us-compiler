
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');
const TypeRegistar = require('../../types');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the Postfix Operation Node.
 */
module.exports = class PostfixOperationNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {ASTNode} param The parameter.
     * @param {int} op The unary op symbol.
     */
    constructor(ctx, param, op) {
        super(ctx);

        if (!(param instanceof ASTNode)) {
            throw new Error("UnaryOperationNode expects lparam and rparam to be ASTNode.");
        }

        if (!TypeRegistar.isValidUnaryOperation(op)) {
            throw new Error("The given unary operator symbol is invalid.");
        }

        this.param = param;
        this.op = op;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.POSTFIXOPERATION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitUnaryOperation(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitUnaryOperation(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `UnaryOperationNode { this.op = ${TypeRegistar.getUnaryOperationString(this.op)}, param = ${this.param} }`;
    }
}