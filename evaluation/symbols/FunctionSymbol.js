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
     * @param {int|array} args The function args.
     * @param {*} data The data that should be used to execute the function.
     *                 If this is a user function, it'll be a ScopeNode. Otherwise, It'll be a pointer
     *                 to the native function.
     */
    constructor(name, args, data) {
        super(name); // symbol name = function name

        this.name = name;
        this.args = args;
        this.data = data;
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
        return this.data instanceof ScopeNode;
    }

    /**
     * Gets the symbol type.
     * @return {SymbolType} The symbol type.
     */
    getType() {
        return SymbolType.FUNCTION;
    }

    /**
     * Gets the function signature.
     */
    getSignature() {
        return `${this.name}(${this.getArgsString()})`;
    }

    /**
     * Gets the arguments description string.
     */
    getArgsString() {
        if (this.isNativeFunction()) {
            /* If this is a native function, we can get a number or arguments descriptor */
            if (typeof(this.args) === 'number') {
                /* If it's just a number, resolve it accordingly */
                if (this.args === -1) {
                    return '...';
                } else {
                    let argsText = [];
                    for (let i = 1; i <= this.args.length; i++) {
                        argsText.push(`arg${i}`);
                    }
    
                    return argsText.join(', ');
                }
            } else {
                throw 'descriptor FuncSymbol.js';
            }
        }
        
        /* In user functions, the array contains just strings, so lets just text them */
        return this.args.join(', ');
    }

    /**
     * Gets a string representation of this symbol.
     */
    toString() {
        if (this.isUserFunction()) {
            return `FunctionSymbol [user method] { name = "${this.name}", args = "${this.args}", scope = "${this.data}" }`;
        } else {
            return `FunctionSymbol [native method] { name = "${this.name}", args = "${this.args}" }`;
        }
    }
};