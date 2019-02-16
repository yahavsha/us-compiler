/**
 * This file contains helpers to work with types and symbols.
 */

/*****************************************************************************
 * Helpers
 *****************************************************************************/

/* Required libraries */
const Parser = require('../ast/usParser').usParser;
const EvaluationContext = require('../interperter/EvaluationContext');

/* Get the parser literals */
const literalNames = new Parser().literalNames;

/* At the g4 file, the types names has been defiined.
For example, "Number", "String" etc already appears there.
Each one was mapped to Parser.T{XXX}. Thus, when creating this
map, instead of writing the types again in plain string, we can use
the already defined values at g4.

1) We can access these values from literalNames.
2) We must notice that antlr wrap them in '', thus we need to remove them.
*/

/**
 * Trim the given characters from the string.
 * @param {string} c The characters to trim.
 * @return The trimmed string.
 */
String.prototype.trimChars = function (c) {
    var re = new RegExp("^[" + c + "]+|[" + c + "]+$", "g");
    return this.replace(re, "");
};

/**
 * Resolves a numeric string.
 * @param {string} value 
 */
function _resolveNumber(value) {
    /* A number might have a "k" or "m" at the end */
    if (value.length > 1) {
        if (value[value.length - 1] == 'k') {
            const realNumber = Number(value.substring(0, value.length - 1));
            return realNumber * 1000;
        } else if (value[value.length - 1] == 'm') {
            const realNumber = Number(value.substring(0, value.length - 1));
            return realNumber * 1000000 ;
        }
    }

    return Number(value);
}

/**
 * Creates a map between the original map keys and the parser literal values. Each value being access by the key of the
 * original map value.
 * We create map from k => v to k => literals[v] AND v => literals[v].
 * Yes, we create two literal entities for each entity.
 * @param {Map} originalMap 
 */
function _createLiteralMap(originalMap) {
    let map = {};
    for (let i in originalMap) {
        map[i] = literalNames[originalMap[i]].trimChars("'");
        map[originalMap[i]] = literalNames[originalMap[i]].trimChars("'");
    }
    return map;
}

 /*****************************************************************************
 * Initialization
 *****************************************************************************/

/* Define the valid types. Almost each type has two numerical keys,
   the actual type (NUMBER, TRUE, FALSE) and the T-Type (TSTRING, TNUMBER)
   which represents the word that own the type (String, Number etc.).
   Example:
   - 15: NUMBER
   - "Hello": STRING
   - Words: TSTRING (the word "Words" is the symbol for String in the language).
   - Number: TNUMBER
   */

let TYPES_MAP = {};
TYPES_MAP[Parser.NUMBER] = Parser.TNUMBER;
TYPES_MAP[Parser.STRING] = Parser.TSTRING;
TYPES_MAP[Parser.TRUE] = Parser.TBOOLEAN;
TYPES_MAP[Parser.FALSE] = Parser.TBOOLEAN;
TYPES_MAP[Parser.NULL] = Parser.NULL;

/* Create helper maps */
let VALID_TYPES_MAP = _createLiteralMap(TYPES_MAP);
let VALID_ARITHMETIC_OP_MAP = {};

for (let token of [Parser.PLUS, Parser.MINUS, Parser.MULTIPLY, Parser.DIVIDE, Parser.POWER]) {
    VALID_ARITHMETIC_OP_MAP[token] = literalNames[token].trimChars("'");
}

/*****************************************************************************
 * The API methods
 *****************************************************************************/

 /**
  * Determine if the given symbol is a type value or not.
  * @param {int} symbol The symbol int representation.
  */
function isTypeSymbol(symbol) {
    /* Note the usage of String(symbol), as we get an int but
    The map treated our data as a string */
    return Object.keys(TYPES_MAP).indexOf(String(symbol)) > -1;
}

 /**
  * Determine if the given symbol is a type litreal (String, Number etc.) value or not.
  * @param {int} symbol The symbol int representation.
  */
function isTypeLiteralSymbol(symbol) {
    return Object.values(TYPES_MAP).indexOf(symbol) > -1;
}

/**
 * Determine if the given symbol int is a valid operator symbol (e.g. +, -...).
 * @param {int} symbol 
 */
function isOPSymbol(symbol) {
    return Object.keys(VALID_ARITHMETIC_OP_MAP).indexOf(String(symbol)) > -1;
}

/**
 * Converts the symbol int into a type string.
 * @param {int} symbol The symbol int number. Should get from ANTLR parser or lexer.
 */
function symbolToTypeName(symbol) {
    return VALID_TYPES_MAP[symbol];
}

/**
 * Converts the op symbol int into a type string.
 * @param {int} op The symbol int number. Should get from ANTLR parser or lexer.
 */
function arithmeticOperationToString(op) {
    return VALID_ARITHMETIC_OP_MAP[op];
}

/**
 * Creates a US variable from the given ES6 variable.
 * @param {*} value The variable value.
 * @param {*} ctx The parsing context in which the value was created within. If not provided, the variable considered to be defined at the global scope.
 */
function createUSValue(value, ctx = {}) {
    const { NodeFactory, NodeType } = require('../nodes');
    let type;

    /* Why we use both typeof() and instanceof? see https://stackoverflow.com/a/7772724 */
    if (typeof(value) === 'number' || value instanceof Number) {
        type = Parser.NUMBER;
    } else if (typeof(value) === 'boolean' || value instanceof String) {
        type = value ? Parser.TRUE : Parser.FALSE;
    } else if (typeof(value) === 'string' || value instanceof String) {
        type = Parser.STRING;
    } else if (value === null) {
        type = Parser.NULL;
    } else {
        throw new Error('Could not resolve the value: '  + value);
    }

    return NodeFactory({
        ctx: new EvaluationContext({}, null),
        type: NodeType.VALUE,
        args: [type, value]
    });
}

/**
 * Create an ES6 value from the given type and value.
 * @param {int} type The type.
 * @param {String} value The value as string.
 */
function createJSValue(type, value) {
    switch (type) {
        case Parser.NUMBER:
            return _resolveNumber(value);
        case Parser.STRING:
            return String(value.trimChars('"')); // Strings are wrapped in "" by definition.
        case Parser.TRUE:
            return true;
        case Parser.FALSE:
            return false;
        case Parser.NULL:
            return Parser.NULL;
        default:
            throw new Error(`Could not resolve the type ${type} for the value ${value}.`);
    }
}

 /*****************************************************************************
 * EXPORT
 *****************************************************************************/

module.exports = {
    isTypeSymbol,
    isTypeLiteralSymbol,
    symbolToTypeName,
    createJSValue,
    arithmeticOperationToString,
    isOPSymbol,
    createUSValue
};