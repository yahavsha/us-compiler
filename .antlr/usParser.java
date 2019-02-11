// Generated from /Users/yahavbar/node-projects/us-compiler/us.g4 by ANTLR 4.7.1
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
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

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
		MEANIE_PROGRAM=38, SEMICOLON=39, LPAREN=40, RPAREN=41, PLUS=42, MINUS=43, 
		MULTIPLY=44, DIVIDE=45, MOD=46, POWER=47, NUMBER=48, STRING=49, LABEL=50, 
		COMMENT=51, MULTI_LINE_COMMENT=52, UNKNOWN=53;
	public static final int
		RULE_program = 0, RULE_meanie_instruction = 1, RULE_code_block = 2, RULE_statement = 3, 
		RULE_comment = 4, RULE_declaration = 5, RULE_assignment = 6, RULE_expression = 7, 
		RULE_casting = 8, RULE_type_specifiers = 9, RULE_multiplying_expression = 10, 
		RULE_pow_expression = 11, RULE_signed_atom = 12, RULE_atom = 13, RULE_condition_block = 14, 
		RULE_for_block = 15, RULE_while_block = 16, RULE_conditional_expression = 17, 
		RULE_and_chained_conditional_expression = 18, RULE_single_conditional_expression = 19, 
		RULE_return_statement = 20, RULE_function_decl = 21, RULE_function_call = 22;
	public static final String[] ruleNames = {
		"program", "meanie_instruction", "code_block", "statement", "comment", 
		"declaration", "assignment", "expression", "casting", "type_specifiers", 
		"multiplying_expression", "pow_expression", "signed_atom", "atom", "condition_block", 
		"for_block", "while_block", "conditional_expression", "and_chained_conditional_expression", 
		"single_conditional_expression", "return_statement", "function_decl", 
		"function_call"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'hey'", "'byes'", "'yupyup'", "'nop'", "'...'", "'is'", "'Words'", 
		"'Number'", "'Answer'", "'sup'", "'woah'", "'cosplay'", "'as'", "'same'", 
		"'diff'", "'big'", "'small'", "'also'", "'or'", "'nah'", "'anw'", "'?'", 
		"'yay!'", "'gosh'", "'ugh!'", "'hides'", "'til'", "'gotcha!'", "'huh'", 
		"'stop!'", "'gimme'", "'friend'", "'with'", "','", "':'", "'hihi!'", "'summons'", 
		"'meanie'", "';'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "START_PROGRAM", "END_PROGRAM", "TRUE", "FALSE", "NULL", "ASSIGNMENT", 
		"TSTRING", "TNUMBER", "TBOOLEAN", "VAR_DECL", "VAR_DECL_ASSGN", "VAR_CAST", 
		"VAR_CAST_TO", "COMPARE_EQUAL", "COMPARE_NOT_EQUAL", "COMPARE_GREATER", 
		"COMPARE_SMALLER", "LOGICAL_AND", "LOGICAL_OR", "LOGICAL_NOT", "IF", "CONDITION_SUFFIX", 
		"IF_SUFFIX", "ELSE", "ELSE_SUFFIX", "FOR", "FOR_TERMINATOR", "FOR_SUFFIX", 
		"WHILE", "WHILE_SUFFIX", "RETURN", "FUNCTION", "FUNCTION_ARGS", "FUNCTION_ARGS_SEP", 
		"FUNCTION_DECL_SUFFIX", "FUNCTION_SUFFIX", "FUNCTION_CALL", "MEANIE_PROGRAM", 
		"SEMICOLON", "LPAREN", "RPAREN", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", 
		"MOD", "POWER", "NUMBER", "STRING", "LABEL", "COMMENT", "MULTI_LINE_COMMENT", 
		"UNKNOWN"
	};
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
		public Meanie_instructionContext meanie_instruction() {
			return getRuleContext(Meanie_instructionContext.class,0);
		}
		public Code_blockContext code_block() {
			return getRuleContext(Code_blockContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(START_PROGRAM);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGNMENT) {
				{
				setState(47);
				meanie_instruction();
				}
			}

			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				setState(50);
				code_block();
				}
			}

			setState(53);
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

	public static class Meanie_instructionContext extends ParserRuleContext {
		public TerminalNode ASSIGNMENT() { return getToken(usParser.ASSIGNMENT, 0); }
		public TerminalNode MEANIE_PROGRAM() { return getToken(usParser.MEANIE_PROGRAM, 0); }
		public Meanie_instructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_meanie_instruction; }
	}

	public final Meanie_instructionContext meanie_instruction() throws RecognitionException {
		Meanie_instructionContext _localctx = new Meanie_instructionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_meanie_instruction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(ASSIGNMENT);
			setState(56);
			match(MEANIE_PROGRAM);
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
	}

	public final Code_blockContext code_block() throws RecognitionException {
		Code_blockContext _localctx = new Code_blockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_code_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FUNCTION) {
				{
				{
				setState(58);
				function_decl();
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(64);
				statement();
				}
				}
				setState(67); 
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
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_statement);
		try {
			setState(77);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(69);
				comment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(70);
				expression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(71);
				declaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(72);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(73);
				condition_block();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(74);
				for_block();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(75);
				while_block();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(76);
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
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
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
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_declaration);
		try {
			setState(85);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR_DECL:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				match(VAR_DECL);
				setState(82);
				match(LABEL);
				}
				break;
			case VAR_DECL_ASSGN:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
				match(VAR_DECL_ASSGN);
				setState(84);
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
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(LABEL);
			setState(88);
			match(ASSIGNMENT);
			setState(89);
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
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			multiplying_expression();
			setState(96);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(92);
					_la = _input.LA(1);
					if ( !(_la==PLUS || _la==MINUS) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(93);
					multiplying_expression();
					}
					} 
				}
				setState(98);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
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
	}

	public final CastingContext casting() throws RecognitionException {
		CastingContext _localctx = new CastingContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_casting);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(VAR_CAST);
			setState(100);
			match(LABEL);
			setState(101);
			match(VAR_CAST_TO);
			setState(102);
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
	}

	public final Type_specifiersContext type_specifiers() throws RecognitionException {
		Type_specifiersContext _localctx = new Type_specifiersContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_type_specifiers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
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
	}

	public final Multiplying_expressionContext multiplying_expression() throws RecognitionException {
		Multiplying_expressionContext _localctx = new Multiplying_expressionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_multiplying_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			pow_expression();
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MULTIPLY || _la==DIVIDE) {
				{
				{
				setState(107);
				_la = _input.LA(1);
				if ( !(_la==MULTIPLY || _la==DIVIDE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(108);
				pow_expression();
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
	}

	public final Pow_expressionContext pow_expression() throws RecognitionException {
		Pow_expressionContext _localctx = new Pow_expressionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_pow_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			signed_atom();
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==POWER) {
				{
				{
				setState(115);
				match(POWER);
				setState(116);
				signed_atom();
				}
				}
				setState(121);
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
	}

	public final Signed_atomContext signed_atom() throws RecognitionException {
		Signed_atomContext _localctx = new Signed_atomContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_signed_atom);
		try {
			setState(127);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PLUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(122);
				match(PLUS);
				setState(123);
				signed_atom();
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(124);
				match(MINUS);
				setState(125);
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
				setState(126);
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
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_atom);
		try {
			setState(141);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LABEL:
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				match(LABEL);
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				match(NUMBER);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 3);
				{
				setState(131);
				match(STRING);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(132);
				match(NULL);
				}
				break;
			case TRUE:
				enterOuterAlt(_localctx, 5);
				{
				setState(133);
				match(TRUE);
				}
				break;
			case FALSE:
				enterOuterAlt(_localctx, 6);
				{
				setState(134);
				match(FALSE);
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 7);
				{
				setState(135);
				match(LPAREN);
				setState(136);
				expression();
				setState(137);
				match(RPAREN);
				}
				break;
			case VAR_CAST:
				enterOuterAlt(_localctx, 8);
				{
				setState(139);
				casting();
				}
				break;
			case FUNCTION_CALL:
				enterOuterAlt(_localctx, 9);
				{
				setState(140);
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
	}

	public final Condition_blockContext condition_block() throws RecognitionException {
		Condition_blockContext _localctx = new Condition_blockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_condition_block);
		int _la;
		try {
			setState(177);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				match(IF);
				setState(144);
				conditional_expression();
				setState(145);
				match(CONDITION_SUFFIX);
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(146);
					statement();
					}
					}
					setState(151);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(152);
				match(IF_SUFFIX);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				match(IF);
				setState(155);
				conditional_expression();
				setState(156);
				match(CONDITION_SUFFIX);
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(157);
					statement();
					}
					}
					setState(162);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(163);
				match(IF_SUFFIX);
				setState(166);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(164);
					match(ELSE);
					setState(165);
					condition_block();
					}
					break;
				}
				setState(168);
				match(ELSE);
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
					{
					{
					setState(169);
					statement();
					}
					}
					setState(174);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(175);
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
	}

	public final For_blockContext for_block() throws RecognitionException {
		For_blockContext _localctx = new For_blockContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_for_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(FOR);
			setState(180);
			match(LPAREN);
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_CAST) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL))) != 0)) {
				{
				setState(181);
				expression();
				}
			}

			setState(184);
			match(SEMICOLON);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_CAST) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL))) != 0)) {
				{
				setState(185);
				expression();
				}
			}

			setState(188);
			match(RPAREN);
			setState(189);
			match(FOR_TERMINATOR);
			setState(190);
			match(LPAREN);
			setState(191);
			expression();
			setState(192);
			match(RPAREN);
			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(193);
				statement();
				}
				}
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(199);
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
	}

	public final While_blockContext while_block() throws RecognitionException {
		While_blockContext _localctx = new While_blockContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_while_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(WHILE);
			setState(202);
			conditional_expression();
			setState(203);
			match(CONDITION_SUFFIX);
			setState(207);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(204);
				statement();
				}
				}
				setState(209);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(210);
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
	}

	public final Conditional_expressionContext conditional_expression() throws RecognitionException {
		Conditional_expressionContext _localctx = new Conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_conditional_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			and_chained_conditional_expression();
			setState(217);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_AND) {
				{
				{
				setState(213);
				match(LOGICAL_AND);
				setState(214);
				and_chained_conditional_expression();
				}
				}
				setState(219);
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
	}

	public final And_chained_conditional_expressionContext and_chained_conditional_expression() throws RecognitionException {
		And_chained_conditional_expressionContext _localctx = new And_chained_conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_and_chained_conditional_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOGICAL_NOT) {
				{
				setState(220);
				match(LOGICAL_NOT);
				}
			}

			setState(223);
			single_conditional_expression();
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LOGICAL_OR) {
				{
				{
				setState(224);
				match(LOGICAL_OR);
				setState(226);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LOGICAL_NOT) {
					{
					setState(225);
					match(LOGICAL_NOT);
					}
				}

				setState(228);
				single_conditional_expression();
				}
				}
				setState(233);
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
	}

	public final Single_conditional_expressionContext single_conditional_expression() throws RecognitionException {
		Single_conditional_expressionContext _localctx = new Single_conditional_expressionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_single_conditional_expression);
		try {
			setState(250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(234);
				expression();
				setState(235);
				match(COMPARE_EQUAL);
				setState(236);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(238);
				expression();
				setState(239);
				match(COMPARE_NOT_EQUAL);
				setState(240);
				expression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(242);
				expression();
				setState(243);
				match(COMPARE_GREATER);
				setState(244);
				expression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(246);
				expression();
				setState(247);
				match(COMPARE_SMALLER);
				setState(248);
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
	}

	public final Return_statementContext return_statement() throws RecognitionException {
		Return_statementContext _localctx = new Return_statementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_return_statement);
		try {
			setState(255);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(252);
				match(RETURN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(253);
				match(RETURN);
				setState(254);
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
	}

	public final Function_declContext function_decl() throws RecognitionException {
		Function_declContext _localctx = new Function_declContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_function_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			match(FUNCTION);
			setState(258);
			match(LABEL);
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FUNCTION_ARGS) {
				{
				{
				setState(259);
				match(FUNCTION_ARGS);
				setState(260);
				match(LPAREN);
				setState(261);
				match(LABEL);
				}
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FUNCTION_ARGS_SEP) {
					{
					{
					setState(263);
					match(FUNCTION_ARGS_SEP);
					setState(264);
					match(LABEL);
					}
					}
					setState(269);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(270);
				match(RPAREN);
				}
			}

			setState(273);
			match(FUNCTION_DECL_SUFFIX);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << VAR_DECL) | (1L << VAR_DECL_ASSGN) | (1L << VAR_CAST) | (1L << IF) | (1L << FOR) | (1L << WHILE) | (1L << RETURN) | (1L << FUNCTION_CALL) | (1L << LPAREN) | (1L << PLUS) | (1L << MINUS) | (1L << NUMBER) | (1L << STRING) | (1L << LABEL) | (1L << COMMENT) | (1L << MULTI_LINE_COMMENT))) != 0)) {
				{
				{
				setState(274);
				statement();
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(280);
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
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_function_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(FUNCTION_CALL);
			setState(283);
			match(LABEL);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FUNCTION_ARGS) {
				{
				{
				setState(284);
				match(FUNCTION_ARGS);
				setState(285);
				match(LPAREN);
				setState(286);
				expression();
				}
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FUNCTION_ARGS_SEP) {
					{
					{
					setState(288);
					match(FUNCTION_ARGS_SEP);
					setState(289);
					expression();
					}
					}
					setState(294);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(295);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\67\u012e\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\3\2\5"+
		"\2\63\n\2\3\2\5\2\66\n\2\3\2\3\2\3\3\3\3\3\3\3\4\7\4>\n\4\f\4\16\4A\13"+
		"\4\3\4\6\4D\n\4\r\4\16\4E\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5P\n\5\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\5\7X\n\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\7\ta\n\t\f\t"+
		"\16\td\13\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\f\3\f\3\f\7\fp\n\f\f\f\16"+
		"\fs\13\f\3\r\3\r\3\r\7\rx\n\r\f\r\16\r{\13\r\3\16\3\16\3\16\3\16\3\16"+
		"\5\16\u0082\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\5\17\u0090\n\17\3\20\3\20\3\20\3\20\7\20\u0096\n\20\f\20\16\20\u0099"+
		"\13\20\3\20\3\20\3\20\3\20\3\20\3\20\7\20\u00a1\n\20\f\20\16\20\u00a4"+
		"\13\20\3\20\3\20\3\20\5\20\u00a9\n\20\3\20\3\20\7\20\u00ad\n\20\f\20\16"+
		"\20\u00b0\13\20\3\20\3\20\5\20\u00b4\n\20\3\21\3\21\3\21\5\21\u00b9\n"+
		"\21\3\21\3\21\5\21\u00bd\n\21\3\21\3\21\3\21\3\21\3\21\3\21\7\21\u00c5"+
		"\n\21\f\21\16\21\u00c8\13\21\3\21\3\21\3\22\3\22\3\22\3\22\7\22\u00d0"+
		"\n\22\f\22\16\22\u00d3\13\22\3\22\3\22\3\23\3\23\3\23\7\23\u00da\n\23"+
		"\f\23\16\23\u00dd\13\23\3\24\5\24\u00e0\n\24\3\24\3\24\3\24\5\24\u00e5"+
		"\n\24\3\24\7\24\u00e8\n\24\f\24\16\24\u00eb\13\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\5\25\u00fd"+
		"\n\25\3\26\3\26\3\26\5\26\u0102\n\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\7\27\u010c\n\27\f\27\16\27\u010f\13\27\3\27\5\27\u0112\n\27\3\27"+
		"\3\27\7\27\u0116\n\27\f\27\16\27\u0119\13\27\3\27\3\27\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\7\30\u0125\n\30\f\30\16\30\u0128\13\30\3\30"+
		"\3\30\5\30\u012c\n\30\3\30\2\2\31\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&(*,.\2\6\3\2\65\66\3\2,-\3\2\t\13\3\2./\2\u0145\2\60\3\2\2\2\4"+
		"9\3\2\2\2\6?\3\2\2\2\bO\3\2\2\2\nQ\3\2\2\2\fW\3\2\2\2\16Y\3\2\2\2\20]"+
		"\3\2\2\2\22e\3\2\2\2\24j\3\2\2\2\26l\3\2\2\2\30t\3\2\2\2\32\u0081\3\2"+
		"\2\2\34\u008f\3\2\2\2\36\u00b3\3\2\2\2 \u00b5\3\2\2\2\"\u00cb\3\2\2\2"+
		"$\u00d6\3\2\2\2&\u00df\3\2\2\2(\u00fc\3\2\2\2*\u0101\3\2\2\2,\u0103\3"+
		"\2\2\2.\u011c\3\2\2\2\60\62\7\3\2\2\61\63\5\4\3\2\62\61\3\2\2\2\62\63"+
		"\3\2\2\2\63\65\3\2\2\2\64\66\5\6\4\2\65\64\3\2\2\2\65\66\3\2\2\2\66\67"+
		"\3\2\2\2\678\7\4\2\28\3\3\2\2\29:\7\b\2\2:;\7(\2\2;\5\3\2\2\2<>\5,\27"+
		"\2=<\3\2\2\2>A\3\2\2\2?=\3\2\2\2?@\3\2\2\2@C\3\2\2\2A?\3\2\2\2BD\5\b\5"+
		"\2CB\3\2\2\2DE\3\2\2\2EC\3\2\2\2EF\3\2\2\2F\7\3\2\2\2GP\5\n\6\2HP\5\20"+
		"\t\2IP\5\f\7\2JP\5\16\b\2KP\5\36\20\2LP\5 \21\2MP\5\"\22\2NP\5*\26\2O"+
		"G\3\2\2\2OH\3\2\2\2OI\3\2\2\2OJ\3\2\2\2OK\3\2\2\2OL\3\2\2\2OM\3\2\2\2"+
		"ON\3\2\2\2P\t\3\2\2\2QR\t\2\2\2R\13\3\2\2\2ST\7\f\2\2TX\7\64\2\2UV\7\r"+
		"\2\2VX\5\16\b\2WS\3\2\2\2WU\3\2\2\2X\r\3\2\2\2YZ\7\64\2\2Z[\7\b\2\2[\\"+
		"\5\20\t\2\\\17\3\2\2\2]b\5\26\f\2^_\t\3\2\2_a\5\26\f\2`^\3\2\2\2ad\3\2"+
		"\2\2b`\3\2\2\2bc\3\2\2\2c\21\3\2\2\2db\3\2\2\2ef\7\16\2\2fg\7\64\2\2g"+
		"h\7\17\2\2hi\5\24\13\2i\23\3\2\2\2jk\t\4\2\2k\25\3\2\2\2lq\5\30\r\2mn"+
		"\t\5\2\2np\5\30\r\2om\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2r\27\3\2\2"+
		"\2sq\3\2\2\2ty\5\32\16\2uv\7\61\2\2vx\5\32\16\2wu\3\2\2\2x{\3\2\2\2yw"+
		"\3\2\2\2yz\3\2\2\2z\31\3\2\2\2{y\3\2\2\2|}\7,\2\2}\u0082\5\32\16\2~\177"+
		"\7-\2\2\177\u0082\5\32\16\2\u0080\u0082\5\34\17\2\u0081|\3\2\2\2\u0081"+
		"~\3\2\2\2\u0081\u0080\3\2\2\2\u0082\33\3\2\2\2\u0083\u0090\7\64\2\2\u0084"+
		"\u0090\7\62\2\2\u0085\u0090\7\63\2\2\u0086\u0090\7\7\2\2\u0087\u0090\7"+
		"\5\2\2\u0088\u0090\7\6\2\2\u0089\u008a\7*\2\2\u008a\u008b\5\20\t\2\u008b"+
		"\u008c\7+\2\2\u008c\u0090\3\2\2\2\u008d\u0090\5\22\n\2\u008e\u0090\5."+
		"\30\2\u008f\u0083\3\2\2\2\u008f\u0084\3\2\2\2\u008f\u0085\3\2\2\2\u008f"+
		"\u0086\3\2\2\2\u008f\u0087\3\2\2\2\u008f\u0088\3\2\2\2\u008f\u0089\3\2"+
		"\2\2\u008f\u008d\3\2\2\2\u008f\u008e\3\2\2\2\u0090\35\3\2\2\2\u0091\u0092"+
		"\7\27\2\2\u0092\u0093\5$\23\2\u0093\u0097\7\30\2\2\u0094\u0096\5\b\5\2"+
		"\u0095\u0094\3\2\2\2\u0096\u0099\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098"+
		"\3\2\2\2\u0098\u009a\3\2\2\2\u0099\u0097\3\2\2\2\u009a\u009b\7\31\2\2"+
		"\u009b\u00b4\3\2\2\2\u009c\u009d\7\27\2\2\u009d\u009e\5$\23\2\u009e\u00a2"+
		"\7\30\2\2\u009f\u00a1\5\b\5\2\u00a0\u009f\3\2\2\2\u00a1\u00a4\3\2\2\2"+
		"\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a5\3\2\2\2\u00a4\u00a2"+
		"\3\2\2\2\u00a5\u00a8\7\31\2\2\u00a6\u00a7\7\32\2\2\u00a7\u00a9\5\36\20"+
		"\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ae"+
		"\7\32\2\2\u00ab\u00ad\5\b\5\2\u00ac\u00ab\3\2\2\2\u00ad\u00b0\3\2\2\2"+
		"\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b1\3\2\2\2\u00b0\u00ae"+
		"\3\2\2\2\u00b1\u00b2\7\33\2\2\u00b2\u00b4\3\2\2\2\u00b3\u0091\3\2\2\2"+
		"\u00b3\u009c\3\2\2\2\u00b4\37\3\2\2\2\u00b5\u00b6\7\34\2\2\u00b6\u00b8"+
		"\7*\2\2\u00b7\u00b9\5\20\t\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\u00ba\3\2\2\2\u00ba\u00bc\7)\2\2\u00bb\u00bd\5\20\t\2\u00bc\u00bb\3\2"+
		"\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\7+\2\2\u00bf"+
		"\u00c0\7\35\2\2\u00c0\u00c1\7*\2\2\u00c1\u00c2\5\20\t\2\u00c2\u00c6\7"+
		"+\2\2\u00c3\u00c5\5\b\5\2\u00c4\u00c3\3\2\2\2\u00c5\u00c8\3\2\2\2\u00c6"+
		"\u00c4\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c9\3\2\2\2\u00c8\u00c6\3\2"+
		"\2\2\u00c9\u00ca\7\36\2\2\u00ca!\3\2\2\2\u00cb\u00cc\7\37\2\2\u00cc\u00cd"+
		"\5$\23\2\u00cd\u00d1\7\30\2\2\u00ce\u00d0\5\b\5\2\u00cf\u00ce\3\2\2\2"+
		"\u00d0\u00d3\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d4"+
		"\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d4\u00d5\7 \2\2\u00d5#\3\2\2\2\u00d6\u00db"+
		"\5&\24\2\u00d7\u00d8\7\24\2\2\u00d8\u00da\5&\24\2\u00d9\u00d7\3\2\2\2"+
		"\u00da\u00dd\3\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc%\3"+
		"\2\2\2\u00dd\u00db\3\2\2\2\u00de\u00e0\7\26\2\2\u00df\u00de\3\2\2\2\u00df"+
		"\u00e0\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e9\5(\25\2\u00e2\u00e4\7\25"+
		"\2\2\u00e3\u00e5\7\26\2\2\u00e4\u00e3\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5"+
		"\u00e6\3\2\2\2\u00e6\u00e8\5(\25\2\u00e7\u00e2\3\2\2\2\u00e8\u00eb\3\2"+
		"\2\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\'\3\2\2\2\u00eb\u00e9"+
		"\3\2\2\2\u00ec\u00ed\5\20\t\2\u00ed\u00ee\7\20\2\2\u00ee\u00ef\5\20\t"+
		"\2\u00ef\u00fd\3\2\2\2\u00f0\u00f1\5\20\t\2\u00f1\u00f2\7\21\2\2\u00f2"+
		"\u00f3\5\20\t\2\u00f3\u00fd\3\2\2\2\u00f4\u00f5\5\20\t\2\u00f5\u00f6\7"+
		"\22\2\2\u00f6\u00f7\5\20\t\2\u00f7\u00fd\3\2\2\2\u00f8\u00f9\5\20\t\2"+
		"\u00f9\u00fa\7\23\2\2\u00fa\u00fb\5\20\t\2\u00fb\u00fd\3\2\2\2\u00fc\u00ec"+
		"\3\2\2\2\u00fc\u00f0\3\2\2\2\u00fc\u00f4\3\2\2\2\u00fc\u00f8\3\2\2\2\u00fd"+
		")\3\2\2\2\u00fe\u0102\7!\2\2\u00ff\u0100\7!\2\2\u0100\u0102\5\20\t\2\u0101"+
		"\u00fe\3\2\2\2\u0101\u00ff\3\2\2\2\u0102+\3\2\2\2\u0103\u0104\7\"\2\2"+
		"\u0104\u0111\7\64\2\2\u0105\u0106\7#\2\2\u0106\u0107\7*\2\2\u0107\u0108"+
		"\7\64\2\2\u0108\u010d\3\2\2\2\u0109\u010a\7$\2\2\u010a\u010c\7\64\2\2"+
		"\u010b\u0109\3\2\2\2\u010c\u010f\3\2\2\2\u010d\u010b\3\2\2\2\u010d\u010e"+
		"\3\2\2\2\u010e\u0110\3\2\2\2\u010f\u010d\3\2\2\2\u0110\u0112\7+\2\2\u0111"+
		"\u0105\3\2\2\2\u0111\u0112\3\2\2\2\u0112\u0113\3\2\2\2\u0113\u0117\7%"+
		"\2\2\u0114\u0116\5\b\5\2\u0115\u0114\3\2\2\2\u0116\u0119\3\2\2\2\u0117"+
		"\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0117\3\2"+
		"\2\2\u011a\u011b\7&\2\2\u011b-\3\2\2\2\u011c\u011d\7\'\2\2\u011d\u012b"+
		"\7\64\2\2\u011e\u011f\7#\2\2\u011f\u0120\7*\2\2\u0120\u0121\5\20\t\2\u0121"+
		"\u0126\3\2\2\2\u0122\u0123\7$\2\2\u0123\u0125\5\20\t\2\u0124\u0122\3\2"+
		"\2\2\u0125\u0128\3\2\2\2\u0126\u0124\3\2\2\2\u0126\u0127\3\2\2\2\u0127"+
		"\u0129\3\2\2\2\u0128\u0126\3\2\2\2\u0129\u012a\7+\2\2\u012a\u012c\3\2"+
		"\2\2\u012b\u011e\3\2\2\2\u012b\u012c\3\2\2\2\u012c/\3\2\2\2!\62\65?EO"+
		"Wbqy\u0081\u008f\u0097\u00a2\u00a8\u00ae\u00b3\u00b8\u00bc\u00c6\u00d1"+
		"\u00db\u00df\u00e4\u00e9\u00fc\u0101\u010d\u0111\u0117\u0126\u012b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}