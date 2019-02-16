/*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

 /* Node data */
 const { Node, NodeType } = require('./Node');

 /* A table used to track the defined symbols in this scope */
 const SymbolTable = require('../utils/SymbolTable');
 
 /*****************************************************************************
  * Define the scope node
  *****************************************************************************/
 
 module.exports = class ProgramNode extends Node {
     constructor(ctx) {
         super(ctx);
     }
 
     static getType() {
         return NodeType.PROGRAM;
     }
     
     eval() {
         console.log('Evaluating Code Block');
     }
 }