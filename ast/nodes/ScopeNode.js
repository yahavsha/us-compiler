
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the node class.
 */
class ScopeNode extends ASTNode {
    /**
     * Instantiate a new scope node instance.
     * @param {ParsingContext} ctx The parsing context.
     * @param {ScopeType} scopeType The scope type.
     */
    constructor(ctx, scopeType) {
        super(ctx);

        if (typeof(scopeType) === 'undefined') {
            scopeType = ScopeNode.prototype.ScopeType.LOCAL;
        }

        this.statements = [];
        this.scopeType = scopeType;
    }

    /**
     * Adds a new statement to the AST.
     * @param {ASTNode} stmt The statement to add.
     */
    addStatement(stmt) {
        if (!(stmt instanceof ASTNode)) {
            throw new Error('The given statement must inherit ASTNode');
        }

        this.statements.push(stmt);
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTNode.visitProgram(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visitScope(this);
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.SCOPE;
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return `ScopeNode { ${this.statements} }`;
    }
}

ScopeNode.prototype.ScopeType = {
    LOCAL:              0,
    GLOBAL:             1,
    FUNCTION:           2
};

module.exports = ScopeNode;