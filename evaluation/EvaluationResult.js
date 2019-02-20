/*****************************************************************************
 * Define the evaluation result structure. It'll give us handy info
 *****************************************************************************/

 /**
  * Defines a class that stores the evaluation results and allow to access some of its values.
  */
module.exports = class EvaluationResult {
    constructor(options = {
        symTable,
        isMeanie
    } = {}) {
        this.symTable = options.symTable;
        this.isMeanie = options.isMeanie;
    }

    getGlobalVariable(key) {
        let result = this.symTable.find(key);
        return createJSValue(result.type, result.value);
    }
}
