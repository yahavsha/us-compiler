const { Node, NodeType } = require('./Node');

const {
    symbolToTypeName,
    createJSValue
} = require('../utils/TypesResolver');

module.exports = class ValueNode extends Node {
    constructor(type, value) {
        super();

        this.type = type;
        this.value = createJSValue(type, value);
    }
    
    static getType() {
        return NodeType.VALUE;
    }

    toString() {
        return `${symbolToTypeName(this.type)}(${this.value})`;
    }
    
    eval() {
        return this.value;
    }
}