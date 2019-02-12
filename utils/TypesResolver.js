 /*****************************************************************************
 * Helpers
 *****************************************************************************/

/* Required libraries */
const Parser = require('../ast/usParser').usParser;

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
            return realNumber * 1000000;
        }
    }

    return Number(value);
}

 /*****************************************************************************
 * Initialization
 *****************************************************************************/

const literalNames = new Parser().literalNames;
let VALID_TYPES_MAP = {};
VALID_TYPES_MAP[Parser.NUMBER] = literalNames[Parser.TNUMBER].trimChars("'");
VALID_TYPES_MAP[Parser.STRING] = literalNames[Parser.TSTRING].trimChars("'");
VALID_TYPES_MAP[Parser.TRUE] = literalNames[Parser.TBOOLEAN].trimChars("'");
VALID_TYPES_MAP[Parser.FALSE] = literalNames[Parser.TBOOLEAN].trimChars("'");


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
    return Object.keys(VALID_TYPES_MAP).indexOf(String(symbol)) > -1;
}

/**
 * Converts the symbol int into a type string.
 * @param {int} symbol The symbol int number. Should get from ANTLR parser or lexer.
 */
function symbolToTypeName(symbol) {
    return VALID_TYPES_MAP[symbol];
}

/**
 * Determine if the given value is valid for the given type.
 * @param {string|int} type The type name or int symbol.
 * @param {*} value The value.
 * @return True if the value is valid, false otherwise.
 */
function isValidValueForType(type, value) {

}

/**
 * Create a JavaScript value from the given type and value.
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
            return null;
        default:
            throw new Error(`Could not resolve the type ${type} for the value ${value}.`);
    }
}

 /*****************************************************************************
 * EXPORT
 *****************************************************************************/

module.exports = {
    isTypeSymbol,
    symbolToTypeName,
    isValidValueForType,
    createJSValue
};