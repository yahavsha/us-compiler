
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');
const { TypesRegistar } = require('../../types');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the Arithmetic Operation Node.
 */
module.exports = class ArithmeticOperationNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {ASTNode} lparam The left hand parameter.
     * @param {int} op The arithmetic operation.
     * @param {ASTNode} rparam The right hand parameter.
     */
    constructor(ctx, lparam, op, rparam) {
        super(ctx);

        if (!(lparam instanceof ASTNode) || !(rparam instanceof ASTNode)) {
            throw new Error("ArithmeticOperationNode expects lparam and rparam to be ASTNode.");
        }

        if (!TypesRegistar.isValidArithmeticOperation(op)) {
            throw new Error("The given operator symbol is invalid.");
        }

        this.lparam = lparam;
        this.op = op;
        this.rparam = rparam;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.ARITHMETICOPERATION;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitArithmeticOperation(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitArithmeticOperation(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `ArithmeticOperationNode { lparam = ${this.lparam}, op = ${TypesRegistar.getArithmeticOperationString(this.op)}, rparam = ${this.rparam} }`;
    }
}