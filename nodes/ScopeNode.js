/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/
 
 /* Access to nodes */
 const { Node, NodeType } = require('./Node');

/*****************************************************************************
 * The code block class
 *****************************************************************************/

module.exports = class ScopeNode extends Node {
    /**
     * Instantiate a new code block (scope) instance.
     * @param {ParsingContext} ctx The parsing contex.
     * @param {ParsingContext} statementsContext The parsing context of the statements that we should execute.
     * @param {USVisitor} visitor The visitor that should be used to evaluate the statements.
     */
    constructor(ctx, statementsContext, visitor) {
        super(ctx);
        
        this.statements = statementsContext;
        this.visitor = visitor;
    }

    /**
     * Gets the node type.
     */
    getType() {
        return NodeType.SCOPE;
    }

    toString() {
        return `ScopeNode { ... }`;
    }
    
    /**
     * Evaluates the node and get a ValueNode from it. Only ValueNode actually returns the ES6 value.
     */
    eval() {
        this.context.symbolsTable.enterScope();

        let result = this.statements.accept(this.visitor);

        this.context.symbolsTable.exitScope();

        return result;
    }
};