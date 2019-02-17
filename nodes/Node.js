module.exports.NodeType = {
    UNKNOWN:                -1,
    SCOPE:                  1,
    VALUE:                  2,
    VARIABLE:               3,
    ARITHMETIC_OPERATION:   4,
    CASTING:                5,
    CONDITION_EXPR:         6,
    CONDITION:              7,
    IF_STATEMENT:           8
};

class Node {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing contex.t
     */
    constructor(ctx) {
        if (!ctx) {
            throw new Error('Can not instantiate a node without the its ParsingContext.');
        }

        this.context = ctx;
    }

    /**
     * Gets the node type.
     */
    getType() {
        return NodeType.UNKNOWN;
    }
    
    /**
     * Evaluates the node and get a ValueNode from it. Only ValueNode actually returns the ES6 value.
     */
    eval() {
        throw new Error("Not implemented.");
    }

    /**
     * Gets the pointer to the NodeFactory function.
     * Why do we need it? because there's a circular dependency between NodeFactory and these classes which might
     * want ot call it as well (e.g. Arithmetic Operation creates a Value Node).
     */
    static getNodeFactory() {
        if (!Node._nodesFactory) {
            Node._nodesFactory = require('../nodes').NodeFactory;
        }
        return Node._nodesFactory;
    }
}

Node._nodesFactory = undefined;

module.exports.Node = Node;