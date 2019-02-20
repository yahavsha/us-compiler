const antlr4 = require('antlr4');
const ASTContext = require('../ast/ASTContext');

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
    /**
     * Constructs a new compilation error.
     * @param {String} message The error message.
     * @param {String} code The error code.
     */
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

    /**
     * Gets the error stack trace.
     * @return {string}.
     */
    getStackTrace() {
        return '';
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
      * @param {string} message The message to display.
      * @param {ASTContext} ctx The AST parsing context.
      */
    constructor(message, ctx) {
        super(''); // We can't format yet the message, so we'll do it ourseleves later.

        /* Save the new data */
        this.msg = message;
        this.setContext(ctx);

        // Remove ourselves from the NodeJS stack
        Error.captureStackTrace(this, SemanticError);
    }

    setContext(ctx) {
        this.ctx = ctx;
        if (this.ctx) {
            this.lineNumber = this.ctx.line;
            this.column = this.ctx.column;
            this.start = this.ctx.start;
            this.stop = this.ctx.stop;
            this.message = formatMessage(this.msg, this.lineNumber, this.column);
        } else {
            this.message = this.msg;
        }
    }

    getErrorLine() {
        if (!this.ctx) {
            return -1;
        }

        return this.ctx.codeLines[this.lineNumber - 1]; // Lines are 1...n while arrays are 0...(n-1)
    }
    
    getUnderlineError(options = {
        extraLines: 1,
        includeLineNumbers: true
    }) {
        if (!this.ctx) {
            return '';
        }
        
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

        /* Finalize it */
        let output = {};
        
        if (options.includeLineNumbers) {
            // if we have line numbers, the ^^^^^ thingy should get pushed away
            // by the number of digits + ". ". For example if the line is 5, then by 3 ("5. " is 3 chars)
            // but if it's line 1000 then by 4 + 2 = 6 (". " = 2 chars + "1000" = 4 chars).
            underline = ' '.repeat(String(this.lineNumber).length + 2) + underline;
        }

        output[this.lineNumber] = errorLine + "\n" + underline;

        /* Should we include lines before and after it? */
        if (options.extraLines > 0) {
            const len = this.ctx.codeLines.length;
            for (let i = 1; i <= options.extraLines; i++) {
                if (this.lineNumber + i - 1 < len - 1) {
                    // We can take that line too (it's further in the code, the n+i)
                    output[this.lineNumber + i] = this.ctx.codeLines[this.lineNumber + i - 1];
                }

                if (this.lineNumber - i - 1 >= 0) {
                    // We can take that too, it's the n-i line.
                    output[this.lineNumber - i] = this.ctx.codeLines[this.lineNumber - i - 1];
                }
            }
        }

        /* Add line numbers? */
        if (options.includeLineNumbers) {
            let lines = [];
            Object.keys(output).forEach(l => lines.push(`${l}. ${output[l]}`));
            return lines.join('\n');
        }

        return Object.values(output).join("\n");
    }

    /**
     * Gets the error stack trace.
     * @return {string}.
     */
    getStackTrace() {
        if (!this.ctx || !this.ctx.stackTrace) {
            return '';
        }

        let builder = [];
        while (!this.ctx.stackTrace.isEmpty()) {
            let scope = this.ctx.stackTrace.pop();
            builder.push(`\tat ${scope}`);
        }

        return builder.join('\n');
    }

    /**
     * Determines if the given parsing context node is a symobl node (a.k.a., label, variable, parentesis, plus, minus etc.).
     * @param {ParsingContext} ctx The parsing context.
     * @return True if it's a symbol, false otherwise.
     */
    _isSymbol(ctx) {
        return typeof(ctx.getSymbol) !== 'undefined';
    }
 };

 class UnexpectedSymbolError extends SemanticError {
    constructor(symbol, ctx) {
        super(`Unexpected symbol "${symbol}" detected.`, ctx);
        Error.captureStackTrace(this, UnexpectedSymbolError);
    }
}

/* Variable not defined error */
class VariableNotDefinedError extends SemanticError {
    constructor(variableName, ctx) {
        super(`The variable ${variableName} has not been defined.`, ctx);
        Error.captureStackTrace(this, VariableNotDefinedError);
    }
}
 
/* Variable already been defined error */
class VariableAlreadyDefinedError extends SemanticError {
    constructor(variableName, ctx) {
        super(`The variable ${variableName} has already been defined.`, ctx);
        Error.captureStackTrace(this, VariableAlreadyDefinedError);
    }
}

/* Variable already been defined error */
class ArithmeticOperationError extends SemanticError {
    constructor(lparam, op, rparam, ctx) {
        const TypeRegistar = require('../types');
        super(`Operator ${TypeRegistar.getArithmeticOperationString(op)} can not be applied on ${lparam.type.name} (lparam) and ${rparam.type.name} (rparam).`, ctx);

        Error.captureStackTrace(this, ArithmeticOperationError);
    }
}

/* Variable already been defined error */
class DivisionByZeroError extends SemanticError {
    constructor(ctx) {
        super(`A divisin by zero can't be performed.`, ctx);
        Error.captureStackTrace(this, DivisionByZeroError);
    }
}

class InvalidCastError extends SemanticError {
    constructor(ctx, from, to) {
        const symbolToTypeName = require('../utils/TypesResolver').symbolToTypeName;
        super(`Can not perform a cast from ${symbolToTypeName(from)} to ${symbolToTypeName(to)}.`, ctx);
        Error.captureStackTrace(this, InvalidCastError);
    }
}

class FormatError extends SemanticError {
    constructor(ctx, message) {
        super(message, ctx);
        Error.captureStackTrace(this, FormatError);
    }
}

class StackOverflowError extends SemanticError {
    constructor(ctx) {
        super('Maximum call stack size exceeded', ctx);
        Error.captureStackTrace(this, StackOverflowError);
    }
}


/*****************************************************************************
 * Export 'hem all
 * https://www.youtube.com/watch?v=wrCUQuJsDYI ᕙ[ ˵ ͡’ ω ͡’ ˵ ]ᕗ
 *****************************************************************************/

//ambiguous
module.exports = {
    SyntaxError,
    SemanticError,
    UnexpectedSymbolError,
    VariableNotDefinedError,
    VariableAlreadyDefinedError,
    ArithmeticOperationError,
    DivisionByZeroError,
    InvalidCastError,
    FormatError,
    StackOverflowError
};