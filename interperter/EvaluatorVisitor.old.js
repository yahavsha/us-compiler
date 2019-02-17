/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

 /* External Libraries */
const antlr4 = require('antlr4/index.js');
const debug = require('debug')('us:evaluator');

/* The AST Classes  */
const USVisitor = require('../ast/usVisitor').usVisitor;
const Parser = require('../ast/usParser').usParser;
const EvaluationContext = require('./EvaluationContext');

/* Helpers */
const SymbolTable = require('../utils/SymbolTable');
const Stack = require('../utils/Stack');

/* Access to nodes */
const { NodeFactory, NodeType } = require('../nodes');
const ValueNode = require('../nodes/ValueNode');

/* Types resolution */
const {
    isOPSymbol,
    isTypeSymbol,
    isTypeLiteralSymbol,
    createJSValue,
} = require('../utils/TypesResolver');

/* Conditions */
const { isComparatorSymbol, isLogicalOperatorSymbol } = require('../utils/ConditionsResolver');

/* Semantic Error Handlers */
const {
    VariableNotDefinedError,
    VariableAlreadyDefinedError
} = require('./CompilationErrors');

/*****************************************************************************
 * Define our strong evaluator! ᕙ(＠°▽°＠)ᕗ
 *****************************************************************************/

class EvaluationResult {
    constructor(symTable) {
        this.symTable = symTable;
    }

    getGlobalVariable(key) {
        let result = this.symTable.find(key);
        return createJSValue(result.type, result.value);
    }
}

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
    constructor(globals) {  
        super();
        this.isMeanie = false;
        this.globals = globals;
    }

    /*********************** Public API ***********************/
    start(ctx) {
        /* Initialize */
        this.symTable = new SymbolTable();

        /* Visit the root node */
        this.visitProgram(ctx);
        
        console.log('');
        console.log("==============================");
        console.log("   Evaluation Ended");
        console.log("==============================");
        console.log(this.symTable.toString());

        return new EvaluationResult(this.symTable);
    }

    /*********************** Parsing Rules ***********************/
    visitProgram(ctx) {
        /* Push the entire global variables so they'll be available from within our script */
        for (let chocolate in this.globals) { // Why chocolate? cause it's tasty, duh!
            this.symTable.set(chocolate, this.globals[chocolate]);
        }

        /* Run the children statements */
        return this.visitChildren(ctx);
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
        /* Setup */
        let symbolType = ctx.getSymbol().type;
        debug("Teminal Node: " + ctx.getText() + " (type: " + symbolType + ")");

        /* Is this an actual value (actual string, numbers etc.) ? */
        if (isTypeSymbol(symbolType)) {
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.VALUE,
                args: [ctx.getSymbol().type, ctx.getText()]
            });
        }

        /* If this is a type literal, logical operator or comparator operator, we should just
        return their symbol type (the number in the Parser) */
        if (isTypeLiteralSymbol(symbolType)
            || isComparatorSymbol(symbolType)
            || isLogicalOperatorSymbol(symbolType)
            || isOPSymbol(symbolType)) {
            return symbolType;
        }

        /* Is this a variable? */
        if (ctx.getSymbol().type == Parser.LABEL) {
            /* Retrieve it from the symbols table */
            return this.symTable.find(ctx.getText());
        }

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
            if (this.symTable.exists(variableName)) {
                throw new VariableAlreadyDefinedError(ctx, variable);
            }

            /* Add it to the table */
            this.symTable.set(variable.getText(), NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.VARIABLE,
                args: [variableName, ValueNode.NULL]
            }));
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

        /* Parse the value */
        let value = ctx.getChild(2).accept(this);
        
        /* Update the symbol table */
        this.symTable.set(variableLabel.getText(), value);

        // console.log("Value: (text: \""+ ctx.getChild(2).getText() + "\"):");
        // console.log(value.toString());
        // console.log("Eval:");
        // console.log(value.eval().toString());
        return undefined;
        console.log(`assigning ${variableLabel} = ${value}`);
        return this.visitChildren(ctx);
    }

    visitExpression(ctx) {
        /* An expression looks like that:
        expression :
                multiplying_expression ((PLUS | MINUS) multiplying_expression)*
                | expression LOGICAL_OR expression
                | expression LOGICAL_AND expression
                | expression COMPARE_EQUAL expression
                | expression COMPARE_NOT_EQUAL expression
                | expression COMPARE_GREATER expression
                | expression COMPARE_SMALLER expression
        
        A multiplying expression is an expression that uses the multiply and divide operators. Why do we need these?
        Because we want to respect the order of precedence.
        The rest of the expressions are just nested expressions with comparison operators.
        We need to determine which type of expression we got. If we got a comparison operator, we need to evaluate both
        sides of the edxpression and then return the boolean value, otherwise we can just continue with arithmetic evaluation.

        Thus:
        1) If we have one child - it's a nested expression or it's childs (like label).
        2) If we have more: We need to check if it's an arithmetic op, comparator op or logical op and act accordingly.
        */

        /* If the length === 1, then this is just a simple expression we can easily resolve */
        if (ctx.children.length === 1) {
            return ctx.getChild(0).accept(this);
        }

        /* If the length === 3, it can be everything from arithmetic operation to a simple condition */
        if (ctx.children.length === 3) {
            let op = ctx.getChild(1).accept(this); // Fetch the operator
            console.log('op: ' + op);

            /* If that's a type, handle it accorndlgly */
            if (isOPSymbol(op) || isTypeSymbol(op)) {
                return this._handleArithmeticExpression(ctx);
            }
        }

        /* That's a condition */
        return this._handleConditionExpression(ctx);

        //     if (isComparatorSymbol(op)) {
        //         let lparam = ctx.getChild(0).accept(this);
        //         let rparam = ctx.getChild(2).accept(this);

        //         return NodeFactory({
        //             ctx: this._createContext(ctx),
        //             type: NodeType.CONDITION_EXPR,
        //             args: [lparam, op, rparam]
        //         });
        //     }
        // }
        // return this._handleArithmeticExpression(ctx);
    }

    visitMultiplying_expression(ctx) {
        return this._handleArithmeticExpression(ctx);
    }

    visitPow_expression(ctx) {
        return this._handleArithmeticExpression(ctx);
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
                        ctx: this._createContext(ctx),
                        type: NodeType.ARITHMETIC_OPERATION,
                        args: [
                            atomValue,
                            Parser.MULTIPLY,
                            NodeFactory({
                                ctx: this._createContext(ctx),
                                type: NodeType.VALUE,
                                args: [Parser.NUMBER, '-1']
                            })
                        ]
                    });
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

        /* Does the variable already exists? */
        if (!this.symTable.exists(ctx.getChild(1).getText())) {
            throw new VariableNotDefinedError(ctx, variable);
        }

        let n = NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.CASTING,
            args: [variable, typeSymobl]
        });

        console.log(n.toString());
        console.log(n.eval().toString());
        process.exit(0);
    }

    visitType_specifiers(ctx) {
        /* The type_specifiers rule just contains a bunch of type symobls like Words or Numbers.
        As we don't have, at least right now, complex types (classes), we don't need to do much here 
        Only thing to do here is to return the termianl node. */
        return ctx.getChild(0).accept(this);
    }

    visitCondition_block(ctx) {
        /**
         * This is an if-else condition.
         * The rule structure is:
         * 1) IF conditional_expression CONDITION_SUFFIX statement* IF_SUFFIX
         * 2) IF conditional_expression CONDITION_SUFFIX statement* IF_SUFFIX (ELSE condition_block)? ELSE statement* ELSE_SUFFIX
         * 
         * Thus our childs are:
         * - #1: The condition expression itself.
         * - #3: The if-true block.
         * - 
         */
        
        /* Parse the condition expression */
        let conditionsNode = ctx.getChild(1).accept(this);
        console.log('got expression');
        console.log(conditionsNode.toString());
        console.log(conditionsNode.eval().toString());
        process.exit(0);
    }

    visitConditional_expression(ctx) {
        /**
         * Each condition might have multiple rules, seperated by logical operations.
         * Thus, to keep the and and or rules in order, we seperated them into 2 rules.
         * This rule is:
         *  and_chained_conditional_expression (LOGICAL_AND and_chained_conditional_expression)*
         * 
         * Thus:
         * 1) If we only have a simple expression, we'll have only one child.
         * 2) If we'll have multiple expression, then
         *      - Even indexes (0, 2, 4) will have the condition itself
         *      - Odd indexes will have the logical operator.
         */

        if (ctx.children.length === 1) {
            /* This is a simple condition */
            let expr = ctx.getChild(0).accept(this);

            return NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.CONDITION,
                args: [expr]
            });
        }

        

        /* Iterate over the nested conditions and build them.
            Remember that even indexes has the conditions and odd indexes has the 
            logical operatos. In addition, we'll always have odd length of childs
            as we have two conditions + one logical operator.
            For example:
            if (expr1 && expr2 && expr3)
            There're 3 expressions + 2 logical operators = 5 childrens.
            Lastly, note that we go in reverse order to build everything, as we need to respect the order of precendence
            in the evaluation process.
            */
        let condition = NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.CONDITION,
            args: [ctx.getChild(ctx.children.length - 1).accept(this)]
        });

        for (let i = ctx.children.length - 2; i >= 0; i -= 2) { // length - 2 instead of length - 1 as we already took the last expr.
            /* Get the data */
            let op = ctx.getChild(i).accept(this);
            let expr = ctx.getChild(i - 1).accept(this);

            /* Chain the condition */
            condition = NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.CONDITION,
                args: [expr, op, condition]
            });
        }
        console.log("condition:");
        console.log(condition.toString());
        process.exit(0);
    }

    visitAnd_chained_conditional_expression(ctx) {
        /**
         * This is an "and condition". It might have multiple or rules and a "not" logical unary operator.
         * The rule is:
         *  LOGICAL_NOT? expression (LOGICAL_OR LOGICAL_NOT? expression)*
         * 
         * Thus our childs depend if we got a LOGICAL_NOT at the start or not.
         */

        if (this._isSymbol(ctx.getChild(0))) {
            // We got a logical not at the first of the expression.
        } else {
            return ctx.getChild(0).accept(this);
        }
    }

    /*********************** Helpers ***********************/
    
    /**
     * Creates an {@see EvaluationContext} from the given parsing context.
     * @param {ParsingContext} ctx The parsing context.
     */
    _createContext(ctx) {
        return new EvaluationContext(
            ctx, this.symTable
        );
    }

    /**
     * Handles a condition expression.
     * @param {ParsingContext} ctx 
     */
    _handleConditionExpression(ctx) {
        this._printChilds(ctx);
        process.exit(0);
    }

    /**
     * Handles an arithmetic expression.
     * This is an helper to handle the "expression", "multiplying_expression" and "pow_expression" rules,
     * as all of their logic is basically the same.
     * @param {ParsingContext} ctx 
     */
    _handleArithmeticExpression(ctx) {
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
         if (ctx.children.length === 3) {
             /* Get the lparam, rparam and the op */
             let lparam = ctx.getChild(0).accept(this);
             let op = ctx.getChild(1).getSymbol().type;
             let rparam = ctx.getChild(2).accept(this);

             return NodeFactory({
                ctx: this._createContext(ctx),
                 type: NodeType.ARITHMETIC_OPERATION,
                 args: [lparam, op, rparam]
             });
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
        return NodeFactory({ ctx: this._createContext(ctx), type: NodeType.VALUE, args:[Parser.NUMBER,'123321']});
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