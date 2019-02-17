/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/
 
 /* Access to nodes */
 const { Node, NodeType } = require('./Node');
 const ValueNode = require('./ValueNode');

/*****************************************************************************
 * The code block class
 *****************************************************************************/

module.exports = class IfStatementNode extends Node {
    /**
     * Instantiate a new if statement block.
     * @param {ParsingContext} ctx The parsing contex.
     * @param {ConditionNode} condition The condition to evaluate.
     * @param {CodeBlockNode} ifTrueCode The code block node that points to the code that should be execute in case the condition yields true.
     * @param {CodeBlockNode} ifFalseCode The code block node that points to the code that should be execute in case the condition yields false.
     */
    constructor(ctx, condition, ifTrueCode, ifFalseCode) {
        super(ctx);
        
        this.condition = condition;
        this.ifTrueCode = ifTrueCode;
        this.ifFalseCode = ifFalseCode;
    }

    /**
     * Gets the node type.
     */
    getType() {
        return NodeType.IF_STATEMENT;
    }

    toString() {
        return `IfStatementNode( condition = ${this.condition}, ifTrue = ${this.ifTrueCode}, ifFalse = ${this.ifFalseCode} )`;
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
            this.ifTrueCode.eval();
        } else {
            if (typeof(this.ifFalseCode) !== 'undefined') {
                this.ifFalseCode.eval();
            }
        }
    }
};