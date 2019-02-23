/**
 * This is the evaluator module.
 * 
 * This module is responsible on evaluating the AST and actually perform the program instructions.
 * @module evaluation
 * @requires ast
 * @requires antlr4
 * @author Yahav S.
 */

 const EvaluationASTVisitor = require('./EvaluationASTVisitor');
 const NativeFunctionDeclaration = require('./NativeFunctionDeclaration');
 const EvaluationResult = require('./EvaluationResult');

 module.exports = {
    EvaluationASTVisitor,
    NativeFunctionDeclaration,
    EvaluationResult
 };