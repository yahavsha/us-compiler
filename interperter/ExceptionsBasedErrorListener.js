const antlr4 = require('antlr4');

let { SyntaxError } = require('./CompilationErrors');

 /*****************************************************************************
 * Define exceptions-based error listener for ANTLR
 *****************************************************************************/

/**
 * Define an ANTLR listener that forward the calls into standard exceptions.
 */
module.exports = class ExceptionsBasedErrorListener extends antlr4.error.ErrorListener {
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
