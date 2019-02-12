module.exports.NodeType = {
    UNKNOWN: -1,
    VALUE: 1,
    VARIABLE: 2,

};

module.exports.Node = class Node {
    getType() {
        return NodeTypes.UNKNOWN;
    }
    
    eval() {
        throw new Error("Not implemented.");
    }
}