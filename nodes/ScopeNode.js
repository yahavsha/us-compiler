const { Node, NodeType } = require('./Node');

module.exports = class ScopeNode extends Node {
    constructor(ctx) {
        super(ctx);
    }

    static getType() {
        return NodeType.SCOPE;
    }
    
    eval() {
        console.log('Evaluating Code Block');
    }
}