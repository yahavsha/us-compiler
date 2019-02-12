const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');

module.exports = class VariableNode extends Node {
    constructor(name, value) {
        super();
        
        this.name = name;
        this.value = value;
    }

    static getType() {
        return NodeType.VARIABLE;
    }
    
    eval() {
        return this.value.eval();
    }
}