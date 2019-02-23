/**
 * The US Interperter.
 * 
 * @requires antlr4
 * @author Yahav S.
 */

/*****************************************************************************
 *  Return the main classes
 *****************************************************************************/

/* Interperter */
const Interperter = require('./interperter');
const { CompilationError, SyntaxError, SemanticError, NativeFunctionError } = require('./interperter/CompilationErrors');
const InterperterOptions = require('./interperter/InterperterOptions');

/* Evaluation */
const NativeFunctionDeclaration = require('./evaluation/NativeFunctionDeclaration');
const EvaluationResult = require('./evaluation/EvaluationResult');

/* Types */
const { TypeValue, TypesRegistar } = require('./types');

/** EXPORT **/
module.exports = {
    // Interperter
    Interperter,
    CompilationError,
    SyntaxError,
    SemanticError,
    InterperterOptions,
    NativeFunctionError,
    
    // Evaluation
    NativeFunctionDeclaration,
    EvaluationResult,

    // Types
    TypeValue,
    TypesRegistar
};