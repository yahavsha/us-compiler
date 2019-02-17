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
    

    /**
     * Executed when the program is being evaluated.
     * @param {ParsingContext} ctx The parsing context.
     */
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
     * @param {ParsingContext} ctx The parsing context.
     * @description The invoking rule is:
     * <code>
        meanie_instruction:
            ASSIGNMENT MEANIE_PROGRAM
            ;
     * </code>
     */
    visitMeanie_instruction(ctx) {
        this.isMeanie = true;
    }

    /**
     * Visit a terminal node. We'll get here in case we're dealing with plain primitive value such as
     * number, string and variable. We'll use this method to retrieve the variable value.
     * @param {ParsingContext} ctx The parsing context.
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
            let value = this.symTable.find(ctx.getText());
            if (value === null) {
                console.log('no variable: ' + ctx.getText());
                throw new VariableNotDefinedError(ctx, ctx);
            }

            return value;
        }

        debug("Could not resolve the terminal node as it's not a symobl.");
        return undefined;
    }

    /**
     * Executed when an expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        expression
            :   assignment_expression
            ;
     * </code>
     */
    visitExpression(ctx) {
        return ctx.getChild(0).accept(this);
    }

    /**
     * Executed when a declaration statement was supplied.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
            declaration
            : VAR_DECL LABEL
            | VAR_DECL_ASSGN? assignment_expression
            ;
     * </code>
     */
    visitDeclaration(ctx) {
        if (this._isSymbol(ctx.getChild(0))) {
            /* Is this a plain variable decl or should we parse the assignment_expression? */
            if (ctx.getChild(0).getSymbol().type == Parser.VAR_DECL) {
                /* Is this variable declared before? */
                if (this.symTable.exists(ctx.getChild(1).getText())) {
                    throw new VariableAlreadyDefinedError(ctx, ctx.getChild(1));
                }

                /* Plain variable declaration */
                return this._setVariable(ctx, ctx.getChild(1));
            } else {
                /* This is assignment_expression */
                return ctx.getChild(1).accept(this);
            }
        }

        /* We don't have a symbol as the 0'th child, that means we should just
        forward to the next rule, which's assignment_expression */
        return ctx.getChild(0).accept(this);
    }

    /**
     * Executed when an assignement is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        assignment_expression
            :   conditional_expression
            |   unary_expression ASSIGNMENT expression
            ;
     * </code>
     */
    visitAssignment_expression(ctx) {
        /* Should we just forward the call or actually performs an assignemnt here? */
        if (ctx.children.length === 1) {
            /* That's a conditional_expression, so just forward it */
            return ctx.getChild(0).accept(this);
        }

        /* Gets the variable & the value */
        let variable = ctx.getChild(0);
        let value = ctx.getChild(2).accept(this);
        
        this._setVariable(ctx, variable, value);
    }

    /**
     * Executed when a condition expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        conditional_expression
            :   logical_or_expression
            ;
     * </code>
     */
    visitConditional_expression(ctx) {
        return ctx.getChild(0).accept(this);
    }

    /**
     * Executed when a "logical or" expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        logical_or_expression
            :   logical_and_expression
            |   logical_or_expression LOGICAL_OR logical_or_expression
            ;
     * </code>
     */
    visitLogical_or_expression(ctx) {
        return this._handleChainedConditionExpression(ctx);
    }

    /**
     * Executed when a "logical and" expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        logical_and_expression
            :   equality_expression
            |   logical_and_expression LOGICAL_AND logical_and_expression
            ;
     * </code>
     */
    visitLogical_and_expression(ctx) {
        return this._handleChainedConditionExpression(ctx);
    }

    /**
     * Executed when an "equal" operator expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        equality_expression
            :   relational_expression
            |   equality_expression COMPARE_EQUAL equality_expression
            |   equality_expression COMPARE_NOT_EQUAL equality_expression
            ;
     * </code>
     */
    visitEquality_expression(ctx) {
        return this._handleSingleConditionExpression(ctx);
    }

    /**
     * Executed when a relation operator expression is being performed.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        relational_expression
            :   additive_expression
            |   relational_expression '<' relational_expression
            |   relational_expression '>' relational_expression
            |   relational_expression '<=' relational_expression
            |   relational_expression '>=' relational_expression
            ;
     * </code>
     */
    visitRelational_expression(ctx) {
        return this._handleSingleConditionExpression(ctx);
    }

    /**
     * Executed when an additive operator has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        additive_expression
            :   multiplicative_expression
            |   additive_expression PLUS additive_expression
            |   additive_expression MINUS additive_expression
            ;
     * </code>
     */
    visitAdditive_expression(ctx) {
        return this._handleArithmeticExpression(ctx);
    }

    /**
     * Executed when a multipication (or modulo) operator has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        multiplicative_expression
            :   power_expression
            |   multiplicative_expression MULTIPLY multiplicative_expression
            |   multiplicative_expression DIVIDE multiplicative_expression
            |   multiplicative_expression MOD multiplicative_expression
            ;
     * </code>
     */
    visitMultiplicative_expression(ctx) {
        return this._handleArithmeticExpression(ctx);
    }

    /**
     * Executed when a power operator has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        power_expression
            : cast_expression
            | power_expression POWER power_expression
            ;
     * </code>
     */
    visitPower_expression(ctx) {
        return this._handleArithmeticExpression(ctx);
    }

    /**
     * Executed when a cast pattern has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        cast_expression
            :   unary_expression
            |   VAR_CAST cast_expression VAR_CAST_TO type_specifiers
            ;
     * </code>
     */
    visitCast_expression(ctx) {
        /* Forward? */
        if (ctx.children.length === 1) {
            return ctx.getChild(0).accept(this);
        }        

        /* Get the casted expression and the type symbol */
        let expr = ctx.getChild(1).accept(this);
        let typeSymobl = ctx.getChild(3).accept(this);

        return NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.CASTING,
            args: [expr, typeSymobl]
        });
    }

    /**
     * Executed when a cast pattern has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
            unary_expression
            :   postfix_expression
            |   PLUS unary_expression
            |   MINUS unary_expression
            |   UNARY_PLUS unary_expression
            |   UNARY_MINUS unary_expression
            ;
    * </code>
    */
    visitUnary_expression(ctx) {
        /* An unary expression MIGHT have a prefix operator or sign.
        If it doesn't we should just move forward (to postfix). Otherwise, we need to aply it */
        if (ctx.children.length === 1) {
            // Forward
            return ctx.getChild(0).accept(this);
        }

        /* Get the actual expression to which we apply the unary value.
        For example, "--a" then the expression is "a". Note that we can actually nested this thing,
        to get "--++a" (that's equal to a). */
        let expr = ctx.getChild(1).accept(this);

        /* Apply the unary operator */
        const unaryOp = ctx.getChild(0).accept(this);

        if (unaryOp === Parser.MINUS) {
            /* To change the sign, we'll multiply by -1 */
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.ARITHMETIC_OPERATION,
                args: [
                    expr,
                    Parser.MULTIPLY,
                    NodeFactory({
                        ctx: this._createContext(ctx),
                        type: NodeType.VALUE,
                        args: [Parser.NUMBER, '-1']
                    })
                ]
            });
        }

        /* the -(value) was a unique operator casue it require a multiplication. The rest require an addition
        operation so we can shorten the code */
        let addedValue = 0;
        switch (unaryOp) {
            case Parser.PLUS:
                /* If the sign is a plus, we don't need to do anything. Why? because
                    plus * plus = plus
                    minus * plus = minus
                    plus * minus = minus
                    minus * minus = plus.
                */
                return expr;
            case Parser.UNARY_PLUS:
                addedValue = 1;
                break;
            case Parser.UNARY_MINUS:
                addedValue = -1;
                break;
            default:
                throw new Error('Could not resolve the requested unary operator.');
        }

        
        return NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.ARITHMETIC_OPERATION,
            args: [
                expr,
                Parser.PLUS,
                NodeFactory({
                    ctx: this._createContext(ctx),
                    type: NodeType.VALUE,
                    args: [Parser.NUMBER, addedValue]
                })
            ]
        });
    }

    /**
     * Executed when a cast pattern has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        postfix_expression
            :   primary_expression
            |   postfix_expression UNARY_PLUS
            |   postfix_expression UNARY_MINUS
            ;
    * </code>
    */
    visitPostfix_expression(ctx) {
        return ctx.getChild(0).accept(this);
    }

    /**
     * Executed when a cast pattern has been applied in an expression.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        primary_expression
            : LABEL
            | NUMBER
            | STRING
            | NULL
            | TRUE
            | FALSE
            | LPAREN expression RPAREN
            | function_call
    * </code>
    */
   visitPrimary_expression(ctx) {
    /*
        * We'll get here only an a case of:
        * 1) Terminal node (number, string, a label (a.k.a., variable)) etc.
        * 2) A forward call to an expression, but with parentesis.
        * 4) Function Call (and what if you want to do "(foo())"? then it's LPAREN expr PAREN which'll return here for the function_call).
        * 
        * We can conclude that we only care about getChild(0), except in (2) in which we need getChild(1).
        * Then we can forward the call via visit(ctx) to visitTerminal, visitExpression etc. Idk which one will be executed.
        * The point is to find the right child to parse, so we don't need to call visitChildren
        * which iterates on all of them and returns an array. I don't like arrays! it looks bad to do, like, visitChildren(ctx)[0][0][0]...
        */
        if (this._isSymbol(ctx.getChild(0))
            && ctx.getChild(0).getSymbol().type == Parser.LPAREN) {
                // This is the "LPAREN expression RPAREN", so parse child(1)
                return ctx.getChild(1).accept(this);
        }

        return ctx.getChild(0).accept(this);
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
     * Declares a new variable.
     * @param {ParsingContext} ctx The parsing context.
     * @param {VariableParsingContext} variableContext The parsing context of the variable label.
     * @param {ValueNode} value The variable value node [optional].
     * @return {VariableNode} The declared variable.
     * @throws VariableAlreadyDefinedError
     */
    _setVariable(ctx, variableContext, value) {
        const variableName = variableContext.getText();

        /* Did we got a value? */
        if (!value) {
            value = NodeFactory({
                ctx: this._createContext(ctx),
                type: NodeType.VARIABLE,
                args: [variableName, ValueNode.NULL]
            });
        }

        /* Add it to the table */
        this.symTable.set(variableContext.getText(), value);
    }

    /**
     * Handles an arithmetic expression.
     * This is an helper to handle the mathematical expression rules.
     * as all of their logic is basically the same.
     * @param {ParsingContext} ctx 
     */
    _handleArithmeticExpression(ctx) {
        /**
         * An expression is a matematical style written content that get evaluated
         * by the math rules (* / before + -).
         * 
         * Our rules are works on the same principal:
         * arithmetic_expr
         *  : next_arithmetic_expr
         *  | arithmetic_expr OPERATOR arithmetic_expr
         * Where `arithmetic_expr` is the actual rule, and `next_arithmetic_expr` is the next rule.
         * 1) We need `arithmetic_expr` in the rule itself for recursion (nested rules, like "1 + 2").
         * 2) The `next_arithmetic_expr` is the next order. We separate rules to respect the order of precedence.
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
     * Handles a single condition expression.
     * This function is being used to handle the comparison operators (foo < bar, foo == bar, foo != bar etc.)
     * @param {ParsingContext} ctx 
     */
    _handleSingleConditionExpression(ctx) {
        /** The idea here is very similiar to _handleArithmeticExpression, so see the explanation there :sweat_smile: */
        
        /* Forward the call? */
        if (ctx.children.length === 1) {
            return ctx.getChild(0).accept(this);            
        }

        /* Evaluate the left and right expressions */
        let lexpr = ctx.getChild(0).accept(this);
        let op = ctx.getChild(1).accept(this);
        let rexpr = ctx.getChild(2).accept(this);

        /* And create the actual condition */
        return NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.CONDITION_EXPR,
            args: [lexpr, op, rexpr]
        });
    }

    /**
     * Handles a chained condition expression.
     * This function is being used to handle the logical operators (a && b, b || c).
     * @param {ParsingContext} ctx 
     */
    _handleChainedConditionExpression(ctx) {
        /* Forward the call? */
        if (ctx.children.length === 1) {
            return ctx.getChild(0).accept(this);            
        }

        /* Evaluate the left and right expressions */
        let lexpr = ctx.getChild(0).accept(this);
        let op = ctx.getChild(1).accept(this);
        let rexpr = ctx.getChild(2).accept(this);

        /* And create the actual condition */
        return NodeFactory({
            ctx: this._createContext(ctx),
            type: NodeType.CONDITION,
            args: [lexpr, op, rexpr]
        });
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