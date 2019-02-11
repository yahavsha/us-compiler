// Generated from us.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by usParser.

function usVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

usVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
usVisitor.prototype.constructor = usVisitor;

// Visit a parse tree produced by usParser#program.
usVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#meanie_instruction.
usVisitor.prototype.visitMeanie_instruction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#code_block.
usVisitor.prototype.visitCode_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#statement.
usVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#comment.
usVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#declaration.
usVisitor.prototype.visitDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#assignment.
usVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#expression.
usVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#casting.
usVisitor.prototype.visitCasting = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#type_specifiers.
usVisitor.prototype.visitType_specifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#multiplying_expression.
usVisitor.prototype.visitMultiplying_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#pow_expression.
usVisitor.prototype.visitPow_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#signed_atom.
usVisitor.prototype.visitSigned_atom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#atom.
usVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#condition_block.
usVisitor.prototype.visitCondition_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#for_block.
usVisitor.prototype.visitFor_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#while_block.
usVisitor.prototype.visitWhile_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#conditional_expression.
usVisitor.prototype.visitConditional_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#and_chained_conditional_expression.
usVisitor.prototype.visitAnd_chained_conditional_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#single_conditional_expression.
usVisitor.prototype.visitSingle_conditional_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#return_statement.
usVisitor.prototype.visitReturn_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#function_decl.
usVisitor.prototype.visitFunction_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usParser#function_call.
usVisitor.prototype.visitFunction_call = function(ctx) {
  return this.visitChildren(ctx);
};



exports.usVisitor = usVisitor;