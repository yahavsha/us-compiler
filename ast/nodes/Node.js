/**
 * Defines the available node types.
 */
module.exports.ASTNodeType = {
    UNKNOWN:                        -1,
    PROGRAM:                        0,
    SCOPE:                          1,
    VARIABLEDECLARATION:                        2,
    ASSIGNMENT:                        3,
    VALUE:                        4,
    ARITHMETICOPERATION:                        5,
    UNARYOPERATION:                        6,
    POSTFIXOPERATION:                        7,
    VARIABLEREFERENCE:                        8,
    CONDITION:                        9,
    CASTING:                        10,
    CONDITIONALEXPRESSION:                        11,
    IFSTATEMENT:                        12,
    FORLOOP:                        13,
    WHILELOOP:                        14,
    FUNCTIONDECLARATION:                        15,
    FUNCTIONCALL:                        16,
    RETURNSTATEMENT:                        17,
};

/**
 * Defines a general AST node.
 */
class ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx) {
        this.context = ctx;
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return NodeType.UNKNOWN;
    }

    /**
     * Gets the pointer to the NodeFactory function.
     * Why do we need it? because there's a circular dependency between NodeFactory and these classes which might
     * want ot call it as well (e.g. Arithmetic Operation creates a Value Node).
     */
    static getNodeFactory() {
        if (!ASTNode._nodesFactory) {
            ASTNode._nodesFactory = require('.').NodeFactory;
        }
        return ASTNode._nodesFactory;
    }
}

ASTNode._nodesFactory = undefined;

module.exports.ASTNode = ASTNode;