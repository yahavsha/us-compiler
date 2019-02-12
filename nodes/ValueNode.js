const { Node, NodeType } = require('./Node');

const {
    symbolToTypeName
} = require('../utils/TypesResolver');

module.exports = class ValueNode extends Node {
    constructor(type, value) {
        super();

        this.type = type;
        this.value = value;
    }
    
    static getType() {
        return NodeType.VALUE;
    }

    toString() {
        return `{ type = ${symbolToTypeName(this.type)}, value = ${this.value} }`;
    }
    
    eval() {
        return this.value;
    }
}