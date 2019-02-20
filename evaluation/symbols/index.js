/**
 * This module is responsible on the symbols representation and storage during the evaluation process.
 * The file just used to provide a simple Symbol factory method, as well
 * as exporting the internal classes.
 * 
 * @module interperter
 * @requires evaluation
 * @author Yahav S.
 */


/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { SymbolType, Symbol } = require('./Symbol');
const VariableSymbol = require('./VariableSymbol');
const SymbolTable = require('./SymbolTable');

/*****************************************************************************
 * API
 *****************************************************************************/

 /**
 * Instantiate a new {@see Symbol} from the given symbol type and arguments.
 * @param {object} options The creation options.
 * @return {Symbol} The instantiated node.
 * 
 * @see https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 (for this Factory style implementation in ES6).
 */
function SymbolFactory(options = {
    type: SymbolType.UNKNOWN,
    args: []
} = {}) {
    switch (options.type) {
        case SymbolType.VARIABLE:
            return new VariableSymbol(... options.args);
        default:
            throw new Error('Could not create the requested symbol (type: ' + type + ').');
    }
}


/*****************************************************************************
 * Exports
 *****************************************************************************/

module.exports = {
    SymbolFactory,
    Symbol,
    SymbolTable,
    SymbolType,
    VariableSymbol
};