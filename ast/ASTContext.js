/**
 * Defines a general parsing context that's being saved in each AST Node (and accessible to ASTVisitor).
 * This context contains relevant information to keep track with the parsing process.
 */
module.exports = class ASTContext {
    constructor(options = {
        line: -1,
        column: -1,
        start: -1,
        stop: -1,
        tokenIndex: -1,
        content: '',
        symbol: false,
        rule: false,
        codeLines: []
    }) {
        this.line = options.line;
        this.column = options.column;
        this.start = options.start;
        this.stop = options.stop;
        this.content = options.content;
        this.symbol = options.symbol;
        this.rule = options.rule;
        this.tokenIndex = options.tokenIndex;
        this.codeLines = options.codeLines;
    }
};