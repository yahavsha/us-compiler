/**
 * This is the interperter module.
 * This module uses ANTLR to perform lexical and semantical analysis
 * and then evaluates the generated AST.
 * @module interperter
 * @requires ast
 * @requires antlr4
 * @author Yahav S.
 */

/*****************************************************************************
 *  Load required libraries
 *****************************************************************************/

/* Load the required libraries */
const antlr4 = require('antlr4');
const Lexer = require("../ast/usLexer");
const Parser = require("../ast/usParser");
let {
    SyntaxError
 } = require('./CompilationErrors');

 /*****************************************************************************
 * Define exceptions-based error listener for ANTLR
 *****************************************************************************/

/**
 * Define an ANTLR listener that forward the calls into standard exceptions.
 */
class ExceptionsBasedErrorListener extends antlr4.error.ErrorListener {
    /**
     * Checks syntax error
     *
     * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
     * @param {object} symbol Offending symbol
     * @param {int} line Line of offending symbol
     * @param {int} column Position in line of offending symbol
     * @param {string} message Error message
     * @param {string} payload Stack trace
     */
    syntaxError(recognizer, symbol, line, column, message, payload) {
        throw new SyntaxError(recognizer, symbol, line, column, message, payload);
    }
}

/*****************************************************************************
 * Define the Interperter Facade class
 *****************************************************************************/

/**
 * Defines the US interperter bridging class.
 * This class allows to check US code syntax-wise, semantic-wise and interpert and execute it.
 * 
 * This class allows to customize the interperter behaviour in error handling, registering global variables & functions etc.
 */
module.exports = class Interperter {
    /**
     * Constructs a new interperter instance.
     */
    constructor() {
        this.removeDefaultErrorHandlers = true;
        this.errorListeners = [new ExceptionsBasedErrorListener()];
        this.errorsCount = 0;

        this.globalVariables = {
            '__VERSION__':      '0.1'
        };
    }

    addErrorListener(listener) {
        this.errorListeners.push(listener);
    }

    /**
     * Gets the string representation of the AST.
     * @param {string} input The code to evaluate.
     * @return {string}
     */
    getTreeString(input) {
        /* Init ANTLR generated Lexer & Parser */
        const lexer = new Lexer.usLexer(new antlr4.InputStream(input));
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = this.createParser(tokens);
        
        /* Creates an AST */
        const ast = parser.program();
        return ast.toStringTree(parser.ruleNames);
    }

    /**
     * Interpert the given code.
     * @param {string} input The interperted code.
     */
    interpert(input) {
        /* Init ANTLR generated Lexer & Parser */
        const lexer = new Lexer.usLexer(new antlr4.InputStream(input));
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = this.createParser(tokens);

        /* Creates an AST */
        const ast = parser.program();

        /* If there're syntax error(s), stop here */
        if (parser._syntaxErrors > 0) {
            return false;
        }

        /* Evaluate the code by using our evaluation visitors */
        const EvaluatorVisitor = require('./EvaluatorVisitor');
        const evaluator = new EvaluatorVisitor();
        evaluator.start(ast);
    }

    /**************** Private Methods *****************/
    
    /**
     * Creates an ANTLR parser from the given token stream.
     * @param {antlr4.CommonTokenStream} tokens The code tokens.
     * @return {Parser.usParser}
     */
    createParser(tokens) {
        /* Instantiate */
        const parser = new Parser.usParser(tokens);

        /* Configure */
        parser.buildParseTrees = true;

        /* Register error handlers */
        if (this.removeDefaultErrorHandlers) {
            parser.removeErrorListeners();
        }

        /* Use the proxy error listener to forward calls */
        const ProxyErrorListener = require('antlr4/error/ErrorListener').ProxyErrorListener;
        parser.addErrorListener(new ProxyErrorListener(this.errorListeners));

        return parser;
    }
};