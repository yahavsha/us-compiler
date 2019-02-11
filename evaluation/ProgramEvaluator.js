const USVisitor = require('../lib/usVisitor').usVisitor;
const SymbolTable = require('../SymbolTable');
const Parser = require('../lib/usParser').usParser;
var antlr4 = require('antlr4/index.js');

/*
* For more information and examples, read:
    1. https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f 
    2. https://github.com/kizzx2/antlr-cminus/tree/master/src/com/kizzx2/cminus/http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html
    3. http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html 
    4. https://www.scriptol.com/programming/antlr4-javascript.php
    5. http://lolcode.org
    6. https://github.com/justinmeza/lci 
*/
module.exports = class EvaluationVisitor extends USVisitor {
    constructor() {
        super();
        this.symTable = new SymbolTable();
        this.isMeanie = false;
    }

    start(ctx) {
        const path = require('path');
        const {
            SemanticArgumentCountMismatchError
        } = require('../ErrorHandlers');
        // console.log(this.__getAllMethods(antlr4.error.ErrorListener));
        return;
        return this.visitProgram(ctx);
    }
    
    visitProgram(ctx) {
        /* Enter into a scope */
        this.symTable.enterScope();

        /* Run the children statements */
        this.visitChildren(ctx);
        
        /* Finish the scope execution */
        this.symTable.exitScope();
    }

    /**
     * Executed when the "is meanie" instruction was supplied.
     * @param {*} ctx 
     */
    visitMeanie_instruction(ctx) {
        this.isMeanie = true;
    }

    /**
     * Visit a terminal node. We'll get here in case we're dealing with plain primitive value such as
     * number, string and variable. We'll use this method to retrieve the variable value.
     * @param {*} ctx 
     */
    visitTerminal(ctx) {
        console.log("Teminal Node: " + ctx.getText() + " (type: " + ctx.getSymbol().type + ")");
        let innerValue = ctx.getText();
        //myString.substring(1, myString.length()-1);
        return this.__resolveValue(innerValue, ctx.getSymbol().type);
    }

    visitDeclaration(ctx) {
        /* Is this a decleration or decleration + assignment? */
        if (ctx.getChild(0).getSymbol().type == Parser.VAR_DECL) {
            let variableName = ctx.getChild(0).getText();
            /* Is this variable declared before? */
            if (this.symTable.exists(variableName)) {

            }
        } else {
            console.log("decl + assign");
        }

        return this.visitChildren(ctx);
    }

    visitAssignment(ctx) {
        let variableLabel = ctx.getChild(0);
        let value = this.visit(ctx.getChild(2));
        console.log(`assigning ${variableLabel} = ${value}`);
        return this.visitChildren(ctx);
    }

    // visitAtom(ctx) {
    //     console.log(this.visitChildren(ctx));
    //     // console.log(firstChild);
    //     // console.log("has atom: " + this.__resolveValue(ctx.getText(), 1));
    // }


    __getAllMethods(object) {
        var methods = [];
        for (var m in object) {
            if (typeof object[m] == "function") {
                methods.push(m);
            }
        }
        return methods;
    }

    /**
     * Resolves a value with a given symbol into its right value.
     * This function resolves only primitive values, a.k.a.
     * LABEL, NUMBER, STRING, NULL, TRUE, FALSE.
     * @param {string} value The value to resolve.
     * @param {int} symbol The value symbol.
     * @return The resolved value, or null if the resolve failed (note that NULL is mapped to undefined and not to null).
     */
    __resolveValue(value, symbol) {
        switch (symbol) {
            case Parser.STRING:
                return String(value);
            case Parser.NUMBER:
                return Number(value);
            case Parser.TRUE:
                return true;
            case Parser.FALSE:
                return false;
            case Parser.NULL:
                return undefined;
            case Parser.LABEL:
                let storedValue = this.symTable.find(value);
                if (storedValue === null) {
                    // Warning!
                    return null;
                }
                
                return storedValue;
            default:
                return null;
        }
    }
};