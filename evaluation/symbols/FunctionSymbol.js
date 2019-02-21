/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { Symbol, SymbolType } = require('./Symbol');
const { TypeValue } = require('../../types');

/*****************************************************************************
 * Describes a function symbol
 *****************************************************************************/

/**
 * Describes a function symbol.
 */
module.exports = class FunctionSymbol extends Symbol {
    /**
     * Constructs a new variable symbol.
     * @param {String} name The function name.
     * @param {String} args The function args.
     */
    constructor(name, args) {
        super(name); // symbol name = function name

        if (!args) {
            args = [];
        }

        this.name = name;
        this.args = [];
    }

    /**
     * Gets the symbol type.
     * @return {SymbolType} The symbol type.
     */
    getType() {
        return SymbolType.FUNCTION;
    }

    /**
     * Gets a string representation of this symbol.
     */
    toString() {
        return `FunctionSymbol { name = "${this.name}", args = "${this.args}" }`;
    }
};