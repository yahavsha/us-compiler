const Parser = require('../ast/usParser').usParser;
const { Node, NodeType } = require('./Node');

const {
    symbolToTypeName,
    createJSValue
} = require('../utils/TypesResolver');

module.exports = class ValueNode extends Node {
    constructor(ctx, type, value) {
        super(ctx);

        this.type = type;
        this.value = createJSValue(type, value);
    }
    
    static getType() {
        return NodeType.VALUE;
    }

    static get NULL() {
        return new ValueNode({}, Parser.NULL, null);
    }

    toString() {
        if (this.type === Parser.NULL) {
            return symbolToTypeName(this.type);
        }
        
        return `${symbolToTypeName(this.type)}(${this.value})`;
    }
    
    eval() {
        return this.value;
    }
}