/*****************************************************************************
 * Load data
 *****************************************************************************/

const { TypeValue, TypesRegistar } = require('../types');
const { ASTNodeType, NodeFactory } = require('../ast/nodes');

 /*****************************************************************************
 * Define the evaluation result structure. It'll give us handy info
 *****************************************************************************/

 /**
  * Defines a class that stores the evaluation results and allow to access some of its values.
  */
module.exports = class EvaluationResult {
    /**
     * Defines a new evaluation result object.
     * @param {*} options 
     */
    constructor(visitor) {
        this._visitor = visitor;
        this._symbolsTable = visitor._symbolsTable;
        this._isMeanie = visitor._isMeanie;
    }

    /**
     * Gets a global variable that's being defined at the program.
     * @return {*}
     */
    getGlobalVariable(key) {
        let result = this._symbolsTable.find(key);
        return createJSValue(result.type, result.value);
    }

    /**
     * Gets a global variable in its raw (TypeValue) from that's being defined at the program.
     * @return {TypeValue}
     */
    getRawGlobalVariable(key) {
        return this._symbolsTable.find(key);
    }

    /**
     * Invokes a user function.
     * @param {*} name The function name.
     * @param {*} args The arguments that's being sent to the function.
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

        console.log(result);
    }
}
