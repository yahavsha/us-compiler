
/**
 * Defines a context for the evaluation process.
 * This context is being used to track data while evaluating the AST, such as acesssing the symbols table, the functions table etc.
 */
module.exports = class EvaluationContext {
    /**
     * Initialize the Evaluation Context
     * @param {ParsingContext} parsingContext 
     * @param {SymbolTable} symbolsTable 
     */
    constructor(parsingContext, symbolsTable) {
        this.parsingContext = parsingContext;
        this.symbolsTable = symbolsTable;
    }
};