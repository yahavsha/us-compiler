/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { Symbol, SymbolType } = require('./Symbol');
const { TypeValue } = require('../../types');
const ScopeNode = require('../../ast/nodes/ScopeNode');

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
    constructor(name, args, scope) {
        super(name); // symbol name = function name

        if (!args) {
            args = [];
        }

        this.name = name;
        this.args = args;
        this.scope = scope;
    }

    /**
     * Gets true if this is a native function.
     */
    isNativeFunction() {
        return !this.isUserFunction();
    }

    /**
     * Gets true if this is a user function.
     */
    isUserFunction() {
        return this.scope instanceof ScopeNode;
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
        if (this.isUserFunction()) {
            return `FunctionSymbol [user method] { name = "${this.name}", args = "${this.args}", scope = "${this.scope}" }`;
        } else {
            return `FunctionSymbol [native method] { name = "${this.name}", args = "${this.args}" }`;
        }
    }
};