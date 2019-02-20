/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { Symbol, SymbolType } = require('./Symbol');
const { TypeValue } = require('../../types');

/*****************************************************************************
 * Describes the symbol
 *****************************************************************************/

/**
 * Describes a variable symbol.
 */
module.exports = class VariableSymbol extends Symbol {
    /**
     * Constructs a new variable symbol.
     * @param {String} variableName The variable name.
     */
    constructor(variableName, value) {
        super(variableName); // symbol name = variable name

        if (!value) {
            value = TypeValue.Null;
        }

        this.value = value;
    }

    /**
     * Gets the symbol type.
     * @return {SymbolType} The symbol type.
     */
    getType() {
        return SymbolType.VARIABLE;
    }

    /**
     * Gets a string representation of this symbol.
     */
    toString() {
        return `VariableSymbol { name = "${this.name}", value = "${this.value}" }`;
    }
};