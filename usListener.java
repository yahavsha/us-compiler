// Generated from us.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link usParser}.
 */
public interface usListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link usParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(usParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(usParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#code_block}.
	 * @param ctx the parse tree
	 */
	void enterCode_block(usParser.Code_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#code_block}.
	 * @param ctx the parse tree
	 */
	void exitCode_block(usParser.Code_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(usParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(usParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#comment}.
	 * @param ctx the parse tree
	 */
	void enterComment(usParser.CommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#comment}.
	 * @param ctx the parse tree
	 */
	void exitComment(usParser.CommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(usParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(usParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(usParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(usParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(usParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(usParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#casting}.
	 * @param ctx the parse tree
	 */
	void enterCasting(usParser.CastingContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#casting}.
	 * @param ctx the parse tree
	 */
	void exitCasting(usParser.CastingContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#type_specifiers}.
	 * @param ctx the parse tree
	 */
	void enterType_specifiers(usParser.Type_specifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#type_specifiers}.
	 * @param ctx the parse tree
	 */
	void exitType_specifiers(usParser.Type_specifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#multiplying_expression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplying_expression(usParser.Multiplying_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#multiplying_expression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplying_expression(usParser.Multiplying_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#pow_expression}.
	 * @param ctx the parse tree
	 */
	void enterPow_expression(usParser.Pow_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#pow_expression}.
	 * @param ctx the parse tree
	 */
	void exitPow_expression(usParser.Pow_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#signed_atom}.
	 * @param ctx the parse tree
	 */
	void enterSigned_atom(usParser.Signed_atomContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#signed_atom}.
	 * @param ctx the parse tree
	 */
	void exitSigned_atom(usParser.Signed_atomContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#atom}.
	 * @param ctx the parse tree
	 */
	void enterAtom(usParser.AtomContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#atom}.
	 * @param ctx the parse tree
	 */
	void exitAtom(usParser.AtomContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#condition_block}.
	 * @param ctx the parse tree
	 */
	void enterCondition_block(usParser.Condition_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#condition_block}.
	 * @param ctx the parse tree
	 */
	void exitCondition_block(usParser.Condition_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#for_block}.
	 * @param ctx the parse tree
	 */
	void enterFor_block(usParser.For_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#for_block}.
	 * @param ctx the parse tree
	 */
	void exitFor_block(usParser.For_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#while_block}.
	 * @param ctx the parse tree
	 */
	void enterWhile_block(usParser.While_blockContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#while_block}.
	 * @param ctx the parse tree
	 */
	void exitWhile_block(usParser.While_blockContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#conditional_expression}.
	 * @param ctx the parse tree
	 */
	void enterConditional_expression(usParser.Conditional_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#conditional_expression}.
	 * @param ctx the parse tree
	 */
	void exitConditional_expression(usParser.Conditional_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#and_chained_conditional_expression}.
	 * @param ctx the parse tree
	 */
	void enterAnd_chained_conditional_expression(usParser.And_chained_conditional_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#and_chained_conditional_expression}.
	 * @param ctx the parse tree
	 */
	void exitAnd_chained_conditional_expression(usParser.And_chained_conditional_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#single_conditional_expression}.
	 * @param ctx the parse tree
	 */
	void enterSingle_conditional_expression(usParser.Single_conditional_expressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#single_conditional_expression}.
	 * @param ctx the parse tree
	 */
	void exitSingle_conditional_expression(usParser.Single_conditional_expressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#return_statement}.
	 * @param ctx the parse tree
	 */
	void enterReturn_statement(usParser.Return_statementContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#return_statement}.
	 * @param ctx the parse tree
	 */
	void exitReturn_statement(usParser.Return_statementContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void enterFunction_decl(usParser.Function_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void exitFunction_decl(usParser.Function_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link usParser#function_call}.
	 * @param ctx the parse tree
	 */
	void enterFunction_call(usParser.Function_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link usParser#function_call}.
	 * @param ctx the parse tree
	 */
	void exitFunction_call(usParser.Function_callContext ctx);
}