const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');


module.exports = class CastingNode extends Node {
    constructor(ctx, value, toType) {
        super(ctx);

        if (!(value instanceof Node)) {
            console.log(value);
            throw new Error('CastingNode expects to get a Node.');
        }
        
        this.value = value;
        this.toType = toType;
    }

    static getType() {
        return NodeType.CASTING;
    }
    
    eval() {
        return this.value;
    }
}