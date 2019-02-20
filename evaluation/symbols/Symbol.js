/*****************************************************************************
 * The available symbols
 *****************************************************************************/

const SymbolType = {
    UNKNOWN:        -1,
    VARIABLE:       0,
    FUNCTION:       1,
};

module.exports.SymbolType = SymbolType;

/*****************************************************************************
 * Describes a simple symbol
 *****************************************************************************/

/**
 * Describes a generic programming language symbol. A symbol has to have a name and a scope in which it lives.
 */
module.exports.Symbol = class Symbol {
    /**
     * Constructs a new symbol.
     * @param {String} name The symbol name.
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Gets the symbol type.
     * @return {SymbolType} The symbol type.
     */
    getType() {
        return SymbolType.UNKNOWN;
    }

    /**
     * Gets a string representation of this symbol.
     */
    toString() {
        return `Symbol { }`;
    }
};
