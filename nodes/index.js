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

/**
 * Instantiate a new {@see Node} from the given node type and arguments.
 * @param {NodeType} nodeType The node type
 * @param {*} args A list of arguments that'll get sent to the node ctor.
 * @return {Node} The instantiated node.
 */
function NodeFactory(nodeType) {
    /* The rest of the arguments are ctor params,
    so remove the nodeType from here */
    args = Object.values(arguments);
    args.shift();

    /* Resolve */
    switch (nodeType) {
        case NodeType.VALUE:
            return new ValueNode(... args);
        case NodeType.VARIABLE:
            return new VariableNode(... args);
    }
}

module.exports = {
    NodeFactory,
    Node,
    NodeType,
    ValueNode,
    VariableNode
};