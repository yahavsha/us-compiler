const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');

module.exports = class VariableNode extends Node {
    constructor(ctx, name, value) {
        super(ctx);

        if (!(value instanceof Node)) {
            throw new Error('VariableNode expects to get a Node as a value.');
        }
        
        this.name = name;
        this.value = value;
    }

    getType() {
        return NodeType.VARIABLE;
    }

    toString() {
        return `VariableNode(name = "${this.name}", value = ${this.value} )`
    }
    
    eval() {
        return this.value.eval();
    }
}