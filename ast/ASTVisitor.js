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
    ConditionNode,
    CastingNode,
    ConditionalExpressionNode,
    IfStatementNode,
    ForLoopNode,
    WhileLoopNode,
    FunctionDeclarationNode,
    FunctionCallNode,
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

    /**
     * A method that's being triggered when the visitor visits a {@link ConditionNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ConditionNode.accept(ASTVisitor visitor)
     */
    visitCondition(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link CastingNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see CastingNode.accept(ASTVisitor visitor)
     */
    visitCasting(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ConditionalExpressionNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ConditionalExpressionNode.accept(ASTVisitor visitor)
     */
    visitConditionalExpression(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link IfStatementNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see IfStatementNode.accept(ASTVisitor visitor)
     */
    visitIfStatement(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link ForLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ForLoopNode.accept(ASTVisitor visitor)
     */
    visitForLoop(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link WhileLoopNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see WhileLoopNode.accept(ASTVisitor visitor)
     */
    visitWhileLoop(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link FunctionDeclarationNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see FunctionDeclarationNode.accept(ASTVisitor visitor)
     */
    visitFunctionDeclaration(node) {
        /* Implementation */
    }

    /**
     * A method that's being triggered when the visitor visits a {@link FunctionCallNode}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see FunctionCallNode.accept(ASTVisitor visitor)
     */
    visitFunctionCall(node) {
        /* Implementation */
    }
};