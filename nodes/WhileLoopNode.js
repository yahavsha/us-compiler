/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/
 
 /* Access to nodes */
 const { Node, NodeType } = require('./Node');
 const ValueNode = require('./ValueNode');

/*****************************************************************************
 * The while loop node class
 *****************************************************************************/

module.exports = class WhileLoopNode extends Node {
    /**
     * Instantiate a new while loop block node.
     * @param {ParsingContext} ctx The parsing contex.
     * @param {ConditionNode} condition The condition to evaluate.
     * @param {CodeBlockNode} body The code scope to execute as the loop body.
     */
    constructor(ctx, condition, body) {
        super(ctx);
        
        this.condition = condition;
        this.body = body;
    }

    /**
     * Gets the node type.
     */
    getType() {
        return NodeType.WHILE_LOOP;
    }

    toString() {
        return `WhileLoopNode( condition = ${this.condition}, body = ${this.body} )`;
    }
    
    /**
     * Evaluates the node and get a ValueNode from it. Only ValueNode actually returns the ES6 value.
     */
    eval() {
        /* Evaluate the condition */
        let result = this.condition;
        if (!(result instanceof ValueNode)) {
            result = result.eval(); // If we write if(true) we'll have  just a ValueNode. we also might have if (1) etc. For other cases, we'll evaluate the node
        }
        
        if (result.eval() === true) {
            return this.body.eval();
        }
        
        return ValueNode.NULL;
    }
};