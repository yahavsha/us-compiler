/* Load the required libraries */
const antlr4 = require('antlr4');
const Lexer = require("../ast/usLexer");
const Parser = require("../ast/usParser");

class ErrorListener extends antlr4.error.ErrorListener {
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
        let SyntaxError = require('./CompilationErrors').SyntaxError;
        throw new SyntaxError(recognizer, symbol, line, column, message, payload);
        console.error("line " + line + ":" + column + " " + message);
        console.log("At:");
        console.log(this.__getFormattedErrorString(recognizer, line, column, symbol));
    }

    __getFormattedErrorString(recognizer, line, column, symbol) {
        /* Defines an helper which allows to change a single char in a string.
        As strings are immutable in JavaScript, it's impossible w/o it */
        function setCharAt(str, index, chr) {
            if (index > str.length-1) return str;
            return str.substr(0,index) + chr + str.substr(index+1);
        }

        /* Gets the error line */
        let errorLine = this.__getErrorLine(recognizer, line);
        
        /* Replace with spaces so we can correctly format it */
        errorLine = errorLine.replace('\t', ' ');
        
        /* Create the underline string and iterate over the wrong positions */
        let underline = ' '.repeat(errorLine.length);
        
        const start = symbol.start;
        const end = symbol.stop;
        if (start >= 0 && end >= 0) {
            for (let i = 0; i <= (end - start); i++) {
                underline = setCharAt(underline, column + i, '^');
            }
        }

        /* Done */
        return errorLine + "\n" + underline;
    }

    __getStackTrace(recognizer) {
        if (!recognizer) {
            return undefined;
        }
        
        return recognizer.getRuleInvocationStack(recognizer.getInvokingContext());
    }

    __getErrorLine(recognizer, line) {
        /* Validate the call */
        if (!recognizer || !recognizer.getInputStream()) {
            return "";
        }

        /* Grab the actual code input (the entire code contents) */
        const tokens = new antlr4.CommonTokenStream(recognizer.getInputStream());
        const input = recognizer.getInputStream().tokenSource.inputStream.toString()
        
        /* Split into lines */
        const lines = input.split(/\r?\n/);

        return lines[line - 1]; // Lines are 1...n while arrays are 0...(n-1)
    }
}

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
        this.errorListeners = [new ErrorListener()];
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
        const Evaluator = require('./ProgramEvaluator');
        const evaluator = new Evaluator();
        evaluator.start(ast);
        // console.log(Object.getOwnPropertyNames(evaluator));
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
        const ProxyErrorListener = require('antlr4/error/ErrorListener').ProxyErrorListener
        parser.addErrorListener(new ProxyErrorListener(this.errorListeners));

        return parser;
    }
};