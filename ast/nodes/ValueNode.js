
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

 const Parser = require('../../lib/usParser').usParser;
const { ASTNodeType, ASTNode } = require('./Node');
const { NullType, PrimitiveType } = require('../../types');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines a primitive value node class.
 */
module.exports = class ValueNode extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {int} type The type symbol.
     * @param {String} value The value.
     */
    constructor(ctx, type, value) {
        super(ctx);

        if (arguments.length === 0) {
            this.type = NullType.getInstance();
            this.value = NullType.createValue('');
        } else {
            this.type = PrimitiveType.findFromSymbol(type);
            this.value = this.type.createValue(value);
        }
    }

    static get Null() {
        return new ValueNode();
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.VALUE;
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visitValue(ASTNode node)
     */
    accept(visitor) {
        return visitor.visitValue(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `ValueNode { type = "${this.type.name}", value = "${this.value}" }`;
    }
}