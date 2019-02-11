const errorTypes = {
    "syntax": {
        "generic": {
            "message": "Something went wrong"
        }
    },
    "semantic": {
        "argumentCountMismatch": {
            "message": "Argument count mismatch"
        }
    }
};
const errors = {};

Object.keys(errorTypes).forEach(group => {
    Object.keys(errorTypes[group]).forEach(definition => {
        // Creates a Pascal Case eror name with the "Error" suffix
        const name = [
            group[0].toUpperCase(),
            group.slice(1),
            definition[0].toUpperCase(),
            definition.slice(1),
            'Error'
        ].join('');
        
        /* Creates the error information */
        const code = `E_${group.toUpperCase()}_${definition.toUpperCase()}`;
        const message = errorTypes[group][definition].message;

        errors[name] = class extends Error {
            constructor(payload) {
                super(payload);

                this.code = code;
                this.message = message;

                if (typeof(payload) !== 'undefined') {
                    this.message = payload.message || message;
                    this.payload = payload;
                }

                Error.captureStackTrace(this, errors[name]);
            }
        };
    });
});

console.log(errors);

module.exports = errors;