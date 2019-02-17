
/**
 * Defines a context for the evaluation process.
 * This context is being used to track data while evaluating the AST, such as acesssing the symbols table, the functions table etc.
 */
module.exports = class EvaluationContext {
    /**
     * Initialize the Evaluation Context
     * @param {ParsingContext} parsingContext 
     * @param {USVisitor} visitor 
     */
    constructor(parsingContext, visitor) {
        this.parsingContext = parsingContext;
        this.visitor = visitor;
    }
};