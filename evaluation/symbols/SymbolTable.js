const Stack = require('../../utils/Stack'); 

/**
 * Defines a Symbol Table record.
 */
class Record {
    /**
     * Construct the table record.
     * @param {String} key 
     * @param {*} value 
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

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
 * but `i` defined only in the for loop scope. Thhis symbol table takes care of these rules
 * 
 * For implementation details, see: https://www.d.umn.edu/~rmaclin/cs5641/Notes/L15_SymbolTable.pdf
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
        if (this.scopes.size() < 1) {
            throw new Error('Could not exit from the root scope.');
        }

        /* Pop it */
        let scope = this.scopes.pop();
        return scope;
    }

    /**
     * Adds a symbol key and the coresponding value in the symbols table.
     * A typical use would be to use it to register variables.
     * @param {String} key The symbol key.
     * @param {*} value The symbol value.
     * @return {Boolean}
     */
    add(key, value) {
        if (key.length < 1) {
            throw new Error('The Symbols Table requires a valid string key (length >= 1).');
        }

        if (this.scopes.peek().has(key)) {
            return false;
        }

        this.scopes.peek().set(key, new Record(key, value));
        return true;
    }

    /**
     * Sets a symbol key and the coresponding value in the symbols table.
     * A typical use would be to use it to register variables.
     * @param {String} key The symbol key.
     * @param {*} value The symbol value.
     * @return {Boolean}
     */
    set(key, value) {
        if (key.length < 1) {
            throw new Error('The Symbols Table requires a valid string key (length >= 1).');
        }

        let record = this.findRecord(key);
        if (!record) {
            return false;
        }

        record.value = value;
        return true;
    }

    /**
     * Adds or Sets a symbol key and the coresponding value in the symbols table.
     * A typical use would be to use it to register variables.
     * @param {String} key The symbol key.
     * @param {*} value The symbol value.
     */
    addOrSet(key, value) {
        if (key.length < 1) {
            throw new Error('The Symbols Table requires a valid string key (length >= 1).');
        }

        let record = this.findRecord(key);
        if (!record) {
            this.scopes.peek().set(key, new Record(key, value));
            return true;
        }

        record.value = value;
        return true;
    }

    /**
     * Gets the value that coresponds to the the given symbol key.
     * @param {string} key The symbol key.
     * @returns {*} The symbol value, or null if it's not exists.
     */
    find(key) {
        if (key.length < 1) {
            throw new Error('The Symbols Table requires a valid string key (length >= 1).');
        }

        let record = this.findRecord(key);
        
        if (record) {
            return record.value;
        }

        return null;
    }

    /**
     * Gets the {@see Record} that coresponds to the the given symbol key.
     * @param {string} key The symbol key.
     * @returns {*} The symbol value, or null if it's not exists.
     * @return {Record}
     */
    findRecord(key) {
        /** As JS doesn't use pass-by-ref, we can't have a reference to the stack and pop it out
           to search for the value. In addition, we couldn't use a linked-list style
           referencing to do a
           ```c
           Node* ptr = root;
           while (ptr) {
               // look for it
               ptr = ptr++;
           }
           ```
           Style looping. That's why we're accessing the underlaying array, even if it's SUPER DUPER ULTRA MERA GIGA TERA WRONG !
           */
        let elements = this.scopes.toArray();
        for (let i = elements.length - 1; i >= 0; i--) {
            if (elements[i].has(key)) {
                return elements[i].get(key);
            }
        }

        return null;
    }
    /**
     * Determine if the given key exists in the current scope.
     * @param {string} key The symbol key.
     * @returns {boolean}
     */
    exists(key) {
        let elements = this.scopes.toArray();
        for (let i = elements.length - 1; i >= 0; i--) {
            if (elements[i].has(key)) {
                return true;
            }
        }
        
        return false;
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

            builder += `\tScope { depth = ${this.scopes.size() - i++}, count = ${scope.size} } (\n`;
            scope.forEach((v, k) => {
                builder += `\t\t"${k}": "${v.value}"\n`;
            });
            builder += '\t)\n';
        }

        return builder + ')';
    }
};