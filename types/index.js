/**
 * This module is responsible to register and handle the types available in the interperter.
 * 
 * @module types
 * @author Yahav S.
 */

/*****************************************************************************
 * Load requirements
 *****************************************************************************/

const Parser = require('../lib/usParser').usParser;
const literalNames = new Parser().literalNames;
const {
    InvalidCastError,
    ArithmeticOperationError,
    DivisionByZeroError,
    FormatError
} = require('../interperter/CompilationErrors');

/*****************************************************************************
 * Define the Type class
 *****************************************************************************/

/** This class indicates the implementing object
 *  is a kind of type. Every type knows its name. In languages like C
 *  where we need a tree-like structure to represent a type, one
 *  could return a string representation as the name.
 */
class Type {
    /**
     * Constructs a new Type.
     * @param {String} name The type name.
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {*} value The value.
     * @param {Type} fromType The origin type.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value, fromType) {
        return undefined;
    }

    /**
     * Gets a string representation of this type.
     */
    toString() {
        return `Type { name = "${this.name}" }`;
    }
};

/*****************************************************************************
 * Define the Type Value class
 *****************************************************************************/

/**
 * TypeValue is just a value that was being evaluated from a node and contains a data
 * about a specific value. It has the value type and the actual stored value.
 */
class TypeValue {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    /**
     * Converts an AST node into a value node.
     * @param {ASTNode} node 
     */
    static fromNode(node) {
        return new TypeValue(node.type, node.value);
    }

    /**
     * Gets a null value.
     */
    static get Null() {
        return new TypeValue(NullType.getInstance(), null);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        if (this.type instanceof NullType) {
            return this.type.name;
        }
        
        return `${this.type.name}(${this.value})`;
    }
}


 /*****************************************************************************
 * The Primitive Type class (why isn't this in a separate file? because there's a
 * circular dependency between Primitives, Type and Type Registar. So we must have everything
 * at one place... ugh!!!)
 *****************************************************************************/

class PrimitiveType extends Type {
    /**
     * Constructs a new Primitive Type.
     * @param {String} name The primitive type name.
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Creates a JS value that corresponds to this specific type representation.
     * For example, In NumberType, it takes a string number (like "3.14") and converts it into JS 3.14 (the number).
     * @param {String} value The value to parse.
     * @return {*}
     */
    createValue(value) {
        throw new Error('Not Implemented.');
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {TypeValue} value The value.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value) {
        throw new InvalidCastError(value.type.name, this.name);
    }

    /**
     * Gets a string representation of this type.
     */
    toString() {
        return `PrimitiveType { name = "${this.name}" }`;
    }

    /***** Static Helpers ******/

    /**
     * Determine if the given symbol coresponds to a primitive type value (e.g. 1, 1.33, "ab"...).
     * @param {Integer} symbol The symbol number.
     * @return {Boolean}
     */
    static isPrimitiveValueSymbol(symbol) {
        return Object.keys(PrimitiveType.prototype.PrimitivesMap).indexOf(String(symbol)) > -1;
    }

    /**
     * Gets the primitive type that coresponds with the given symbol.
     * @param {Integer} symbol The type symbol.
     * @return {Type}
     */
    static findFromSymbol(symbol) {
        return PrimitiveType.prototype.PrimitivesMap[String(symbol)];
    }

    /**
     * Determine if the given symbol coresponds to a primitive type name (e.g. "Words", "Number").
     * @param {Integer} symbol The symbol number.
     * @return {Boolean}
     */
    static isPrimitiveTypeSymbol(symbol) {
        return [Parser.TNUMBER, Parser.TBOOLEAN, Parser.TSTRING, Parser.NULL].indexOf(symbol) > -1;
    }

    /**
     * Perform an arithmetic operation between the given two values.
     * @param {TypeValue} lparam The left hand value.
     * @param {TypeValue} op The operator symbol.
     * @param {TypeValue} rparam The right hand operator.
     */
    static performArithmeticOperation(lparam, op, rparam) {
        /* If both types are numbers, it's simple mathematical expression */
        if ((lparam.type instanceof NumberType) && (rparam.type instanceof NumberType)) {
            return ArithmeticUtils.applyNumberAndNumber(lparam, op, rparam);
        }

        /* Handle strings */
        if ((lparam.type instanceof WordsType) && (rparam.type instanceof WordsType)) {
            return ArithmeticUtils.applyStringAndString(lparam, op, rparam);
        }

        
        /* Handle String & Number operations */
        if (lparam.type instanceof NumberType) {
            if (rparam.type instanceof WordsType) {
                return ArithmeticUtils._applyStringAndNumber(lparam, op, rparam);
            }
        } 

        if (rparam.type instanceof NumberType) {
            if (lparam.type instanceof WordsType) {
                return ArithmeticUtils._applyStringAndNumber(lparam, op, rparam);
            }
        } 

        // Operators with booleans & booleans are not allowed
        throw new ArithmeticOperationError(lparam, op, rparam);
    }
 }

 /*****************************************************************************
 * Number
 *****************************************************************************/

 class NumberType extends Type {
    /**
     * Constructs a new Primitive Type.
     * @param {String} name The primitive type name.
     */
    constructor() {
        super("Number");
    }

    /**
     * Creates a JS value that corresponds to this specific type representation.
     * For example, In NumberType, it takes a string number (like "3.14") and converts it into JS 3.14 (the number).
     * @param {String} value The value to parse.
     * @return {*}
     */
    createValue(value) {
        let v = Number(value);
        if (isNaN(v)) {
            throw new Error('Could not convert the given value into a Number.');
        }

        return v;
    }

    /**
     * Gets the single instance of this class (singleton pattern).
     * @returns {NumberType}
     */
    static getInstance() {
        if (!NumberType.prototype.instance) {
            NumberType.prototype.instance = new NumberType();
        }

        return NumberType.prototype.instance;
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {TypeValue} value The value.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value) {
        let numberedValue = Number(value.value);
    
        if (isNaN(numberedValue)) {
            throw new FormatError(
                `Could not cast ${node.value} into a ${this.name}. The given value format is incorrect.`);
        }
    
        return new TypeValue(NumberType.getInstance(), value);
    }
}

NumberType.prototype.instance = null;

/*****************************************************************************
 * Words
 *****************************************************************************/

class WordsType extends Type {
    /**
     * Constructs a new Primitive Type.
     * @param {String} name The primitive type name.
     */
    constructor() {
        super("Words");
    }

    /**
     * Creates a JS value that corresponds to this specific type representation.
     * For example, In NumberType, it takes a string number (like "3.14") and converts it into JS 3.14 (the number).
     * @param {String} value The value to parse.
     * @return {*}
     */
    createValue(value) {
        return this._trimChars(String(value), '"');
    }

    /**
     * Gets the single instance of this class (singleton pattern).
     * @returns {WordsType}
     */
    static getInstance() {
        if (!WordsType.prototype.instance) {
            WordsType.prototype.instance = new WordsType();
        }

        return WordsType.prototype.instance;
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {TypeValue} value The value.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value) {
        return new TypeValue(WordsType.getInstance(), value.value.toString());
    }

    /**
     * Trim characters in a string.
     * @param {string} str The string.
     * @param {string} c The characters.
     */
    _trimChars(str, c) {
        var re = new RegExp("^[" + c + "]+|[" + c + "]+$", "g");
        return str.replace(re, "");
    };
}

WordsType.prototype.instance = null;

/*****************************************************************************
 * Answer
 *****************************************************************************/

class AnswerType extends Type {
    /**
     * Constructs a new Primitive Type.
     * @param {String} name The primitive type name.
     */
    constructor() {
        super("Answer");
    }

    /**
     * Creates a JS value that corresponds to this specific type representation.
     * For example, In NumberType, it takes a string number (like "3.14") and converts it into JS 3.14 (the number).
     * @param {String} value The value to parse.
     * @return {*}
     */
    createValue(value) {
        return Boolean(value);
    }

    /**
     * Gets the single instance of this class (singleton pattern).
     * @returns {AnswerType}
     */
    static getInstance() {
        if (!AnswerType.prototype.instance) {
            AnswerType.prototype.instance = new AnswerType();
        }

        return AnswerType.prototype.instance;
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {TypeValue} value The value.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value) {
        return new TypeValue(AnswerType.getInstance(), Boolean(value.value));
    }
}
 
AnswerType.prototype.instance = null;

/*****************************************************************************
 * Null
 *****************************************************************************/

class NullType extends Type {
    /**
     * Constructs a new Primitive Type.
     * @param {String} name The primitive type name.
     */
    constructor() {
        super("Null");
    }

    /**
     * Creates a JS value that corresponds to this specific type representation.
     * For example, In NumberType, it takes a string number (like "3.14") and converts it into JS 3.14 (the number).
     * @param {String} value The value to parse.
     * @return {*}
     */
    createValue(value) {
        return null;
    }


    /**
     * Gets the single instance of this class (singleton pattern).
     * @returns {NullType}
     */
    static getInstance() {
        if (!NullType.prototype.instance) {
            NullType.prototype.instance = new NullType();
        }

        return NullType.prototype.instance;
    }

    /**
     * Attempts to cast the given value into this type.
     * @param {*} value The value.
     * @param {Type} fromType The origin type.
     * @return The casted value, or undefined if the cast can not be performed.
     */
    cast(value, fromType) {
        return undefined;
    }

    /**
     * Gets a string representation of this type.
     */
    toString() {
        return `Null`;
    }
}
 
NullType.prototype.instance = null;

 /*****************************************************************************
 * Finalize the PrimitiveType
 *****************************************************************************/

/* Static Vars */
PrimitiveType.prototype.PrimitivesMap = {};
PrimitiveType.prototype.PrimitivesMap[Parser.NUMBER] = NumberType.getInstance();
PrimitiveType.prototype.PrimitivesMap[Parser.STRING] = WordsType.getInstance();
PrimitiveType.prototype.PrimitivesMap[Parser.TRUE] = AnswerType.getInstance();
PrimitiveType.prototype.PrimitivesMap[Parser.FALSE] = AnswerType.getInstance();
PrimitiveType.prototype.PrimitivesMap[Parser.NULL] = NullType.getInstance();

/*****************************************************************************
 * An arithmetic utilities class
 *****************************************************************************/


class ArithmeticUtils {
    /**
     * Perform an arithmetic operation between the two given number values.
     * @param {TypeValue} lparam The left hand value.
     * @param {TypeValue} op The operator symbol.
     * @param {TypeValue} rparam The right hand operator.
     */
    static applyNumberAndNumber(lparam, op, rparam) {
        let value;
        switch (op) {
            case Parser.PLUS:
                value = lparam.value + rparam.value;
                break;
            case Parser.MINUS:
                value = lparam.value - rparam.value;
                break;
            case Parser.MULTIPLY:
                value = lparam.value * rparam.value;
                break;
            case Parser.DIVIDE:
                if (rparam.value === 0) {
                    throw new DivisionByZeroError();
                }

                value = lparam.value / rparam.value;
                break;
            case Parser.MOD:
                value = lparam.value % rparam.value;
                break;
            case Parser.POWER:
                value = Math.pow(lparam.value, rparam.value);
                break;
            default:
                throw new Error("Could not resolve the arithmetic operation.");
        }

        return new TypeValue(lparam.type, value); // Why lparam.type? Just casue I decided too! We could've used the instance in rparam.type as well. It's singleton. It's the same. Duh.
    }

    /**
     * Perform an arithmetic operation between the two given word values.
     * @param {TypeValue} lparam The left hand value.
     * @param {TypeValue} op The operator symbol.
     * @param {TypeValue} rparam The right hand operator.
     */
    static applyStringAndString(lparam, op, rparam) {
        /* With both strings, we only support operator+ and operator-. */
        if (op === Parser.PLUS) {
            return new TypeValue(lparam.type, lparam.value + rparam.value);
        } else if (op === Parser.MINUS) {
            return new TypeValue(lparam.type, lparam.value.replace(rparam.value, ''));
        }

        throw new ArithmeticOperationError(lparam, op, rparam);
    }

    /**
     * Perform an arithmetic operation between the given string and number.
     * @param {TypeValue} lparam The left hand value.
     * @param {TypeValue} op The operator symbol.
     * @param {TypeValue} rparam The right hand operator.
     */
    static _applyStringAndNumber(lparam, op, rparam) {
        /* What is the operation? */
        switch (op) {
            case Parser.PLUS:
                /* If it's a plus, we'll cast the number into a string and concat them.
                Note that we could've use a casting (WordsType.getInstance().cast(lparam) etc. but that'd
                create extra TypeValue instance when we can just toString() it. */
                return new TypeValue(WordsType.getInstance(), lparam.value.toString() + rparam.value.toString());
            case Parser.MULTIPLY:
                /* Who's the string and who's the number? */
                let strParam = lparam.type instanceof WordsType ? lparam : rparam;
                let numParam = lparam.type instanceof NumberType ? lparam : rparam;

                return new TypeValue(WordsType.getInstance(), strParam.value.repeat(numParam.value));
            case Parser.MINUS:
            case Parser.DIVIDE:
            case Parser.MOD:
            case Parser.POWER:
                throw new ArithmeticOperationError(lparam, op, rparam);
            default:
                throw new Error("Could not resolve the arithmetic operation.");
        }
    }
}

/*****************************************************************************
 * Define the Type Registar (tracker) class
 *****************************************************************************/

/**
 * Provides mechanism to register and track types across the interperter.
 */
class TypesRegistar {
    /**
     * Initializes the types registar.
     */
    static initialize() {
        if (!TypesRegistar.prototype.Initialized) {
            /* Register built-in types */
            TypesRegistar.register(NumberType.getInstance());
            TypesRegistar.register(WordsType.getInstance());
            TypesRegistar.register(AnswerType.getInstance());
            TypesRegistar.register(NullType.getInstance());

            /* Mark as done */
            TypesRegistar.prototype.Initialized = true;
        }
    }

    /**
     * Registeres the given type.
     * @param {Type} typeInstance The type instance.
     * @param {String} typeName A name to refer this typename with.
     */
    static register(typeInstance, typeName) {
        if (!(typeInstance instanceof Type)) {
            throw new Error('The given instance must inherit Type.');
        }

        if (!typeName) {
            typeName = typeInstance.name;
        }

        if (TypesRegistar.hasType(typeName)) {
            throw new Error(`The type "${typeName}" already exists.`);
        }

        TypesRegistar.prototype.RegisteredTypes.set(typeName, typeInstance);
    }

    /**
     * Gets a type by its name.
     * @param {String} typeName The type name.
     * @return {Type} The saved instance of the type or undefined if it's not exists.
     */
    static get(typeName) {
        if (!TypesRegistar.hasType(typeName)) {
            throw new Error(`The type "${typeName}" wasn't registered.`);
        }

        return TypesRegistar.prototype.RegisteredTypes.get(typeName);
    }

    /**
     * Determine whether or not the given type was already registered.
     * @param {String} typeName The type name.
     * @return {Boolean}
     */
    static hasType(typeName) {
        return TypesRegistar.prototype.RegisteredTypes.has(typeName);
    }

    /**
     * Determine if the given arithmetic operation is valid.
     * @param {integer} symbol The arithmetic operation symbol.
     */
    static isValidArithmeticOperation(symbol) {
        return typeof(TypesRegistar.prototype.ArithmeticOperations[String(symbol)]) !== 'undefined';
    }

    /**
     * Determine if the given unary operation is valid.
     * @param {integer} symbol The unary operation symbol.
     */
    static isValidUnaryOperation(symbol) {
        return typeof(TypesRegistar.prototype.UnaryOperations[String(symbol)]) !== 'undefined';
    }

    /**
     * Get the string that represents this operator.
     * @param {integer} symbol The arithmetic operation symbol.
     */
    static getArithmeticOperationString(symbol) {
        return TypesRegistar.prototype.ArithmeticOperations[String(symbol)];
    }

    /**
     * Get the string that represents this operator.
     * @param {integer} symbol The unary operation symbol.
     */
    static getUnaryOperationString(symbol) {
        return TypesRegistar.prototype.UnaryOperations[String(symbol)];
    }

    /**
     * Perform an arithmetic operation between two values.
     * @param {TypeValue} lparam The left hand value.
     * @param {TypeValue} op The operator symbol.
     * @param {TypeValue} rparam The right hand operator.
     */
    static performArithmeticOperation(lparam, op, rparam) {
        if (!(lparam instanceof TypeValue) || !(rparam instanceof TypeValue)) {
            throw new Error('lparam and rparam must be a TypeValue.');
        }

        /* Both parameters are Primitives, as we don't support anything else, so we'll resolve them
        with our PrimitiveType resolver. Note that at the future we might add here a custom code
        to allow things like C++ operator+, operator- etc. */
        return PrimitiveType.performArithmeticOperation(lparam, op, rparam);
    }
};

/* Static fields */
TypesRegistar.prototype.RegisteredTypes = new Map();
TypesRegistar.prototype.Initialized = false;
TypesRegistar.prototype.ArithmeticOperations = {};
TypesRegistar.prototype.UnaryOperations = {};

// Note, the  literalNames[token].slice(1, literalNames[token].length - 1) thingy:
// every literal represents the actual keyword that should be used to perform operation.
// for example literalNames[Parser.PLUS] is '"+"'. As you can see, it surrounded by quotes.
// but I don't want quotes! So I slice them. Like a pizza! (You shouldn't slice chocolates! Beware!!!!)
for (let token of [Parser.PLUS, Parser.MINUS, Parser.MULTIPLY, Parser.DIVIDE, Parser.POWER]) {
    TypesRegistar.prototype.ArithmeticOperations[token] = literalNames[token].slice(1, literalNames[token].length - 1);
}

for (let token of [Parser.UNARY_PLUS, Parser.UNARY_MINUS]) {
    TypesRegistar.prototype.UnaryOperations[token] = literalNames[token].slice(1, literalNames[token].length - 1);
}

/* Register simple types */
TypesRegistar.initialize();

/* Export it! */
module.exports = {
    Type,
    TypeValue,
    TypesRegistar,
    PrimitiveType,
    NumberType,
    WordsType,
    AnswerType,
    NullType
};