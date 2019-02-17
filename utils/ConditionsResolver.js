/**
 * This file contains helpers to work with conditions.
 */

const Parser = require('../ast/usParser').usParser;
const literalNames = new Parser().literalNames;
const { trimChars, createLiteralMap } = require('./ParsingHelpers');

 /*****************************************************************************
 * Initialization
 *****************************************************************************/

/* Defines a list of comparators map */
VALID_COMPARATOR_SYMBOLS = {};
for (let token of [Parser.COMPARE_EQUAL, Parser.COMPARE_NOT_EQUAL,
                   Parser.COMPARE_GREATER, Parser.COMPARE_SMALLER,
                   Parser.COMPARE_GREATER_EQUAL, Parser.COMPARE_SMALLER_EQUAL]) {
    VALID_COMPARATOR_SYMBOLS[token] = trimChars(literalNames[token], "'");
}

/* Defines a list of logical operators map */
VALID_LOGICAL_OP_SYMBOLS = {};
for (let token of [Parser.LOGICAL_AND, Parser.LOGICAL_OR, Parser.LOGICAL_NOT]) {
    VALID_LOGICAL_OP_SYMBOLS[token] = trimChars(literalNames[token], "'");
}

/*****************************************************************************
 * The API methods
 *****************************************************************************/

/**
 * Determine if the given symbol int is a valid comparator operator symbol (e.g. ==, != etc.).
 * @param {int} symbol 
 */
function isComparatorSymbol(symbol) {
    return Object.keys(VALID_COMPARATOR_SYMBOLS).indexOf(String(symbol)) > -1;
}

/**
 * Converts the symbol int into a type string.
 * @param {int} symbol The symbol int number. Should get from ANTLR parser or lexer.
 */
function symbolToComparatorOperator(symbol) {
    return VALID_COMPARATOR_SYMBOLS[symbol];
}

/**
 * Determine if the given symbol int is a valid logical operator symbol (e.g. &&, || etc.).
 * @param {int} symbol 
 */
function isLogicalOperatorSymbol(symbol) {
    return Object.keys(VALID_LOGICAL_OP_SYMBOLS).indexOf(String(symbol)) > -1;
}

/**
 * Converts the symbol int into a type string.
 * @param {int} symbol The symbol int number. Should get from ANTLR parser or lexer.
 */
function symbolToLogicalOperator(symbol) {
    return VALID_LOGICAL_OP_SYMBOLS[symbol];
}

 /*****************************************************************************
 * EXPORT
 *****************************************************************************/

module.exports = {
    isComparatorSymbol,
    isLogicalOperatorSymbol,
    symbolToComparatorOperator,
    symbolToLogicalOperator
};