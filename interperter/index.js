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

 /* External Libraries */
const antlr4 = require('antlr4');
const Lexer = require("../lib/usLexer");
const Parser = require("../lib/usParser");

/* Helpers */
const InterperterOptions = require('./InterperterOptions');

/* Error Handler */
const ExceptionsBasedErrorListener = require('./ExceptionsBasedErrorListener');

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
        this.globalVariables = {};
        this.options = new InterperterOptions();

        this.setGlobalVariable('__VERSION__', '0.1');
    }
    
    /**
     * Sets the interperation options.
     * @param {InterperterOptions} options 
     */
    setOptions(options) {
        this.options = options;
    }

    setGlobalVariable(name, value) {
        /* Convert the variable into a value node */
        // this.globalVariables[name] = createUSValue(value);
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
        const cst = parser.program();

        /* If there're syntax error(s), stop here */
        if (parser._syntaxErrors > 0) {
            return false;
        }

        /* Evaluate the code by using our evaluation visitors */
        const ParseTreeToASTVisitor = require('../ast/ParseTreeToASTVisitor');
        const cstVisitor = new ParseTreeToASTVisitor(this.options, this.globalVariables);
        const ast = cstVisitor.start(cst);

        // console.log(ast);
        // process.exit(0);

        /* Evaluates the tree */
        const EvaluationASTVisitor = require('../evaluation/EvaluationASTVisitor');
        const evaluator = new EvaluationASTVisitor();
        evaluator.visitProgram(ast);
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