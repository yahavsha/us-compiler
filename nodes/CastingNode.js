/* Get the required dependencies */
const { Node, NodeType } = require('./Node');
const ValueNode = require('./ValueNode');
const { castValue, symbolToTypeName } = require('../utils/TypesResolver');

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
        return castValue(this.value, this.toType, this.context);
    }
}