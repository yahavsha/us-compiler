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
    
    getType() {
        return NodeType.VALUE;
    }

    static get NULL() {
        return new ValueNode({}, Parser.NULL, null);
    }

    static get TRUE() {
        return new ValueNode({}, Parser.TRUE, true);
    }

    static get FALSE() {
        return new ValueNode({}, Parser.FALSE, false);
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