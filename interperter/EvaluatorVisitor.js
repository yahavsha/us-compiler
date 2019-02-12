/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

const antlr4 = require('antlr4/index.js');
const debug = require('debug')('us:evaluator');

const USVisitor = require('../ast/usVisitor').usVisitor;
const SymbolTable = require('../utils/SymbolTable');
const Parser = require('../ast/usParser').usParser;
const { NodeFactory, NodeType } = require('../nodes');

const {
    isTypeSymbol,
    symbolToTypeName,
    isValidValueForType
} = require('../utils/TypesResolver');

const {
    SemanticError,
    VariableNotDefinedError,
    VariableAlreadyDefinedError
} = require('./CompilationErrors');

/*****************************************************************************
 * Define our strong evaluator! ᕙ(＠°▽°＠)ᕗ
 *****************************************************************************/

/*
* For more information and examples, read:
    1. https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f 
    2. https://github.com/kizzx2/antlr-cminus/tree/master/src/com/kizzx2/cminus/http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html
    3. http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html 
    4. https://www.scriptol.com/programming/antlr4-javascript.php
    5. http://lolcode.org
    6. https://github.com/justinmeza/lci 
*/
module.exports = class EvaluatorVisitor extends USVisitor {
    constructor() {
        super();
        this.symTable = new SymbolTable();
        this.isMeanie = false;
    }

    start(ctx) {
        // console.log(NodeFactory(NodeType.VARIABLE));
        // return;
        // console.log(this.__getAllMethods(antlr4.error.ErrorListener));
        return this.visitProgram(ctx);
    }

    /*********************** Parsing Rules ***********************/
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
     * @return {Node} A node with the coresponding value, or undefined if we should just throw this into the trash can!
     */
    visitTerminal(ctx) {
        debug("Teminal Node: " + ctx.getText() + " (type: " + ctx.getSymbol().type + ")");
        if (isTypeSymbol(ctx.getSymbol().type)) {
            return NodeFactory(NodeType.VALUE, ctx.getSymbol().type, ctx.getText());
        }

        /*
        let innerValue = ctx.getText();
        //myString.substring(1, myString.length()-1);
        // return this.__resolveValue(innerValue, ctx.getSymbol().type);*/
    }

    visitDeclaration(ctx) {
        /* Is this a decleration or decleration + assignment? */
        if (ctx.getChild(0).getSymbol().type == Parser.VAR_DECL) {
            let variableLabel = ctx.getChild(1);
            /* Is this variable declared before? */
            if (this.symTable.exists(variableLabel.getText())) {
                throw new VariableAlreadyDefinedError(ctx, variableLabel);
            }

            /* Add it to the table */
            this.symTable.add(variableLabel.getText(), undefined);
        } else {
            console.log("decl + assign");
        }

        return this.visitChildren(ctx);
    }

    visitAssignment(ctx) {
        /* Get the variable itself */
        let variableLabel = ctx.getChild(0);

        /* Did we defined it? we HAVE to if we're being mean! */
        if (this.isMeanie) {
            if (!this.symTable.exists(variableLabel.getText())) {
                throw new VariableNotDefinedError(ctx, variableLabel);
            }
        }

        let value = this.visit(ctx.getChild(2));
        console.log(`assigning ${variableLabel} = ${value}`);
        return this.visitChildren(ctx);
    }

    // visitSigned_atom(ctx) {
    //     /* A signed is an atom that MIGHT have a "PLUS" or "MINUS".
    //      * Thus, if the child[0] is a symbol, it's plus or minus.
    //      * The atom parsing should be moved forward. */
    //     let v = ctx.getChild(0);
    //     // console.log("val: " + this._isSymbol(v) + " ; text : " + v.getText());
    //     // console.log(this.__getAllMethods(v, true));
    //     // console.log("type: " + ctx.getChild(0).parser.getType());
    //     return;
    // }

    // visitAtom(ctx) {
    //     console.log(this.visitChildren(ctx));
    //     // console.log(firstChild);
    //     // console.log("has atom: " + this.__resolveValue(ctx.getText(), 1));
    // }

    /*********************** Helpers ***********************/
    _isSymbol(node) {
        return typeof(node.getSymbol) !== 'undefined';
    }

    __getAllMethods(object,everything) {
        var methods = [];
        for (var m in object) {
            if (everything===true||typeof object[m] == "function") {
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