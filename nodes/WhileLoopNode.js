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
        /* Surround by a try-catch for infinite loop handling */
        try {
            /* Setup the initial check */
            let result = this.condition;
            if (!(result instanceof ValueNode)) {
                result = result.eval(); // If we write if(true) we'll have  just a ValueNode. we also might have if (1) etc. For other cases, we'll evaluate the node
            }

            let iter = 1;
            while (result.eval() === true && ++iter < this.context.visitor.options.maxIterations) {
                /* Evaluate the loop iteration */
                this.body.eval();
                
                /* Evaluate the condition again.
                We need to do it every time as the ValueNode will have the condition value for
                a specific iteration, and we want to check the updated condition. */
                result = this.condition;
                if (!(result instanceof ValueNode)) {
                    result = result.eval(); // If we write if(true) we'll have  just a ValueNode. we also might have if (1) etc. For other cases, we'll evaluate the node
                }
            }

            /* Did we stopped because we exceeded the max iterations? */
            if (this.context.visitor.options.maxIterations < iter) {
                const { StackOverflowError } = require('../interperter/CompilationErrors');
                throw new StackOverflowError(this.context.parsingContext);
            }
        } catch (e) {
            /* Is this an infinite loop? */
            if (e instanceof RangeError) {
                const { StackOverflowError } = require('../interperter/CompilationErrors');
                throw new StackOverflowError(this.context.parsingContext);
            }

            throw e; // Forward
        }

        return ValueNode.NULL;
    }
};