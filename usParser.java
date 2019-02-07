// Generated from us.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class usParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		START_PROGRAM=1, END_PROGRAM=2, TRUE=3, FALSE=4, NULL=5, ASSIGNMENT=6, 
		TSTRING=7, TNUMBER=8, TBOOLEAN=9, VAR_DECL=10, VAR_DECL_ASSGN=11, VAR_CAST=12, 
		VAR_CAST_TO=13, COMPARE_EQUAL=14, COMPARE_NOT_EQUAL=15, COMPARE_GREATER=16, 
		COMPARE_SMALLER=17, LOGICAL_AND=18, LOGICAL_OR=19, LOGICAL_NOT=20, IF=21, 
		CONDITION_SUFFIX=22, IF_SUFFIX=23, ELSE=24, ELSE_SUFFIX=25, FOR=26, FOR_TERMINATOR=27, 
		FOR_SUFFIX=28, WHILE=29, WHILE_SUFFIX=30, RETURN=31, FUNCTION=32, FUNCTION_ARGS=33, 
		FUNCTION_ARGS_SEP=34, FUNCTION_DECL_SUFFIX=35, FUNCTION_SUFFIX=36, FUNCTION_CALL=37, 
		SEMICOLON=38, LPAREN=39, RPAREN=40, PLUS=41, MINUS=42, MULTIPLY=43, DIVIDE=44, 
		MOD=45, POWER=46, NUMBER=47, STRING=48, LABEL=49, COMMENT=50, MULTI_LINE_COMMENT=51, 
		UNKNOWN=52;
	public static final int
		RULE_program = 0, RULE_code_block = 1, RULE_statement = 2, RULE_comment = 3, 
		RULE_declaration = 4, RULE_assignment = 5, RULE_expression = 6, RULE_casting = 7, 
		RULE_type_specifiers = 8, RULE_multiplying_expression = 9, RULE_pow_expression = 10, 
		RULE_signed_atom = 11, RULE_atom = 12, RULE_condition_block = 13, RULE_for_block = 14, 
		RULE_while_block = 15, RULE_conditional_expression = 16, RULE_and_chained_conditional_expression = 17, 
		RULE_single_conditional_expression = 18, RULE_return_statement = 19, RULE_function_decl = 20, 
		RULE_function_call = 21;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "code_block", "statement", "comment", "declaration", "assignment", 
			"expression", "casting", "type_specifiers", "multiplying_expression", 
			"pow_expression", "signed_atom", "atom", "condition_block", "for_block", 
			"while_block", "conditional_expression", "and_chained_conditional_expression", 
			"single_conditional_expression", "return_statement", "function_decl", 
			"function_call"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'hey'", "'byes'", "'yupyup'", "'nop'", "'...'", "'is'", "'Words'", 
			"'Number'", "'Answer'", "'sup'", "'woah'", "'cosplay'", "'as'", "'same'", 
			"'diff'", "'big'", "'small'", "'also'", "'or'", "'nah'", "'anw'", "'?'", 
			"'yay!'", "'gosh'", "'ugh!'", "'hides'", "'til'", "'gotcha!'", "'huh'", 
			"'stop!'", "'gimme'", "'friend'", "'with'", "','", "':'", "'hihi!'", 
			"'summons'", "';'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'%'", 
			"'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "START_PROGRAM", "END_PROGRAM", "TRUE", "FALSE", "NULL", "ASSIGNMENT", 
			"TSTRING", "TNUMBER", "TBOOLEAN", "VAR_DECL", "VAR_DECL_ASSGN", "VAR_CAST", 
			"VAR_CAST_TO", "COMPARE_EQUAL", "COMPARE_NOT_EQUAL", "COMPARE_GREATER", 
			"COMPARE_SMALLER", "LOGICAL_AND", "LOGICAL_OR", "LOGICAL_NOT", "IF", 
			"CONDITION_SUFFIX", "IF_SUFFIX", "ELSE", "ELSE_SUFFIX", "FOR", "FOR_TERMINATOR", 
			"FOR_SUFFIX", "WHILE", "WHILE_SUFFIX", "RETURN", "FUNCTION", "FUNCTION_ARGS", 
			"FUNCTION_ARGS_SEP", "FUNCTION_DECL_SUFFIX", "FUNCTION_SUFFIX", "FUNCTION_CALL", 
			"SEMICOLON", "LPAREN", "RPAREN", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", 
			"MOD", "POWER", "NUMBER", "STRING", "LABEL", "COMMENT", "MULTI_LINE_COMMENT", 
			"UNKNOWN"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "us.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public usParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode START_PROGRAM() { return getToken(usParser.START_PROGRAM, 0); }
		public TerminalNode END_PROGRAM() { return getToken(usParser.END_PROGRAM, 0); }
		public Code_blockContext code_block() {
			return getRuleContext(Code_blockContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(START_PROGRAM);
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				setState(45);
				code_block();
				}
			}

			setState(48);
			match(END_PROGRAM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Code_blockContext extends ParserRuleContext {
		public List<Function_declContext> function_decl() {
			return getRuleContexts(Function_declContext.class);
		}
		public Function_declContext function_decl(int i) {
			return getRuleContext(Function_declContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Code_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_code_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterCode_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitCode_block(this);
		}
	}

	public final Code_blockContext code_block() throws RecognitionException {
		Code_blockContext _localctx = new Code_blockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_code_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FUNCTION) {
				{
				{
				setState(50);
				function_decl();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(56);
				statement();
				}
				}
				setState(59); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public Condition_blockContext condition_block() {
			return getRuleContext(Condition_blockContext.class,0);
		}
		public For_blockContext for_block() {
			return getRuleContext(For_blockContext.class,0);
		}
		public While_blockContext while_block() {
			return getRuleContext(While_blockContext.class,0);
		}
		public Return_statementContext return_statement() {
			return getRuleContext(Return_statementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(61);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(62);
				expression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(63);
				declaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(64);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(65);
				condition_block();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(66);
				for_block();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(67);
				while_block();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(68);
				return_statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode COMMENT() { return getToken(usParser.COMMENT, 0); }
		public TerminalNode MULTI_LINE_COMMENT() { return getToken(usParser.MULTI_LINE_COMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterComment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitComment(this);
		}
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			_la = _input.LA(1);
			if ( !(_la==COMMENT || _la==MULTI_LINE_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public TerminalNode VAR_DECL() { return getToken(usParser.VAR_DECL, 0); }
		public TerminalNode LABEL() { return getToken(usParser.LABEL, 0); }
		public TerminalNode VAR_DECL_ASSGN() { return getToken(usParser.VAR_DECL_ASSGN, 0); }
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitDeclaration(this);
		}
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declaration);
		try {
			setState(77);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR_DECL:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				match(VAR_DECL);
				setState(74);
				match(LABEL);
				}
				break;
			case VAR_DECL_ASSGN:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				match(VAR_DECL_ASSGN);
				setState(76);
				assignment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(usParser.LABEL, 0); }
		public TerminalNode ASSIGNMENT() { return getToken(usParser.ASSIGNMENT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitAssignment(this);
		}
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(LABEL);
			setState(80);
			match(ASSIGNMENT);
			setState(81);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public List<Multiplying_expressionContext> multiplying_expression() {
			return getRuleContexts(Multiplying_expressionContext.class);
		}
		public Multiplying_expressionContext multiplying_expression(int i) {
			return getRuleContext(Multiplying_expressionContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(usParser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(usParser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(usParser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(usParser.MINUS, i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			multiplying_expression();
			setState(88);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(84);
					_la = _input.LA(1);
					if ( !(_la==PLUS || _la==MINUS) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(85);
					multiplying_expression();
					}
					} 
				}
				setState(90);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CastingContext extends ParserRuleContext {
		public TerminalNode VAR_CAST() { return getToken(usParser.VAR_CAST, 0); }
		public TerminalNode LABEL() { return getToken(usParser.LABEL, 0); }
		public TerminalNode VAR_CAST_TO() { return getToken(usParser.VAR_CAST_TO, 0); }
		public Type_specifiersContext type_specifiers() {
			return getRuleContext(Type_specifiersContext.class,0);
		}
		public CastingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_casting; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterCasting(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitCasting(this);
		}
	}

	public final CastingContext casting() throws RecognitionException {
		CastingContext _localctx = new CastingContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_casting);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(VAR_CAST);
			setState(92);
			match(LABEL);
			setState(93);
			match(VAR_CAST_TO);
			setState(94);
			type_specifiers();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_specifiersContext extends ParserRuleContext {
		public TerminalNode TSTRING() { return getToken(usParser.TSTRING, 0); }
		public TerminalNode TNUMBER() { return getToken(usParser.TNUMBER, 0); }
		public TerminalNode TBOOLEAN() { return getToken(usParser.TBOOLEAN, 0); }
		public Type_specifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_specifiers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterType_specifiers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitType_specifiers(this);
		}
	}

	public final Type_specifiersContext type_specifiers() throws RecognitionException {
		Type_specifiersContext _localctx = new Type_specifiersContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_type_specifiers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TSTRING) | (1L << TNUMBER) | (1L << TBOOLEAN))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Multiplying_expressionContext extends ParserRuleContext {
		public List<Pow_expressionContext> pow_expression() {
			return getRuleContexts(Pow_expressionContext.class);
		}
		public Pow_expressionContext pow_expression(int i) {
			return getRuleContext(Pow_expressionContext.class,i);
		}
		public List<TerminalNode> MULTIPLY() { return getTokens(usParser.MULTIPLY); }
		public TerminalNode MULTIPLY(int i) {
			return getToken(usParser.MULTIPLY, i);
		}
		public List<TerminalNode> DIVIDE() { return getTokens(usParser.DIVIDE); }
		public TerminalNode DIVIDE(int i) {
			return getToken(usParser.DIVIDE, i);
		}
		public Multiplying_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplying_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterMultiplying_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitMultiplying_expression(this);
		}
	}

	public final Multiplying_expressionContext multiplying_expression() throws RecognitionException {
		Multiplying_expressionContext _localctx = new Multiplying_expressionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_multiplying_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			pow_expression();
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULTIPLY || _la==DIVIDE) {
				{
				{
				setState(99);
				_la = _input.LA(1);
				if ( !(_la==MULTIPLY || _la==DIVIDE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(100);
				pow_expression();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pow_expressionContext extends ParserRuleContext {
		public List<Signed_atomContext> signed_atom() {
			return getRuleContexts(Signed_atomContext.class);
		}
		public Signed_atomContext signed_atom(int i) {
			return getRuleContext(Signed_atomContext.class,i);
		}
		public List<TerminalNode> POWER() { return getTokens(usParser.POWER); }
		public TerminalNode POWER(int i) {
			return getToken(usParser.POWER, i);
		}
		public Pow_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pow_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterPow_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitPow_expression(this);
		}
	}

	public final Pow_expressionContext pow_expression() throws RecognitionException {
		Pow_expressionContext _localctx = new Pow_expressionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_pow_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			signed_atom();
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==POWER) {
				{
				{
				setState(107);
				match(POWER);
				setState(108);
				signed_atom();
				}
				}
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Signed_atomContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(usParser.PLUS, 0); }
		public Signed_atomContext signed_atom() {
			return getRuleContext(Signed_atomContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(usParser.MINUS, 0); }
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public Signed_atomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_signed_atom; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterSigned_atom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitSigned_atom(this);
		}
	}

	public final Signed_atomContext signed_atom() throws RecognitionException {
		Signed_atomContext _localctx = new Signed_atomContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_signed_atom);
		try {
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(114);
				match(PLUS);
				setState(115);
				signed_atom();
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(116);
				match(MINUS);
				setState(117);
				signed_atom();
				}
				break;
			case TRUE:
			case FALSE:
			case NULL:
			case VAR_CAST:
			case FUNCTION_CALL:
			case LPAREN:
			case NUMBER:
			case STRING:
			case LABEL:
				enterOuterAlt(_localctx, 3);
				{
				setState(118);
				atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(usParser.LABEL, 0); }
		public TerminalNode NUMBER() { return getToken(usParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(usParser.STRING, 0); }
		public TerminalNode NULL() { return getToken(usParser.NULL, 0); }
		public TerminalNode TRUE() { return getToken(usParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(usParser.FALSE, 0); }
		public TerminalNode LPAREN() { return getToken(usParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(usParser.RPAREN, 0); }
		public CastingContext casting() {
			return getRuleContext(CastingContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterAtom(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitAtom(this);
		}
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_atom);
		try {
			setState(133);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LABEL:
				enterOuterAlt(_localctx, 1);
				{
				setState(121);
				match(LABEL);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(122);
				match(NUMBER);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(123);
				match(STRING);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(124);
				match(NULL);
				}
				break;
			case TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(125);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 6);
				{
				setState(126);
				match(FALSE);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 7);
				{
				setState(127);
				match(LPAREN);
				setState(128);
				expression();
				setState(129);
				match(RPAREN);
				}
				break;
			case VAR_CAST:
				enterOuterAlt(_localctx, 8);
				{
				setState(131);
				casting();
				}
				break;
			case FUNCTION_CALL:
				enterOuterAlt(_localctx, 9);
				{
				setState(132);
				function_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Condition_blockContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(usParser.IF, 0); }
		public Conditional_expressionContext conditional_expression() {
			return getRuleContext(Conditional_expressionContext.class,0);
		}
		public TerminalNode CONDITION_SUFFIX() { return getToken(usParser.CONDITION_SUFFIX, 0); }
		public TerminalNode IF_SUFFIX() { return getToken(usParser.IF_SUFFIX, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> ELSE() { return getTokens(usParser.ELSE); }
		public TerminalNode ELSE(int i) {
			return getToken(usParser.ELSE, i);
		}
		public TerminalNode ELSE_SUFFIX() { return getToken(usParser.ELSE_SUFFIX, 0); }
		public Condition_blockContext condition_block() {
			return getRuleContext(Condition_blockContext.class,0);
		}
		public Condition_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterCondition_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitCondition_block(this);
		}
	}

	public final Condition_blockContext condition_block() throws RecognitionException {
		Condition_blockContext _localctx = new Condition_blockContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_condition_block);
		int _la;
		try {
			setState(169);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(135);
				match(IF);
				setState(136);
				conditional_expression();
				setState(137);
				match(CONDITION_SUFFIX);
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(138);
					statement();
					}
					}
					setState(143);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(144);
				match(IF_SUFFIX);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(146);
				match(IF);
				setState(147);
				conditional_expression();
				setState(148);
				match(CONDITION_SUFFIX);
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(149);
					statement();
					}
					}
					setState(154);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(155);
				match(IF_SUFFIX);
				setState(158);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					setState(156);
					match(ELSE);
					setState(157);
					condition_block();
					}
					break;
				}
				setState(160);
				match(ELSE);
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(161);
					statement();
					}
					}
					setState(166);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(167);
				match(ELSE_SUFFIX);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class For_blockContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(usParser.FOR, 0); }
		public List<TerminalNode> LPAREN() { return getTokens(usParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(usParser.LPAREN, i);
		}
		public TerminalNode SEMICOLON() { return getToken(usParser.SEMICOLON, 0); }
		public List<TerminalNode> RPAREN() { return getTokens(usParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(usParser.RPAREN, i);
		}
		public TerminalNode FOR_TERMINATOR() { return getToken(usParser.FOR_TERMINATOR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode FOR_SUFFIX() { return getToken(usParser.FOR_SUFFIX, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public For_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterFor_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitFor_block(this);
		}
	}

	public final For_blockContext for_block() throws RecognitionException {
		For_blockContext _localctx = new For_blockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_for_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(FOR);
			setState(172);
			match(LPAREN);
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_CAST) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL))) != 0)) {
				{
				setState(173);
				expression();
				}
			}

			setState(176);
			match(SEMICOLON);
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_CAST) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL))) != 0)) {
				{
				setState(177);
				expression();
				}
			}

			setState(180);
			match(RPAREN);
			setState(181);
			match(FOR_TERMINATOR);
			setState(182);
			match(LPAREN);
			setState(183);
			expression();
			setState(184);
			match(RPAREN);
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(185);
				statement();
				}
				}
				setState(190);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(191);
			match(FOR_SUFFIX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_blockContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(usParser.WHILE, 0); }
		public Conditional_expressionContext conditional_expression() {
			return getRuleContext(Conditional_expressionContext.class,0);
		}
		public TerminalNode CONDITION_SUFFIX() { return getToken(usParser.CONDITION_SUFFIX, 0); }
		public TerminalNode WHILE_SUFFIX() { return getToken(usParser.WHILE_SUFFIX, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public While_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterWhile_block(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitWhile_block(this);
		}
	}

	public final While_blockContext while_block() throws RecognitionException {
		While_blockContext _localctx = new While_blockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_while_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(WHILE);
			setState(194);
			conditional_expression();
			setState(195);
			match(CONDITION_SUFFIX);
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(196);
				statement();
				}
				}
				setState(201);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(202);
			match(WHILE_SUFFIX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Conditional_expressionContext extends ParserRuleContext {
		public List<And_chained_conditional_expressionContext> and_chained_conditional_expression() {
			return getRuleContexts(And_chained_conditional_expressionContext.class);
		}
		public And_chained_conditional_expressionContext and_chained_conditional_expression(int i) {
			return getRuleContext(And_chained_conditional_expressionContext.class,i);
		}
		public List<TerminalNode> LOGICAL_AND() { return getTokens(usParser.LOGICAL_AND); }
		public TerminalNode LOGICAL_AND(int i) {
			return getToken(usParser.LOGICAL_AND, i);
		}
		public Conditional_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditional_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterConditional_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitConditional_expression(this);
		}
	}

	public final Conditional_expressionContext conditional_expression() throws RecognitionException {
		Conditional_expressionContext _localctx = new Conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_conditional_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			and_chained_conditional_expression();
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_AND) {
				{
				{
				setState(205);
				match(LOGICAL_AND);
				setState(206);
				and_chained_conditional_expression();
				}
				}
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class And_chained_conditional_expressionContext extends ParserRuleContext {
		public List<Single_conditional_expressionContext> single_conditional_expression() {
			return getRuleContexts(Single_conditional_expressionContext.class);
		}
		public Single_conditional_expressionContext single_conditional_expression(int i) {
			return getRuleContext(Single_conditional_expressionContext.class,i);
		}
		public List<TerminalNode> LOGICAL_NOT() { return getTokens(usParser.LOGICAL_NOT); }
		public TerminalNode LOGICAL_NOT(int i) {
			return getToken(usParser.LOGICAL_NOT, i);
		}
		public List<TerminalNode> LOGICAL_OR() { return getTokens(usParser.LOGICAL_OR); }
		public TerminalNode LOGICAL_OR(int i) {
			return getToken(usParser.LOGICAL_OR, i);
		}
		public And_chained_conditional_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and_chained_conditional_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterAnd_chained_conditional_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitAnd_chained_conditional_expression(this);
		}
	}

	public final And_chained_conditional_expressionContext and_chained_conditional_expression() throws RecognitionException {
		And_chained_conditional_expressionContext _localctx = new And_chained_conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_and_chained_conditional_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOGICAL_NOT) {
				{
				setState(212);
				match(LOGICAL_NOT);
				}
			}

			setState(215);
			single_conditional_expression();
			setState(223);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_OR) {
				{
				{
				setState(216);
				match(LOGICAL_OR);
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOGICAL_NOT) {
					{
					setState(217);
					match(LOGICAL_NOT);
					}
				}

				setState(220);
				single_conditional_expression();
				}
				}
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Single_conditional_expressionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode COMPARE_EQUAL() { return getToken(usParser.COMPARE_EQUAL, 0); }
		public TerminalNode COMPARE_NOT_EQUAL() { return getToken(usParser.COMPARE_NOT_EQUAL, 0); }
		public TerminalNode COMPARE_GREATER() { return getToken(usParser.COMPARE_GREATER, 0); }
		public TerminalNode COMPARE_SMALLER() { return getToken(usParser.COMPARE_SMALLER, 0); }
		public Single_conditional_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_single_conditional_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterSingle_conditional_expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitSingle_conditional_expression(this);
		}
	}

	public final Single_conditional_expressionContext single_conditional_expression() throws RecognitionException {
		Single_conditional_expressionContext _localctx = new Single_conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_single_conditional_expression);
		try {
			setState(242);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(226);
				expression();
				setState(227);
				match(COMPARE_EQUAL);
				setState(228);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(230);
				expression();
				setState(231);
				match(COMPARE_NOT_EQUAL);
				setState(232);
				expression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(234);
				expression();
				setState(235);
				match(COMPARE_GREATER);
				setState(236);
				expression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(238);
				expression();
				setState(239);
				match(COMPARE_SMALLER);
				setState(240);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Return_statementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(usParser.RETURN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Return_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterReturn_statement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitReturn_statement(this);
		}
	}

	public final Return_statementContext return_statement() throws RecognitionException {
		Return_statementContext _localctx = new Return_statementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_return_statement);
		try {
			setState(247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(244);
				match(RETURN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(245);
				match(RETURN);
				setState(246);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_declContext extends ParserRuleContext {
		public TerminalNode FUNCTION() { return getToken(usParser.FUNCTION, 0); }
		public List<TerminalNode> LABEL() { return getTokens(usParser.LABEL); }
		public TerminalNode LABEL(int i) {
			return getToken(usParser.LABEL, i);
		}
		public TerminalNode FUNCTION_DECL_SUFFIX() { return getToken(usParser.FUNCTION_DECL_SUFFIX, 0); }
		public TerminalNode FUNCTION_SUFFIX() { return getToken(usParser.FUNCTION_SUFFIX, 0); }
		public TerminalNode RPAREN() { return getToken(usParser.RPAREN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode FUNCTION_ARGS() { return getToken(usParser.FUNCTION_ARGS, 0); }
		public TerminalNode LPAREN() { return getToken(usParser.LPAREN, 0); }
		public List<TerminalNode> FUNCTION_ARGS_SEP() { return getTokens(usParser.FUNCTION_ARGS_SEP); }
		public TerminalNode FUNCTION_ARGS_SEP(int i) {
			return getToken(usParser.FUNCTION_ARGS_SEP, i);
		}
		public Function_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_decl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterFunction_decl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitFunction_decl(this);
		}
	}

	public final Function_declContext function_decl() throws RecognitionException {
		Function_declContext _localctx = new Function_declContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_function_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(FUNCTION);
			setState(250);
			match(LABEL);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FUNCTION_ARGS) {
				{
				{
				setState(251);
				match(FUNCTION_ARGS);
				setState(252);
				match(LPAREN);
				setState(253);
				match(LABEL);
				}
				setState(259);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FUNCTION_ARGS_SEP) {
					{
					{
					setState(255);
					match(FUNCTION_ARGS_SEP);
					setState(256);
					match(LABEL);
					}
					}
					setState(261);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(262);
				match(RPAREN);
				}
			}

			setState(265);
			match(FUNCTION_DECL_SUFFIX);
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(266);
				statement();
				}
				}
				setState(271);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(272);
			match(FUNCTION_SUFFIX);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_callContext extends ParserRuleContext {
		public TerminalNode FUNCTION_CALL() { return getToken(usParser.FUNCTION_CALL, 0); }
		public TerminalNode LABEL() { return getToken(usParser.LABEL, 0); }
		public TerminalNode RPAREN() { return getToken(usParser.RPAREN, 0); }
		public TerminalNode FUNCTION_ARGS() { return getToken(usParser.FUNCTION_ARGS, 0); }
		public TerminalNode LPAREN() { return getToken(usParser.LPAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> FUNCTION_ARGS_SEP() { return getTokens(usParser.FUNCTION_ARGS_SEP); }
		public TerminalNode FUNCTION_ARGS_SEP(int i) {
			return getToken(usParser.FUNCTION_ARGS_SEP, i);
		}
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).enterFunction_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof usListener ) ((usListener)listener).exitFunction_call(this);
		}
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(FUNCTION_CALL);
			setState(275);
			match(LABEL);
			setState(289);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FUNCTION_ARGS) {
				{
				{
				setState(276);
				match(FUNCTION_ARGS);
				setState(277);
				match(LPAREN);
				setState(278);
				expression();
				}
				setState(284);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FUNCTION_ARGS_SEP) {
					{
					{
					setState(280);
					match(FUNCTION_ARGS_SEP);
					setState(281);
					expression();
					}
					}
					setState(286);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(287);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\66\u0126\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\5\2\61\n\2"+
		"\3\2\3\2\3\3\7\3\66\n\3\f\3\16\39\13\3\3\3\6\3<\n\3\r\3\16\3=\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\5\4H\n\4\3\5\3\5\3\6\3\6\3\6\3\6\5\6P\n\6\3\7"+
		"\3\7\3\7\3\7\3\b\3\b\3\b\7\bY\n\b\f\b\16\b\\\13\b\3\t\3\t\3\t\3\t\3\t"+
		"\3\n\3\n\3\13\3\13\3\13\7\13h\n\13\f\13\16\13k\13\13\3\f\3\f\3\f\7\fp"+
		"\n\f\f\f\16\fs\13\f\3\r\3\r\3\r\3\r\3\r\5\rz\n\r\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u0088\n\16\3\17\3\17\3\17"+
		"\3\17\7\17\u008e\n\17\f\17\16\17\u0091\13\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\7\17\u0099\n\17\f\17\16\17\u009c\13\17\3\17\3\17\3\17\5\17\u00a1"+
		"\n\17\3\17\3\17\7\17\u00a5\n\17\f\17\16\17\u00a8\13\17\3\17\3\17\5\17"+
		"\u00ac\n\17\3\20\3\20\3\20\5\20\u00b1\n\20\3\20\3\20\5\20\u00b5\n\20\3"+
		"\20\3\20\3\20\3\20\3\20\3\20\7\20\u00bd\n\20\f\20\16\20\u00c0\13\20\3"+
		"\20\3\20\3\21\3\21\3\21\3\21\7\21\u00c8\n\21\f\21\16\21\u00cb\13\21\3"+
		"\21\3\21\3\22\3\22\3\22\7\22\u00d2\n\22\f\22\16\22\u00d5\13\22\3\23\5"+
		"\23\u00d8\n\23\3\23\3\23\3\23\5\23\u00dd\n\23\3\23\7\23\u00e0\n\23\f\23"+
		"\16\23\u00e3\13\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\5\24\u00f5\n\24\3\25\3\25\3\25\5\25\u00fa"+
		"\n\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\7\26\u0104\n\26\f\26\16"+
		"\26\u0107\13\26\3\26\5\26\u010a\n\26\3\26\3\26\7\26\u010e\n\26\f\26\16"+
		"\26\u0111\13\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\7\27"+
		"\u011d\n\27\f\27\16\27\u0120\13\27\3\27\3\27\5\27\u0124\n\27\3\27\2\2"+
		"\30\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,\2\6\3\2\64\65\3\2+"+
		",\3\2\t\13\3\2-.\2\u013d\2.\3\2\2\2\4\67\3\2\2\2\6G\3\2\2\2\bI\3\2\2\2"+
		"\nO\3\2\2\2\fQ\3\2\2\2\16U\3\2\2\2\20]\3\2\2\2\22b\3\2\2\2\24d\3\2\2\2"+
		"\26l\3\2\2\2\30y\3\2\2\2\32\u0087\3\2\2\2\34\u00ab\3\2\2\2\36\u00ad\3"+
		"\2\2\2 \u00c3\3\2\2\2\"\u00ce\3\2\2\2$\u00d7\3\2\2\2&\u00f4\3\2\2\2(\u00f9"+
		"\3\2\2\2*\u00fb\3\2\2\2,\u0114\3\2\2\2.\60\7\3\2\2/\61\5\4\3\2\60/\3\2"+
		"\2\2\60\61\3\2\2\2\61\62\3\2\2\2\62\63\7\4\2\2\63\3\3\2\2\2\64\66\5*\26"+
		"\2\65\64\3\2\2\2\669\3\2\2\2\67\65\3\2\2\2\678\3\2\2\28;\3\2\2\29\67\3"+
		"\2\2\2:<\5\6\4\2;:\3\2\2\2<=\3\2\2\2=;\3\2\2\2=>\3\2\2\2>\5\3\2\2\2?H"+
		"\5\b\5\2@H\5\16\b\2AH\5\n\6\2BH\5\f\7\2CH\5\34\17\2DH\5\36\20\2EH\5 \21"+
		"\2FH\5(\25\2G?\3\2\2\2G@\3\2\2\2GA\3\2\2\2GB\3\2\2\2GC\3\2\2\2GD\3\2\2"+
		"\2GE\3\2\2\2GF\3\2\2\2H\7\3\2\2\2IJ\t\2\2\2J\t\3\2\2\2KL\7\f\2\2LP\7\63"+
		"\2\2MN\7\r\2\2NP\5\f\7\2OK\3\2\2\2OM\3\2\2\2P\13\3\2\2\2QR\7\63\2\2RS"+
		"\7\b\2\2ST\5\16\b\2T\r\3\2\2\2UZ\5\24\13\2VW\t\3\2\2WY\5\24\13\2XV\3\2"+
		"\2\2Y\\\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2[\17\3\2\2\2\\Z\3\2\2\2]^\7\16\2\2"+
		"^_\7\63\2\2_`\7\17\2\2`a\5\22\n\2a\21\3\2\2\2bc\t\4\2\2c\23\3\2\2\2di"+
		"\5\26\f\2ef\t\5\2\2fh\5\26\f\2ge\3\2\2\2hk\3\2\2\2ig\3\2\2\2ij\3\2\2\2"+
		"j\25\3\2\2\2ki\3\2\2\2lq\5\30\r\2mn\7\60\2\2np\5\30\r\2om\3\2\2\2ps\3"+
		"\2\2\2qo\3\2\2\2qr\3\2\2\2r\27\3\2\2\2sq\3\2\2\2tu\7+\2\2uz\5\30\r\2v"+
		"w\7,\2\2wz\5\30\r\2xz\5\32\16\2yt\3\2\2\2yv\3\2\2\2yx\3\2\2\2z\31\3\2"+
		"\2\2{\u0088\7\63\2\2|\u0088\7\61\2\2}\u0088\7\62\2\2~\u0088\7\7\2\2\177"+
		"\u0088\7\5\2\2\u0080\u0088\7\6\2\2\u0081\u0082\7)\2\2\u0082\u0083\5\16"+
		"\b\2\u0083\u0084\7*\2\2\u0084\u0088\3\2\2\2\u0085\u0088\5\20\t\2\u0086"+
		"\u0088\5,\27\2\u0087{\3\2\2\2\u0087|\3\2\2\2\u0087}\3\2\2\2\u0087~\3\2"+
		"\2\2\u0087\177\3\2\2\2\u0087\u0080\3\2\2\2\u0087\u0081\3\2\2\2\u0087\u0085"+
		"\3\2\2\2\u0087\u0086\3\2\2\2\u0088\33\3\2\2\2\u0089\u008a\7\27\2\2\u008a"+
		"\u008b\5\"\22\2\u008b\u008f\7\30\2\2\u008c\u008e\5\6\4\2\u008d\u008c\3"+
		"\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090"+
		"\u0092\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0093\7\31\2\2\u0093\u00ac\3"+
		"\2\2\2\u0094\u0095\7\27\2\2\u0095\u0096\5\"\22\2\u0096\u009a\7\30\2\2"+
		"\u0097\u0099\5\6\4\2\u0098\u0097\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098"+
		"\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009d\3\2\2\2\u009c\u009a\3\2\2\2\u009d"+
		"\u00a0\7\31\2\2\u009e\u009f\7\32\2\2\u009f\u00a1\5\34\17\2\u00a0\u009e"+
		"\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00a6\7\32\2\2"+
		"\u00a3\u00a5\5\6\4\2\u00a4\u00a3\3\2\2\2\u00a5\u00a8\3\2\2\2\u00a6\u00a4"+
		"\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a9\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a9"+
		"\u00aa\7\33\2\2\u00aa\u00ac\3\2\2\2\u00ab\u0089\3\2\2\2\u00ab\u0094\3"+
		"\2\2\2\u00ac\35\3\2\2\2\u00ad\u00ae\7\34\2\2\u00ae\u00b0\7)\2\2\u00af"+
		"\u00b1\5\16\b\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3"+
		"\2\2\2\u00b2\u00b4\7(\2\2\u00b3\u00b5\5\16\b\2\u00b4\u00b3\3\2\2\2\u00b4"+
		"\u00b5\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\7*\2\2\u00b7\u00b8\7\35"+
		"\2\2\u00b8\u00b9\7)\2\2\u00b9\u00ba\5\16\b\2\u00ba\u00be\7*\2\2\u00bb"+
		"\u00bd\5\6\4\2\u00bc\u00bb\3\2\2\2\u00bd\u00c0\3\2\2\2\u00be\u00bc\3\2"+
		"\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c1\3\2\2\2\u00c0\u00be\3\2\2\2\u00c1"+
		"\u00c2\7\36\2\2\u00c2\37\3\2\2\2\u00c3\u00c4\7\37\2\2\u00c4\u00c5\5\""+
		"\22\2\u00c5\u00c9\7\30\2\2\u00c6\u00c8\5\6\4\2\u00c7\u00c6\3\2\2\2\u00c8"+
		"\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cc\3\2"+
		"\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00cd\7 \2\2\u00cd!\3\2\2\2\u00ce\u00d3"+
		"\5$\23\2\u00cf\u00d0\7\24\2\2\u00d0\u00d2\5$\23\2\u00d1\u00cf\3\2\2\2"+
		"\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4#\3"+
		"\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d8\7\26\2\2\u00d7\u00d6\3\2\2\2\u00d7"+
		"\u00d8\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00e1\5&\24\2\u00da\u00dc\7\25"+
		"\2\2\u00db\u00dd\7\26\2\2\u00dc\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd"+
		"\u00de\3\2\2\2\u00de\u00e0\5&\24\2\u00df\u00da\3\2\2\2\u00e0\u00e3\3\2"+
		"\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2%\3\2\2\2\u00e3\u00e1"+
		"\3\2\2\2\u00e4\u00e5\5\16\b\2\u00e5\u00e6\7\20\2\2\u00e6\u00e7\5\16\b"+
		"\2\u00e7\u00f5\3\2\2\2\u00e8\u00e9\5\16\b\2\u00e9\u00ea\7\21\2\2\u00ea"+
		"\u00eb\5\16\b\2\u00eb\u00f5\3\2\2\2\u00ec\u00ed\5\16\b\2\u00ed\u00ee\7"+
		"\22\2\2\u00ee\u00ef\5\16\b\2\u00ef\u00f5\3\2\2\2\u00f0\u00f1\5\16\b\2"+
		"\u00f1\u00f2\7\23\2\2\u00f2\u00f3\5\16\b\2\u00f3\u00f5\3\2\2\2\u00f4\u00e4"+
		"\3\2\2\2\u00f4\u00e8\3\2\2\2\u00f4\u00ec\3\2\2\2\u00f4\u00f0\3\2\2\2\u00f5"+
		"\'\3\2\2\2\u00f6\u00fa\7!\2\2\u00f7\u00f8\7!\2\2\u00f8\u00fa\5\16\b\2"+
		"\u00f9\u00f6\3\2\2\2\u00f9\u00f7\3\2\2\2\u00fa)\3\2\2\2\u00fb\u00fc\7"+
		"\"\2\2\u00fc\u0109\7\63\2\2\u00fd\u00fe\7#\2\2\u00fe\u00ff\7)\2\2\u00ff"+
		"\u0100\7\63\2\2\u0100\u0105\3\2\2\2\u0101\u0102\7$\2\2\u0102\u0104\7\63"+
		"\2\2\u0103\u0101\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2\2\2\u0105"+
		"\u0106\3\2\2\2\u0106\u0108\3\2\2\2\u0107\u0105\3\2\2\2\u0108\u010a\7*"+
		"\2\2\u0109\u00fd\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u010b\3\2\2\2\u010b"+
		"\u010f\7%\2\2\u010c\u010e\5\6\4\2\u010d\u010c\3\2\2\2\u010e\u0111\3\2"+
		"\2\2\u010f\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u0112\3\2\2\2\u0111"+
		"\u010f\3\2\2\2\u0112\u0113\7&\2\2\u0113+\3\2\2\2\u0114\u0115\7\'\2\2\u0115"+
		"\u0123\7\63\2\2\u0116\u0117\7#\2\2\u0117\u0118\7)\2\2\u0118\u0119\5\16"+
		"\b\2\u0119\u011e\3\2\2\2\u011a\u011b\7$\2\2\u011b\u011d\5\16\b\2\u011c"+
		"\u011a\3\2\2\2\u011d\u0120\3\2\2\2\u011e\u011c\3\2\2\2\u011e\u011f\3\2"+
		"\2\2\u011f\u0121\3\2\2\2\u0120\u011e\3\2\2\2\u0121\u0122\7*\2\2\u0122"+
		"\u0124\3\2\2\2\u0123\u0116\3\2\2\2\u0123\u0124\3\2\2\2\u0124-\3\2\2\2"+
		" \60\67=GOZiqy\u0087\u008f\u009a\u00a0\u00a6\u00ab\u00b0\u00b4\u00be\u00c9"+
		"\u00d3\u00d7\u00dc\u00e1\u00f4\u00f9\u0105\u0109\u010f\u011e\u0123";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}