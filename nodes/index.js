/**
 * This is the evaluation nodes module.
 * This module defines a node for each part of the semantical tree.
 * Each node has the ability to evaluate itself.
 * For example:
 * 
 * <code>
 * hey!
 *  sup chocolate
 *  chocolate is "Lo" + "ve ᕙ( * •̀ ᗜ •́ * )ᕗ"
 * byes
 * </code>
 * - ProgramNode:
 * -- VariableNode { name = chocolate, value = null }
 * -- AssignementNode {
 *      variable = VariableNode { name = chocolate ... },
 *      value = ArithmeticNode {
 *          op = "+",
 *          lparam = ValueNode { "Lo" }
 *          rparam = ValueNode { "ve ᕙ( * •̀ ᗜ •́ * )ᕗ" }
 *      }
 * }
 * 
 * @module interperter
 * @requires ast
 * @requires antlr4
 * @author Yahav S.
 */


const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');
const VariableNode = require('./VariableNode');
const ArithmeticOperationNode = require('./ArithmeticOperationNode');
const CastingNode = require('./CastingNode');
const ConditionalExpressionNode = require('./ConditionalExpressionNode');
const ConditionNode = require('./ConditionNode');

/**
 * Instantiate a new {@see Node} from the given node type and arguments.
 * @param {object} options The creation options. They requrie a type (the node type) & args (The ctor args).
 * @return {Node} The instantiated node.
 * 
 * @see https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 (for this Factory style implementation in ES6).
 */
function NodeFactory(options = {
    ctx: undefined,
    type: NodeType.UNKNOWN,
    args: []
} = {}) {
    if (!options.ctx) {
        throw new Error('Can not create a node without a ParsingContext.');
    }

    const EvaluationContext = require('../interperter/EvaluationContext');
    if (!(options.ctx instanceof EvaluationContext)) {
        throw new Error('Not EvaluationContext');
    }

    /* Add the context to the args first entry */
    options.args.unshift(options.ctx);

    /* Resolve */
    /* @TODO transfer into a map... I hate to use switches... */
    switch (options.type) {
        case NodeType.VALUE:
            return new ValueNode(... options.args);
        case NodeType.VARIABLE:
            return new VariableNode(... options.args);
        case NodeType.ARITHMETIC_OPERATION:
            return new ArithmeticOperationNode(... options.args);
        case NodeType.CASTING:
            return new CastingNode(... options.args);
        case NodeType.CONDITION_EXPR:
            return new ConditionalExpressionNode(... options.args);
        case NodeType.CONDITION:
            return new ConditionNode(... options.args);
        default:
            throw new Error("NodeFactory: Unknown node type requested: " + options.type);
    }
}

module.exports = {
    NodeFactory,
    Node,
    NodeType,
    ValueNode,
    VariableNode,
    ArithmeticOperationNode,
    CastingNode
};