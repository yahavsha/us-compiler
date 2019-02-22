
/**
 * Describes a native ES6 (JavaScriopt) callback that's being exposed to the interperter.
 */
module.exports = class NativeFunctionDeclaration {
    /**
     * Constructs a new declaration of a JavaScript function that's being exposed to the US interperter.
     * @param {string} name The function name.
     * @param {*} args The function argument names.
     * @param {*} callback The actual JavaScript callback which'll get fired.
     * @param {*} sendTypeValue Set to true to get {@see TypeValue} instead of native JS values.
     */
    constructor(options = {
        name: '',                   // The function name
        args: -1,                   // The function arguments count (if -1 then no argument count checking will performed, good for no limits args functions)
        pointer: undefined,         // The actual function callback
        sendTypeValue: false,       // Should we pass a raw TypeValue values (= true) or a JavaScript value (= false)
    }) {
        this.name = options.name;
        this.args = options.args;
        this.pointer = options.pointer;
        this.sendTypeValues = options.sendTypeValue;
    }
};