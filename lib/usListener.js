// Generated from us.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by usParser.
function usListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

usListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
usListener.prototype.constructor = usListener;

// Enter a parse tree produced by usParser#program.
usListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by usParser#program.
usListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by usParser#meanie_instruction.
usListener.prototype.enterMeanie_instruction = function(ctx) {
};

// Exit a parse tree produced by usParser#meanie_instruction.
usListener.prototype.exitMeanie_instruction = function(ctx) {
};


// Enter a parse tree produced by usParser#code_block.
usListener.prototype.enterCode_block = function(ctx) {
};

// Exit a parse tree produced by usParser#code_block.
usListener.prototype.exitCode_block = function(ctx) {
};


// Enter a parse tree produced by usParser#statement.
usListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by usParser#statement.
usListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by usParser#comment.
usListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by usParser#comment.
usListener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by usParser#declaration.
usListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by usParser#declaration.
usListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by usParser#assignment.
usListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by usParser#assignment.
usListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by usParser#expression.
usListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by usParser#expression.
usListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by usParser#casting.
usListener.prototype.enterCasting = function(ctx) {
};

// Exit a parse tree produced by usParser#casting.
usListener.prototype.exitCasting = function(ctx) {
};


// Enter a parse tree produced by usParser#type_specifiers.
usListener.prototype.enterType_specifiers = function(ctx) {
};

// Exit a parse tree produced by usParser#type_specifiers.
usListener.prototype.exitType_specifiers = function(ctx) {
};


// Enter a parse tree produced by usParser#multiplying_expression.
usListener.prototype.enterMultiplying_expression = function(ctx) {
};

// Exit a parse tree produced by usParser#multiplying_expression.
usListener.prototype.exitMultiplying_expression = function(ctx) {
};


// Enter a parse tree produced by usParser#pow_expression.
usListener.prototype.enterPow_expression = function(ctx) {
};

// Exit a parse tree produced by usParser#pow_expression.
usListener.prototype.exitPow_expression = function(ctx) {
};


// Enter a parse tree produced by usParser#signed_atom.
usListener.prototype.enterSigned_atom = function(ctx) {
};

// Exit a parse tree produced by usParser#signed_atom.
usListener.prototype.exitSigned_atom = function(ctx) {
};


// Enter a parse tree produced by usParser#atom.
usListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by usParser#atom.
usListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by usParser#condition_block.
usListener.prototype.enterCondition_block = function(ctx) {
};

// Exit a parse tree produced by usParser#condition_block.
usListener.prototype.exitCondition_block = function(ctx) {
};


// Enter a parse tree produced by usParser#for_block.
usListener.prototype.enterFor_block = function(ctx) {
};

// Exit a parse tree produced by usParser#for_block.
usListener.prototype.exitFor_block = function(ctx) {
};


// Enter a parse tree produced by usParser#while_block.
usListener.prototype.enterWhile_block = function(ctx) {
};

// Exit a parse tree produced by usParser#while_block.
usListener.prototype.exitWhile_block = function(ctx) {
};


// Enter a parse tree produced by usParser#conditional_expression.
usListener.prototype.enterConditional_expression = function(ctx) {
};

// Exit a parse tree produced by usParser#conditional_expression.
usListener.prototype.exitConditional_expression = function(ctx) {
};


// Enter a parse tree produced by usParser#and_chained_conditional_expression.
usListener.prototype.enterAnd_chained_conditional_expression = function(ctx) {
};

// Exit a parse tree produced by usParser#and_chained_conditional_expression.
usListener.prototype.exitAnd_chained_conditional_expression = function(ctx) {
};


// Enter a parse tree produced by usParser#single_conditional_expression.
usListener.prototype.enterSingle_conditional_expression = function(ctx) {
};

// Exit a parse tree produced by usParser#single_conditional_expression.
usListener.prototype.exitSingle_conditional_expression = function(ctx) {
};


// Enter a parse tree produced by usParser#return_statement.
usListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by usParser#return_statement.
usListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by usParser#function_decl.
usListener.prototype.enterFunction_decl = function(ctx) {
};

// Exit a parse tree produced by usParser#function_decl.
usListener.prototype.exitFunction_decl = function(ctx) {
};


// Enter a parse tree produced by usParser#function_call.
usListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by usParser#function_call.
usListener.prototype.exitFunction_call = function(ctx) {
};



exports.usListener = usListener;