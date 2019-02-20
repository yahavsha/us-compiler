/**
 * This is the nodes module.
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
 * @module ast/nodes
 * @requires ast
 * @requires antlr4
 * @author Yahav S.
 */


/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNode, ASTNodeType } = require('./Node');
const fs = require('fs');
const path = require('path');
const debug = require('debug')('us:ast:nodes');

/*****************************************************************************
 * Gets our nodes implementations
 *****************************************************************************/

/* Read the directory classes */
const result = fs.readdirSync(__dirname);
NODE_CLASSES = new Map();
for (let fileName of result) {
    /* Get the class name. This will extract eacb iff (iff = if and only if) it has Node
    in it's name, but it's not the only class name (a.k.a, Node.js excluded).
    If it does find it, it removes the ".js" from the file name.
    Thus, if the className != fileName => we got a valid node class. index.js, for example, doesn't have
    a Node in it's name, so it won't get touched. */
    const className = fileName.replace(/([a-z0-9_]+Node).js/g, '$1');
    if (fileName === className) {
        continue;
    }

    /* Load the ndoe */
    const NodeClass = require(path.join(__dirname, fileName));
    if (!(NodeClass.prototype instanceof ASTNode)) {
        throw new Error(`The AST Node class ${className} (location: ${path.join(__dirname, fileName)}) does not extends ASTNode.`);
    }

    /* Register */
    NODE_CLASSES.set(NodeClass.getNodeType(), NodeClass);
    
    /* Export */
    module.exports[className] = NodeClass;
}


/*****************************************************************************
 * API
 *****************************************************************************/

/**
 * Instantiate a new {@see Node} from the given node type and arguments.
 * @param {object} options The creation options. They requrie a type (the node type) & args (The ctor args).
 * @return {Node} The instantiated node.
 * 
 * @see https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1 (for this Factory style implementation in ES6).
 */
function NodeFactory(options = {
    ctx: undefined,
    type: ASTNodeType.UNKNOWN,
    args: []
} = {}) {
    if (!options.ctx) {
        throw new Error('Can not create a node without a ParsingContext.');
    }

    if (!options.args) {
        options.args = [];
    }

    /* Add the context to the args first entry */
    options.args.unshift(options.ctx);

    /* Attempt to find the requested node type */
    const NodeClass = NODE_CLASSES.get(options.type);
    if (!NodeClass) {
        throw new Error(`A node class that coresponds to the type ${options.type} could not be found.`);
    }

    return new NodeClass(... options.args);
}

/*****************************************************************************
 * Export 'hem!
 *****************************************************************************/

module.exports.NodeFactory = NodeFactory;
module.exports.ASTNode = ASTNode;
module.exports.ASTNodeType = ASTNodeType;