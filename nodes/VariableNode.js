const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');

module.exports = class VariableNode extends Node {
    constructor(ctx, name) {
        super(ctx);

        this.name = name;
    }

    getType() {
        return NodeType.VARIABLE;
    }

    toString() {
        return `VariableNode(name = "${this.name}" )`;
    }
    
    eval() {
        let storedValue = this.context.visitor.symTable.find(this.name) || ValueNode.NULL;
        if (!(storedValue instanceof ValueNode)) {
            // If this is not a ValueNode, but another node (like ArithmeticOperationNode), evaluate it as well
            return storedValue.eval();
        }

        // That's a ValueNode, good! good!!
        return storedValue;
    }
}