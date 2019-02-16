/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

 /* External Libraries */
const antlr4 = require('antlr4/index.js');
const debug = require('debug')('us:evaluator');

/* The AST Classes  */
const USVisitor = require('../ast/usVisitor').usVisitor;
const Parser = require('../ast/usParser').usParser;

/* Helpers */
const SymbolTable = require('../utils/SymbolTable');
const Stack = require('../utils/Stack');

/* Access to nodes */
const { NodeFactory, NodeType } = require('../nodes');
const ValueNode = require('../nodes/ValueNode');

/* Types resolution */
const {
    isTypeSymbol,
    symbolToTypeName,
    isValidValueForType
} = require('../utils/TypesResolver');

/* Semantic Error Handlers */
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
        this.isMeanie = false;
    }

    start(ctx) {
        return this.visitProgram(ctx);
    }

    /*********************** Parsing Rules ***********************/
    visitProgram(ctx) {
        /* Create the main node */
        this.root = NodeFactory({
            ctx,
            type: NodeType.PROGRAM,
            args: []
        });

        /* Run the children statements */
        this.visitChildren(ctx);
        
        return this.root;
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
            return NodeFactory({ ctx, type: NodeType.VALUE, args: [ctx.getSymbol().type, ctx.getText()] });
        }

        // if (ctx.getSymbol().type == Parser.LABEL) {
        //     return this.symTable.find(ctx.getText());
        // }

        debug("Could not resolve the terminal node as it's not a symobl.");
        return undefined;
    }

    visitDeclaration(ctx) {
        /**
         * A declaration rule can have two forms:
         * 1) VAR_DECL LABEL
         * 2) VAR_DECL_ASSGN assignment
         * We should check which one was applied here.
         */

        /* Is this a decleration or decleration + assignment? */
        if (ctx.getChild(0).getSymbol().type == Parser.VAR_DECL) {
            /* This is a plain declaration only */
            let variable = ctx.getChild(1);
            const variableName = variable.getText();

            /* Is this variable declared before? */
            // if (this.symTable.exists(variableName)) {
            //     throw new VariableAlreadyDefinedError(ctx, variable);
            // }

            /* Add it to the table */
            // this.symTable.add(variable.getText(), NodeFactory({
            //     ctx,
            //     type: NodeType.VARIABLE,
            //     args: [variableName, ValueNode.NULL]
            // }));
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

        let value = ctx.getChild(2).accept(this);
        console.log("Value: (text: \""+ ctx.getChild(2).getText() + "\"):");
        console.log(value.toString());
        console.log("Eval:");
        console.log(value.eval().toString());
        return undefined;
        console.log(`assigning ${variableLabel} = ${value}`);
        return this.visitChildren(ctx);
    }

    visitExpression(ctx) {
        return this._handleExpression(ctx);
    }

    visitMultiplying_expression(ctx) {
        return this._handleExpression(ctx);
    }

    visitPow_expression(ctx) {
        return this._handleExpression(ctx);
    }

    visitSigned_atom(ctx) {
        /* A signed is an atom that MIGHT have a "PLUS" or "MINUS".
         * Thus, if the child[0] is a symbol, it's plus or minus.
         * The atom parsing should be moved fo
         * rward. */
        if (this._isSymbol(ctx.getChild(0))) {
            /* If the sign is a plus, we don't need to do anything. Why? because
                plus * plus = plus
                minus * plus = minus
                plus * minus = minus
                minus * minus = plus.
            */
            if (ctx.getChild(0).getSymbol().type == Parser.MINUS) {
                let atomValue = ctx.getChild(1).accept(this);
                return NodeFactory({
                        ctx,
                        type: NodeType.ARITHMETIC_OPERATION,
                        args: [
                            atomValue,
                            Parser.MULTIPLY,
                            NodeFactory({ ctx, type: NodeType.VALUE, args: [Parser.NUMBER, '-1']})
                ]});
            }
        }
        
        return ctx.getChild(0).accept(this);
    }

    visitAtom(ctx) {
        /*
         * Atom: LABEL | NUMBER | STRING | NULL | TRUE | FALSE
         * | LPAREN expression RPAREN | casting | function_call
         * 
         * We see that ATOM contains a:
         * 1) Terminal node (number, string, a label (a.k.a., variable)) etc.
         * 2) A forward call to an expression, but with parentesis.
         * 3) Casting.
         * 4) Function Call (and what if you want to do "(foo())"? then it's LPAREN expr PAREN which'll return here for the function_call).
         * 
         * We can conclude that we only care about getChild(0), except in (2) in which we need getChild(1).
         * Then we can forward the call via visit(ctx) to visitTerminal, visitExpression etc. Idk which one will be executed.
         * The point is to find the right child to parse, so we don't need to call visitChildren
         * which iterates on all of them and returns an array. I don't like arrays! it looks bad to do, like, visitChildren(ctx)[0][0][0]...
          */
         if (this._isSymbol(ctx.getChild(0)) && ctx.getChild(0).getSymbol().type == Parser.LPAREN) {
                // This is the "LPAREN expression RPAREN", so parse child(1)
                return this.visit(ctx.getChild(1));
         }

         return this.visit(ctx.getChild(0));
    }

    visitCasting(ctx) {
        /** For casting, the rule works like:
         * VAR_CAST LABEL VAR_CAST_TO type_specifiers
         * Thus, we need the 1'st and 3'rd childs.
         */
        
        let variable = ctx.getChild(1).accept(this);
        let typeSymobl = ctx.getChild(3).accept(this);

        console.log("variable:");
        console.log(variable.toString());
        process.exit(0);
        
        /* Does the variable already exists? */
        if (!this.symTable.exists(variable.getText())) {
            throw new VariableNotDefinedError(ctx, variable);
        }

        return NodeFactory({
            ctx,
            type: NodeType.CASTING,
            args: [variable, typeSymobl]
        });
    }

    visitType_specifiers(ctx) {
        /* The type_specifiers rule just contains a bunch of type symobls like Words or Numbers.
        As we don't have, at least right now, complex types (classes), we don't need to do much here 
        Only thing to do here is to return the termianl node. */
        return ctx.getChild(0).accept(this);
    }

    /*********************** Helpers ***********************/
    
    /**
     * Handles an expression.
     * This is an helper to handle the "expression", "multiplying_expression" and "pow_expression" rules,
     * as all of their logic is basically the same.
     * @param {ParsingContext} ctx 
     */
    _handleExpression(ctx) {
        /**
         * An expression is a matematical style written content that get evaluated
         * by the math rules (* / before + -).
         * 
         * Both "expression", "multiplying_expression" and "pow_expression"  works quite the same.
         * There're three rules instead of one just in order to solve the order of precedence issue.
         * 
         * So lets see an example:
         * expression is
         *   multiplying_expression ((PLUS | MINUS) multiplying_expression)*
         * 
         * Note that pow_expression (The last child) forward to signed_atom, so that visit rule handles it.
         * 
         * Thus we might have a multiplying_expression or a multiplying_expression
         * with another expression that's been added or reduced from it.
         */
        
         // Do we got the (lparam op rparam) writestyle or we
         // just forward to lparam?
         if (ctx.getChild(1)) {
             /* Get the lparam, rparam and the op */
             let lparam = ctx.getChild(0).accept(this);
             let op = ctx.getChild(1).getSymbol().type;
             let rparam = ctx.getChild(2).accept(this);

             return NodeFactory({
                 ctx,
                 type: NodeType.ARITHMETIC_OPERATION,
                 args: [lparam, op, rparam]
             });
             process.exit(0);
         }

         /* We don't do an arithmetic operation, so just forward */
         return ctx.getChild(0).accept(this);
    }

    /**
     * Determines if the given parsing context node is a symobl node (a.k.a., label, variable, parentesis, plus, minus etc.).
     * @param {ParsingContext} ctx The parsing context.
     * @return True if it's a symbol, false otherwise.
     */
    _isSymbol(ctx) {
        return typeof(ctx.getSymbol) !== 'undefined';
    }


    _printChilds(ctx) {
        let i = 0;
        let child = ctx.getChild(i);
        while (child) {
            console.log("Child #" + i + ":");
            console.log(child.getText());
            child = ctx.getChild(++i);
        }
    }

    _test(ctx) {
        return NodeFactory({ ctx, type: NodeType.VALUE, args:[Parser.NUMBER,'123321']});
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