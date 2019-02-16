/**
 * This file contains various functions to help in the parsing process.
 */

const Parser = require('../ast/usParser').usParser;
const literalNames = new Parser().literalNames;

/*****************************************************************************
 * API List
 *****************************************************************************/

/**
 * Trim the given characters from the string.
 * @param {string} c The characters to trim.
 * @return The trimmed string.
 */
function trimChars(str, c) {
    var re = new RegExp("^[" + c + "]+|[" + c + "]+$", "g");
    return str.replace(re, "");
};

/**
 * Creates a map between the original map keys and the parser literal values. Each value being access by the key of the
 * original map value.
 * We create map from k => v to k => literals[v] AND v => literals[v].
 * Yes, we create two literal entities for each entity.
 * @param {Map} originalMap 
 */
function createLiteralMap(originalMap) {
    let map = {};
    for (let i in originalMap) {
        map[i] = trimChars(literalNames[originalMap[i]], "'");
        map[originalMap[i]] = trimChars(literalNames[originalMap[i]], "'");
    }
    return map;
}


module.exports = {
    createLiteralMap,
    trimChars
};