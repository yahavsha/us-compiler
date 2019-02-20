/*****************************************************************************
 * Load libraries
 *****************************************************************************/

 /* Load required libraries */
const debug = require('debug')('us:ast');

/* Load the entire available nodes (the list is created automatically with dev-commands.js) */
const {
    ASTNode,
    ASTNodeType,
    ProgramNode,
    ScopeNode,
    AssignmentNode,
    ValueNode,
    ArithmeticOperationNode,
    UnaryOperationNode,
    PostfixOperationNode,
    VariableReferenceNode,
} = require('./nodes');

/*****************************************************************************
 * Define the visitor
 *****************************************************************************/

module.exports = class ASTVisitor {
    constructor() {

    }

    /**
     * A method that's being triggered when the visitor visits a {@link ProgramNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ProgramNode.accept(ASTVisitor visitor)
     */
    visitProgram(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ScopeNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ScopeNode.accept(ASTVisitor visitor)
     */
    visitScope(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableDeclarationNode.accept(ASTVisitor visitor)
     */
    visitVariableDeclaration(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link AssignmentNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see AssignmentNode.accept(ASTVisitor visitor)
     */
    visitAssignment(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ValueNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ValueNode.accept(ASTVisitor visitor)
     */
    visitValue(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ArithmeticOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ArithmeticOperationNode.accept(ASTVisitor visitor)
     */
    visitArithmeticOperation(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link UnaryOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see UnaryOperationNode.accept(ASTVisitor visitor)
     */
    visitUnaryOperation(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link PostfixOperationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see PostfixOperationNode.accept(ASTVisitor visitor)
     */
    visitPostfixOperation(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link VariableReferenceNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see VariableReferenceNode.accept(ASTVisitor visitor)
     */
    visitVariableReference(node) {
        /* Implementation */
    }
};