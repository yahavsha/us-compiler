/* Get the required dependencies */
const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');
const Parser = require('../ast/usParser').usParser;
const symbolToTypeName = require('../utils/TypesResolver').symbolToTypeName;
const { InvalidCastError, FormatError } = require('../interperter/CompilationErrors');
                
/* Define the casting node */
module.exports = class CastingNode extends Node {
    constructor(ctx, value, toType) {
        super(ctx);

        if (!(value instanceof Node)) {
            throw new Error('CastingNode expects to get a Node.');
        }
        
        this.value = value;
        this.toType = toType;
    }

    static getType() {
        return NodeType.CASTING;
    }
    
    toString() {
        return `CastingNode { to = ${symbolToTypeName(this.toType)}, value = ${this.value} }`;
    }
    
    eval() {
        /* Get the actual ValueNode after all of the computations */
        let node = this.value;
        if (!(node instanceof ValueNode)) {
            node = node.eval();
        }

        /* What is the type we're casting into? */
        switch (this.toType) {
            case Parser.TSTRING:
                return this._castToString(node);
            case Parser.TNUMBER:
                return this._castToNumber(node);
            case Parser.TBOOLEAN:
                return this._castToBoolean(node);
            default:
                throw new InvalidCastError(this.context.parsingContext, node.type, this.toType);
        }
        return node;
    }

    _castToString(node) {
        /* Casting to string is simple, just get the JS value and stringify it */
        let value = node.eval();
        return Node.getNodeFactory()({
            ctx: this.context,
            type: NodeType.VALUE,
            args: [Parser.STRING, String(value)]
        });
    }

    _castToNumber(node) {
        /* We need to try to parse this into a number */
        let numberedValue = Number(node.eval());
    
        if (isNaN(numberedValue)) {
            throw new FormatError(
                this.context.parsingContext,
                `Could not cast ${this.value} into a ${symbolToTypeName(this.toType)}. The given value format is incorrect.`);
        }

        /* Create the node */
        return Node.getNodeFactory()({
            ctx: this.context,
            type: NodeType.VALUE,
            args: [Parser.NUMBER, numberedValue]
        });
    }

    _castToBoolean(node) {
        const value = Boolean(node.eval());

        return Node.getNodeFactory()({
            ctx: this.context,
            type: NodeType.VALUE,
            args: [value ? Parser.TRUE : Parser.FALSE, value]
        });
    }
}