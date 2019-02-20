const assert = require('assert');
const antlr4 = require('antlr4');
const Lexer = require("../lib/usLexer");
const Parser = require("../lib/usParser");

class ASTHelpers {
    /**
     * Define a nice helper that takes a code and return the generated AST.
     * @param {string} input The code.
     */
    static parse(input) {
        /* Load the required vars */
        const lexer = new Lexer.usLexer(new antlr4.InputStream(input));
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new Parser.usParser(tokens);
        parser.buildParseTrees = true;

        /* Creates an AST */
        const cst = parser.program();

        /* If there're syntax error(s), stop here */
        if (parser._syntaxErrors > 0) {
            return false;
        }

        /* Evaluate the code by using our evaluation visitors */
        const ParseTreeToASTVisitor = require('../ast/ParseTreeToASTVisitor');
        const cstVisitor = new ParseTreeToASTVisitor(this.options, this.globalVariables);
        
        /* Parse */
        const program = cstVisitor.start(cst);

        /* Make sure it's a program node */
        const { ProgramNode } = require('../ast/nodes');
        assert.ok(program instanceof ProgramNode);
        return program;
    }

    /**
     * Define a nice helper that takes a code and return the generated AST global scope.
     * @param {string} input The code.
     */
    static parseGlobalScope(input) {
        const program = ASTHelpers.parse(input);

        const { ScopeNode } = require('../ast/nodes');
        assert.ok(program.globalScope instanceof ScopeNode);
        
        return program.globalScope;
    }
}


describe('ASTVisitor', function() {
    it('Should always have a ProgramNode', () => {
        ASTHelpers.parse(`
hey!
byes
        `);
    });

    it('Set meanie program', () => {
        const ast1 = ASTHelpers.parse(`
hey!
byes
        `);

        assert.ok(!ast1.isMeanie);

        const ast2 = ASTHelpers.parse(`
hey!
        is meanie
byes
        `);
        assert.ok(ast2.isMeanie);
    });

    it('Should declare a variable', () => {
        const { VariableDeclarationNode } = require('../ast/nodes');
        const scope = ASTHelpers.parseGlobalScope(`
hey!
        sup chocolate
byes
        `);

        /* Check if we got a variable decl */
        assert.ok(scope.statements[0] instanceof VariableDeclarationNode);
        assert.equal(scope.statements[0].name, 'chocolate');
    });

    it('Should declare a variable with value', () => {
        const { AssignmentNode, VariableReferenceNode, ValueNode } = require('../ast/nodes');
        const scope = ASTHelpers.parseGlobalScope(`
hey!
        chocolate is 2
byes
        `);

        /* Check if we got a variable decl */
        assert.ok(scope.statements[0] instanceof AssignmentNode);
        assert.ok(scope.statements[0].lparam instanceof VariableReferenceNode);
        assert.ok(scope.statements[0].rparam instanceof ValueNode);
        assert.equal(scope.statements[0].lparam.name, 'chocolate');
        assert.equal(scope.statements[0].rparam.value, 'chocolate');
    });
});