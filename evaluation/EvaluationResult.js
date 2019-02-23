/*****************************************************************************
 * Load data
 *****************************************************************************/

const { TypeValue, TypesRegistar } = require('../types');
const { ASTNodeType, NodeFactory } = require('../ast/nodes');

const {
    VariableSymbol,
    FunctionSymbol
} = require('./symbols');

 /*****************************************************************************
 * Define the evaluation result structure. It'll give us handy info
 *****************************************************************************/

 /**
  * Defines a class that stores the evaluation results and allow to access some of its values.
  * 
  * Implementation note: Yes. We access private visitor variables. That should've been a nested class if it'd be a normal language lol.
  */
module.exports = class EvaluationResult {
    /**
     * Defines a new evaluation result object.
     * @param {EvaluationVisitor} visitor The evaluation visitor. 
     */
    constructor(visitor) {
        this._visitor = visitor;
    }

    /**
     * Gets a boolean value that determine if the program were in meanie mode.
     */
    getIsMeanie() {
        return this._visitor._isMeanie;
    }

    /**
     * Checks if a global variable was declared.
     * @param {string} name The variable name.
     * @return {boolean}
     */
    hasGlobalVariable(name) {
        let symbol = this._visitor._doSymbolLookup(name);
        if (symbol) {
            return symbol instanceof VariableSymbol;
        }

        return false;
    }

    /**
     * Gets a global variable that's being defined at the program.
     * @param {string} name The variable name.
     * @return {*}
     */
    getGlobalVariable(name) {
        let symbol = this._visitor._doSymbolLookup(name);
        if (symbol && symbol instanceof VariableSymbol) {
            return symbol.value.value;
        }

        throw new Error(`Could not get the variable "${name}"`);
    }

    /**
     * Gets a global variable in its raw (TypeValue) from that's being defined at the program.
     * @param {string} name The variable name.
     * @return {TypeValue}
     */
    getRawGlobalVariable(key) {
        let symbol = this._visitor._doSymbolLookup(name);
        if (symbol && symbol instanceof VariableSymbol) {
            return symbol.value;
        }

        throw new Error(`Could not get the variable "${name}"`);
    }

    /**
     * Checks whether or not a user function was declared.
     * @param {string} name The function name.
     */
    hasUserFunction(name) {
        let symbol = this._visitor._doSymbolLookup(name);
        if (symbol) {
            if (symbol instanceof FunctionSymbol) {
                return symbol.isUserFunction();
            }
        }

        return false;
    }

    /**
     * Invokes a user function.
     * @param {string} name The function name.
     * @param {array} args The arguments that's being sent to the function.
     */
    async invokeUserFunction(name, args) {
        /* Create an array of ValueNode from the given array of arguments. The
        general idea is to simulate the AST parsed from a code, and then evaluate it
        just like it'd be a written code. */
        let astArgs = [];
        for (let arg of args) {
            /* Creates a new AST ValueNode */
            let argNode = NodeFactory({
                ctx: { },
                type: ASTNodeType.VALUE
            });

            if (!(arg instanceof TypeValue)) {
                arg = TypesRegistar.createValue(arg);
            }

            argNode.value = arg.value;
            argNode.type = arg.type;
            astArgs.push(argNode);
        }

        /* Now create a function call node */
        let invocationNode = NodeFactory({
            ctx: { },
            type: ASTNodeType.FUNCTIONCALL,
            args: [name, astArgs]
        });

        /* Visit it */
        let result = await this._visitor.visitFunctionCall(invocationNode);
        return result;
    }
}
