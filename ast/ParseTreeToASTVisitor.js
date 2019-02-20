/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

/* External Libraries */
const antlr4 = require('antlr4/index.js');
const debug = require('debug')('us:cstvisitor');

/* The AST Classes  */
const USVisitor = require('../lib/usVisitor').usVisitor;
const Parser = require('../lib/usParser').usParser;
const ASTContext = require('./ASTContext');

/* Nodes list */
const {
    ASTNode,
    ASTNodeType,
    NodeFactory,
    ScopeNode,
    VariableReferenceNode
} = require('./nodes');
 
/* Helpers */
const { TypesRegistar, PrimitiveType, AnswerType } = require('../types');

/* Errors */
const {
    UnexpectedSymbolError
} = require('../interperter/CompilationErrors');

/*
 * For more information and examples, read:
     1. https://medium.com/dailyjs/compiler-in-javascript-using-antlr-9ec53fd2780f 
     2. https://github.com/kizzx2/antlr-cminus/tree/master/src/com/kizzx2/cminus/http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html
     3. http://jakubdziworski.github.io/enkel/2016/04/16/enkel_10_if_statement.html 
     4. https://www.scriptol.com/programming/antlr4-javascript.php
     5. http://lolcode.org
     6. https://github.com/justinmeza/lci

     Converting CST into AST and, generally, what's going on here?
     https://stackoverflow.com/a/29996191/1497516
     (>> Very Important Source! <<)
 */

/**
 * Defines a Concrete Syntax Tree (CST) to Abstract Syntax Tree (AST) visitor. This is a Visitor design-pattern based class that iterates
 * through the tree and evaluates it into an evaluation tree.
 */
module.exports = class ParseTreeToASTVisitor extends USVisitor {
    constructor(options = {}, globals = {}) {
        super();
        this.options = options;
        this.isMeanie = this.options.isMeanie || false;
        this.globals = globals;
        this.codeLines = []; // An array that contains the code lines.
    }

    /*********************** Public API ***********************/
    
    /**
     * Parse the CST into an AST.
     * @param {ParsingContext} ctx 
     */
    start(ctx) {
        /* Gets the code lines we're parsing, it's required by the ASTContext */
        const tokens = new antlr4.CommonTokenStream(ctx.parser.getInputStream());
        const input = tokens.tokenSource.tokenSource.inputStream.toString();
        this.codeLines = input.split(/\r?\n/);

        /* Visit the root node */
        let program = this.visitProgram(ctx);
        return program;
    }

    /*********************** Parsing Rules ***********************/
    
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
        
        /* Null */
        if (symbolType === Parser.NULL) {
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VALUE,
                args: []
            });
        }

        /* If it's true or false, we can handle it quickly and we can't handle it with the general case */
        if (symbolType === Parser.TRUE || symbolType === Parser.FALSE) {
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VALUE,
                args: [ctx.getSymbol().type, symbolType === Parser.TRUE]
            });
        }

        /* Is this an actual value (actual string, numbers etc.) ? */
        if (PrimitiveType.isPrimitiveValueSymbol(symbolType)) {
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VALUE,
                args: [ctx.getSymbol().type, ctx.getText()]
            });
        }

        /* Is this a variable? */
        if (symbolType == Parser.LABEL) {
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VARIABLEREFERENCE,
                args: [ctx.getText()]
            });
        }

        /* If this is a type literal, logical operator or comparator operator, we should just
        return their symbol type (the number in the Parser) */
        if (PrimitiveType.isPrimitiveTypeSymbol(symbolType)
            || AnswerType.getInstance().isComparatorSymbol(symbolType)
            || AnswerType.getInstance().isLogicalOperatorSymbol(symbolType)
            || TypesRegistar.isValidArithmeticOperation(symbolType)
            || TypesRegistar.isValidUnaryOperation(symbolType)) {
            return symbolType;
        }

        debug("Could not resolve the terminal node as it's not a symobl.");
        return undefined;
    }

    /**
     * Executed when the program is being evaluated.
     * @param {ParsingContext} ctx The parsing context.
     * @description The invoking rule is:
        program
            : START_PROGRAM meanie_instruction? global_scope? END_PROGRAM
            ;
     */
    visitProgram(ctx) {
        /* Create the program node */
        const program = NodeFactory({
            ctx: this._createContext(ctx),
            type: ASTNodeType.PROGRAM
        });

        /* Do we have a meanie instruction? */
        let secondChild = ctx.getChild(1);
        let indexDiff = 0;
        if (secondChild && secondChild.ruleIndex && secondChild.ruleIndex === Parser.RULE_meanie_instruction) {
            program.isMeanie = true;
        } else {
            indexDiff = -1; // We didn't have an meanie instruction, so the global scope will be the 1st child instead of the 2nd.
        }

        /* Look for the global scope */
        if (ctx.getChild(2 + indexDiff) && !this._isSymbol(ctx.getChild(2 + indexDiff))) {
            program.globalScope = ctx.getChild(2 + indexDiff).accept(this);
            program.globalScope.scopeType = ScopeNode.prototype.ScopeType.GLOBAL; // Mark as the global scope
        }

        // console.log('The Global Scope:');
        // console.log(program.globalScope.toString());
        // process.exit(0);

        return program;
    }

    /**
     * Executed when a scope is being evaluated.
     * @param {ParsingContext} ctx The parsing context.
     * @description The invoking rule is:
     * <code>
            scope
            : statement+
            ;
     * </code>
     */
    visitScope(ctx) {
        /* Create the scope */
        let scope = NodeFactory({ ctx: this._createContext(ctx), type: ASTNodeType.SCOPE });

        /* Visit each children and convert it into an ast node */
        scope.statements = this.visitChildren(ctx);

        return scope;
    }

    /**
     * Executed when a declaration statement was supplied.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
        statement
            : comment
            | function_decl
            | declaration
            | condition_block
            | expression
            | for_block
            | while_block
            | return_statement
            ;

     * </code>
     */
    visitStatement(ctx) {
        return ctx.getChild(0).accept(this); // forward
    }

    /**
     * Executed when a declaration statement was supplied.
     * @param {ParsingContext} ctx The parsing context.
     * @return {Node} The result node.
     * @description The invoking rule is:
     * <code>
            declaration
            : VAR_DECL LABEL
            | VAR_DECL_ASSGN assignment_expression
            ;
     * </code>
     */
    visitDeclaration(ctx) {
        /* Is this a simple variable declaration or it has a value attached to it (initializer)? */
        if (ctx.getChild(0).getSymbol().type == Parser.VAR_DECL) {
            /* Simple variable decl */
            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VARIABLEDECLARATION,
                args: [ /* name: */ ctx.getChild(1).getText() ]
            });
        } else {
            /* Get the expr */
            let expr = ctx.getChild(1).accept(this);

            /* The lparam should be a the variable */
            if (!(expr.lparam instanceof VariableReferenceNode)) {
                const context = this._createContext(ctx);
                throw new UnexpectedSymbolError(this._getNodeFullText(context), context);
            }

            return NodeFactory({
                ctx: this._createContext(ctx),
                type: ASTNodeType.VARIABLEDECLARATION,
                args: [ /* name: */ expr.lparam.name, expr.rparam ]
            });
        }
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

        /* Get the data */
        const lparam = ctx.getChild(0).accept(this);
        const rparam = ctx.getChild(2).accept(this);

        return NodeFactory({
            ctx: this._createContext(ctx),
            type: ASTNodeType.ASSIGNMENT,
            args: [lparam, rparam]
        })
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
            |   relational_expression COMPARE_SMALLER relational_expression
            |   relational_expression COMPARE_GREATER relational_expression
            |   relational_expression COMPARE_SMALLER_EQUAL relational_expression
            |   relational_expression COMPARE_GREATER_EQUAL relational_expression
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

        /* We might have parentesis that takes another 1 space, so we need to skip on them */
        let expr = !this._isSymbol(ctx.getChild(1)) ? ctx.getChild(1) : ctx.getChild(2);
        let typeSpecifier = !this._isSymbol(ctx.getChild(3)) ? ctx.getChild(3) : ctx.getChild(4);

        /* Get the casted expression and the type symbol */
        expr = expr.accept(this);
        typeSpecifier = typeSpecifier.accept(this);
        
        return NodeFactory({
            ctx: this._createContext(ctx),
            type: ASTNodeType.CASTING,
            args: [expr, TypesRegistar.getFromTypeSymbol(typeSpecifier)]
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

        return NodeFactory({
            ctx: this._createContext(ctx),
            type: ASTNodeType.UNARYOPERATION,
            args: [ /* param: */ ctx.getChild(1).accept(this), /* op: */ ctx.getChild(0).accept(this)]
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
        /* An postfix expression MIGHT have a suffix operator.
        If it doesn't we should just move forward (to postfix). Otherwise, we need to aply it */
        if (ctx.children.length === 1) {
            // Forward
            return ctx.getChild(0).accept(this);
        }

        return NodeFactory({
            ctx: this._createContext(ctx),
            type: ASTNodeType.POSTFIXOPERATION,
            args: [ /* param: */ ctx.getChild(0).accept(this), /* op: */ ctx.getChild(1).accept(this)]
        });
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
        return ctx.getChild(0).accept(this);
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

    /*********************** Private Helpers ***********************/
    
    /**
     * Creates an {@see EvaluationContext} from the given parsing context.
     * @param {ParsingContext} ctx The parsing context.
     */
    _createContext(ctx) {
        let context = new ASTContext({
            codeLines: this.codeLines 
        });

        if (this._isSymbol(ctx)) {
            let symb = ctx.getSymbol();
            context.line = symb.line;
            context.column = symb.column;
            context.start = symb.start;
            context.stop = symb.stop;
            context.symbol = symb.type;
            context.content = symb.text;
            context.tokenIndex = symb.tokenIndex;
        } else {
            context.line = ctx.start.line;
            context.column = typeof(ctx.start.column) == 'number' ? ctx.start.column : ctx.start.start.column;
            context.start = typeof(ctx.start.start) == 'number' ? ctx.start.start : ctx.start.start.start;
            context.stop = typeof(ctx.start.stop) == 'number' ? ctx.start.stop : ctx.start.stop.stop;
            context.rule = ctx.ruleIndex;
            context.tokenIndex = ctx.start.tokenIndex;
            context.content = ctx.getText();
        }

        return context;
    }

    /**
     * Get the full padded text used in a given ctx.
     * @param {ParsingContext} ctx 
     */
    _getNodeFullText(ctx) {
        const context = (ctx instanceof ASTContext) ? ctx : this._createContext(ctx);
        const line = this.codeLines[context.line - 1];
        return line.substring(context.column, context.stop);
    }

    /**
     * Determines if the given parsing context node is a symobl node (a.k.a., label, variable, parentesis, plus, minus etc.).
     * @param {ParsingContext} ctx The parsing context.
     * @return True if it's a symbol, false otherwise.
     */
    _isSymbol(ctx) {
        return ctx && typeof(ctx.getSymbol) !== 'undefined';
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
                type: ASTNodeType.ARITHMETICOPERATION,
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
            type: ASTNodeType.CONDITIONALEXPRESSION,
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
            type: ASTNodeType.CONDITION,
            args: [lexpr, op, rexpr]
        });
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

    _getAllMethods(object,everything) {
        var methods = [];
        for (var m in object) {
            if (everything===true||typeof object[m] == "function") {
                methods.push(m);
            }
        }
        return methods;
    }
};