/**
 * Defines a standard Stack implementation in JavaScript.
 */
module.exports = class Stack {
    /**
     * The stack constructor
     */
    constructor() {
        this._elements = [];
    }

    /**
     * Determine whether or not the stack is empty
     * @return {boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * Gets the number of elements in the stack
     * @return {int}
     */
    size() {
        return this._elements.length;
    }

    /**
     * Push new element to the stack.
     * @param {*} element The element to push.
     * @return {*} The pushed element.
     */
    push(element) {
        return this._elements.push(element);
    }

    /**
     * Peek to see the element at the top of the stack.
     * @return {*} The most top element at the stack.
     */
    peek() {
        if (this.isEmpty())
        {
            throw new Error('The stack is empty.');
        }

        return this._elements[this.size() - 1];
    }
    
    /**
     * Pops the most top element from the stack.
     * @return {*} The popped element.
     */
    pop() {
        if (this.isEmpty())
        {
            throw new Error('The stack is empty.');
        }

        return this._elements.pop();
    }
};