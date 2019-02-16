const Stack = require('./Stack'); 

/**
 * Defines a Symbols Table, which allows to store symbols and retrieve them for specific scope of code.
 * Symbols are typically variables.
 * 
 * For example (Java code):
 * ```java
 *  int n = 10;
 *  for (int i = 0; i < n; i++) { // Declares an inner scope
 *      System.out.println(i);
 *  }
 * ```
 * In this case, `n` defined at an outer scope and will be available after the for loop,
 * but `i` defined only in the for loop scope. Thhis symbol table takes care of these rules.
 */
module.exports = class SymbolTable {
    constructor(globals) {
        this.scopes = new Stack();
        this.scopes.push(globals || new Map());
    }

    /**
     * Creates a new scope and enters into it.
     */
    enterScope() {
        this.scopes.push(new Map());
    }

    /**
     * Exit from the current scope into the outer scope.
     * @return {Map} The exited scope.
     */
    exitScope() {
        if (this.scopes.size() > 0) {
            return this.scopes.pop();
        } else {
            return 0;
        }
    }

    /**
     * Sets a symbol key and the coresponding value in the symbols table.
     * A typical use would be to use it to register variables.
     * @param {String} key The symbol key.
     * @param {*} value The symbol value.
     */
    set(key, value) {
        if (key.length > 0) {
            this.scopes.peek().set(key, value);
        }
    }

    /**
     * Gets the value that coresponds to the the given symbol key.
     * @param {string} key The symbol key.
     * @returns {*} The symbol value, or null if it's not exists.
     */
    find(key) {
        if (key.length > 0) {
            return this.scopes.peek().get(key) || null;
        }
        return null;
    }

    /**
     * Determine if the given key exists in the current scope.
     * @param {string} key The symbol key.
     * @returns {boolean}
     */
    exists(key) {
        return Array.from(this.scopes.peek().keys()).indexOf(key) > -1;
    }

    /**
     * Formats the symbols table.
     */
    toString() {
        let builder = 'SymbolTable(\n';
        let scopes = this.scopes.clone();
        
        let i = 0;
        while (!scopes.isEmpty()) {
            let scope = scopes.pop();

            builder += `\tScope { depth = ${i}, count = ${scope.size} } (\n`;
            scope.forEach((v, k) => {
                builder += `\t\t"${k}": "${v}"\n`;
            });
            builder += '\t)\n';
        }

        return builder + ')';
    }
};