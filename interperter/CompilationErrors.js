const antlr4 = require('antlr4');

/**
 * Sets a single character at a given index of a string.
 * This helper allows to change a single char in a string.
 * As strings are immutable in JavaScript, it's impossible w/o it
 * @param {string} str The string.
 * @param {int} index The index.
 * @param {int} chr The character to put.
 */
function setCharAt(str, index, chr) {
    if (index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

/**
 * Format an error message.
 * @param {string} message 
 * @param {int} line 
 * @param {int} column 
 */
function formatMessage(message, line, column) {
    return `line ${line}:${column} ${message}`;
}

/*****************************************************************************
 * The basic error handler
 *****************************************************************************/

class CompilationError extends Error {
    constructor(message, code) {
        super(message);

        this.code = code;
        this.message = message;
        this.lineNumber = -1;
        this.column = -1;
        this.start = -1;
        this.stop = -1;
    }

    /**
     * Gets the problematic error line.
     * @return {string}
     */
    getErrorLine() {
        throw new Error('Not Implemented');
    }

    /**
     * Gets the problematic error line.
     * @return {string}
     */
    getUnderlineError() {
        throw new Error('Not Implemented');
    }
}

/*****************************************************************************
 * A Syntax error
 *****************************************************************************/

class SyntaxError extends CompilationError {
    /**
     * An error that's being thrown in case of syntax issue.
     * The entire arguments should be forwareded from {@see antlr4.error.ErrorListener} .
     *
     * @param {object} recognizer The parsing support code essentially. Most of it is error recovery stuff
     * @param {object} symbol Offending symbol.
     * @param {int} line Line of offending symbol.
     * @param {int} column Position in line of offending symbol.
     * @param {string} message Error message.
     * @param {string} payload Stack trace.
     */
    constructor(recognizer, symbol, line, column, message, payload) {
        super(formatMessage(message, line, column));

        this.recognizer = recognizer;
        this.lineNumber = line;
        this.column = column;
        this.innerMessage = message;
        this.symbol = symbol;

        Error.captureStackTrace(this, SyntaxError);
    }

    getUnderlinedError() {
        return this.__getFormattedErrorString(this.recognizer, this.lineNumber, this.column, this.symbol);
    }

    getUnderlineError() {
        return this.__getFormattedErrorString(this.recognizer, this.lineNumber, this.column, this.symbol);
    }

    getErrorLine() {
        /* Grab the actual code input (the entire code contents) */
        const input = this.recognizer.getInputStream().tokenSource.inputStream.toString()
        
        /* Split into lines */
        const lines = input.split(/\r?\n/);

        return lines[this.lineNumber - 1]; // Lines are 1...n while arrays are 0...(n-1)
    }

    __getFormattedErrorString(recognizer, line, column, symbol) {
        /* Gets the error line */
        let errorLine = this.getErrorLine();
        
        /* Replace with spaces so we can correctly format it */
        errorLine = errorLine.replace('\t', ' ');
        
        /* Create the underline string and iterate over the wrong positions */
        let underline = ' '.repeat(errorLine.length);
        
        const start = this.symbol.start;
        const end = this.symbol.stop;
        if (start >= 0 && end >= 0) {
            for (let i = 0; i <= (end - start); i++) {
                underline = setCharAt(underline, this.column + i, '^');
            }
        }

        /* Done */
        return errorLine + "\n" + underline;
    }
}

/*****************************************************************************
 * Semantic Errors
 *****************************************************************************/

 class SemanticError extends CompilationError {
     /**
      * Defines a semantic error. A semantic error might be caused as variable is been defined again, a function doesnt exists etc.
      * Note that the way this error handler is functioning is bit complex. There're 3 overloads for the ctor, and as javascript
      * doesn't support normal overloading ᕙ(⇀‸↼‶)ᕗ.
      * The available constructor calls (in NORMAL notation):
      * ```java
      *     SemanticError(String message, ParsingContext ctx);
      *     SemanticError(String message, ParsingContext ctx, TerminalNode node);
      *     SemanticError(String message, PrasingContext ctx, int column, int start, int stop);
      * ```    
      * 1. The first overload gets just the message and context. The issue in the line will be detected automatically from the ctx.
      *    It'll just choose the entire parsing rule. Thus, if you're in the meanie rule, "is meanie" will be marked entirely.
      * 2. The second overload gets the problematic portion of the line from the given node.
      * 3. The third overload uses plain column, start and stop indexes to manually mark the line.
      * 
      * @param {string} message The message to display.
      * @param {*} ctx The parsing context.
      * @param {*} column The node or an int, see above [optional].
      * @param {*} start The start position [optional].
      * @param {*} stop The end position [optional].
      */
    constructor(message, ctx, column, start, stop) {
        super(''); // We can't format yet the message, so we'll do it ourseleves later.

        /* Save the new data */
        this.ctx = ctx;
        this.lineNumber = ctx.start.line;

        /* If we haven't been told which part in the code to mark, we'll guess it's the ctx current symbol.
        For example, if the exception is been thrown from meanie_instruction rule, then
            is meanie
            ^^^^^^^^^
        will be produced */
        if (typeof(column) === 'undefined') {
            this.column = ctx.start.column;
            this.start = ctx.start.start;
            this.stop = ctx.stop.stop;
        } else if (typeof(column) === 'object') {
            const symbol = column.symbol;

            this.column = symbol.column;
            this.start = symbol.start;
            this.stop = symbol.stop;
        } else {
            this.column = column;
            this.start = start;
            this.stop = stop;
        }

        // NOW, we can forma it! :D
        this.message = formatMessage(message, this.lineNumber, this.column);
    }

    getErrorLine() {
        /* Grab the actual code input (the entire code contents) */
        const tokens = new antlr4.CommonTokenStream(this.ctx.parser.getInputStream());
        const input = tokens.tokenSource.tokenSource.inputStream.toString();
    
        /* Split into lines */
        const lines = input.split(/\r?\n/);

        return lines[this.lineNumber - 1]; // Lines are 1...n while arrays are 0...(n-1)
    }
    
    getUnderlineError() {
        /* Gets the error line */
        let errorLine = this.getErrorLine();
        
        /* Replace with spaces so we can correctly format it */
        errorLine = errorLine.replace('\t', ' ');
        
        /* Create the underline string and iterate over the wrong positions */
        let underline = ' '.repeat(errorLine.length);
        
        if (this.start >= 0 && this.stop >= 0) {
            for (let i = 0; i <= (this.stop - this.start); i++) {
                underline = setCharAt(underline, this.column + i, '^');
            }
        }

        /* Done */
        return errorLine + "\n" + underline;
    }
 };

/* Variable not defined error */
class VariableNotDefinedError extends SemanticError {
    constructor(ctx, variableNode) {
        super(`The variable ${variableNode.getText()} has not been defined.`, ctx, variableNode);
    }
}
 
/* Variable already been defined error */
class VariableAlreadyDefinedError extends SemanticError {
    constructor(ctx, variableNode) {
        super(`The variable ${variableNode.getText()} has already been defined.`, ctx, variableNode);
    }
}

/* Variable already been defined error */
class ArithmeticOperationError extends SemanticError {
    constructor(ctx, lparam, op, rparam) {
        const { arithmeticOperationToString, symbolToTypeName } = require('../utils/TypesResolver');
        super(`Operator ${arithmeticOperationToString(op)} can not be applied on ${symbolToTypeName(lparam.type)} (lparam) and ${symbolToTypeName(rparam.type)} (rparam).`, ctx);
    }
}

/* Variable already been defined error */
class DivisionByZeroError extends SemanticError {
    constructor(ctx) {
        super(`A divisin by zero can't be performed.`, ctx);
    }
}

/*****************************************************************************
 * Export 'hem all
 * https://www.youtube.com/watch?v=wrCUQuJsDYI ᕙ[ ˵ ͡’ ω ͡’ ˵ ]ᕗ
 *****************************************************************************/

 module.exports = {
     SyntaxError,
     SemanticError,
     VariableNotDefinedError,
     VariableAlreadyDefinedError,
     ArithmeticOperationError,
     DivisionByZeroError
 };