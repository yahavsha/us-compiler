/**
 * This file provides some development commands.
 */

 /*****************************************************************************
 * Load the required libraries
 *****************************************************************************/

const fs = require('fs');
const path = require('path');

/*****************************************************************************
 * Commands
 *****************************************************************************/

function createASTNodeFile(extras) {
    /* Setup */
    if (!extras[0]) {
        console.error('You must provide a name to the new node.');
    }

    const className = extras[0];
    const classNameWithoutSuffix = className.replace('Node', '');
    const upperClassName = className.replace('Node', '').toUpperCase();
    
    /* Do we already got a file like that? */
    if (fs.existsSync(path.join(__dirname, 'ast', 'nodes', className + '.js'))) {
        console.error('The file ' + path.join(__dirname, 'ast', 'nodes', className + '.js') + ' already exists. Stopping.');
        process.exit(1);
    }

    /* Define the new node class file */
    const fileContent = `
/*****************************************************************************
 * Load libraries
 *****************************************************************************/

const { ASTNodeType, ASTNode } = require('./Node');

/*****************************************************************************
 * Define the node
 *****************************************************************************/

/**
 * Defines the ${className}.
 */
module.exports = class ${className} extends ASTNode {
    /**
     * Instantiate a new node instance.
     * @param {ParsingContext} ctx The parsing context.
     */
    constructor(ctx) {
        super(ctx);
    }

    /**
     * Gets the node type.
     */
    static getNodeType() {
        return ASTNodeType.${upperClassName};
    }

    /**
     * Accepts a visitor call to this AST node and forward it to the visitor function.
     * @param {ASTVisitor} visitor The visitor.
     * @see ASTVisitor.visit${classNameWithoutSuffix}(ASTNode node)
     */
    async accept(visitor) {
        return await visitor.visit${classNameWithoutSuffix}(this);
    }

    /**
     * Gets a description of this node.
     */
    toString() {
        return \`${className} { }\`;
    }
}`;

    console.log('Writing the new file: ' + className + '.js');
    fs.writeFileSync(path.join(__dirname, 'ast', 'nodes', className + '.js'), fileContent);

    /* Add the node type into the nodes list */
    let nodeFileContents = fs.readFileSync(path.join(__dirname, 'ast', 'nodes', 'Node.js')).toString();
    
    // Get the node types structure
    const nodeTypesRegex = /module.exports.ASTNodeType\s*=\s*{(.*)};/gsi;
    const struct = nodeFileContents.match(nodeTypesRegex);
    if (!struct[0]) {
        throw new Error('Could not find ASTNodeType in the Node.js class.');
    }

    // Does our constant already exists?
    if (struct[0].indexOf(upperClassName + ':') > -1) {
        console.log(`Node.js already has ${upperClassName}, skipping on adding it.`);
    } else {
        // Add a new node type:
        const nodeTypes = struct[0].split('\n');

        nodeTypes.pop(); // Removes the last line
        nodeTypes.push(`    ${upperClassName}:${'    '.repeat(6)}${nodeTypes.length - 2},`);
        nodeTypes.push('};'); // Close it again

        nodeFileContents = nodeFileContents.replace(nodeTypesRegex, nodeTypes.join('\n'));
 
        // Rewrite the file
        console.log(`Adding ${upperClassName} to Node.js`);
        fs.writeFileSync(path.join(__dirname, 'ast', 'nodes', 'Node.js'), nodeFileContents);
    }

    /* Update the ASTVisitor if we need to */
    // Firstly, detect if we already got this method
    const ASTVisitor = require('./ast/ASTVisitor');
    const visitor = new ASTVisitor();
    if (!visitor['visit' + classNameWithoutSuffix]) {
        // There's no such method, so lets create it
        let visitorFileContents = fs.readFileSync(path.join(__dirname, 'ast', 'ASTVisitor.js')).toString();

        // Adds a reference to the created node in the require('./nodes') statement
        let loaderRegex = /(const\s*{(.*)}\s*=\s*require)/gis;
        let loaderData = visitorFileContents.match(loaderRegex);
        
        loaderData = loaderData[0].split('\n');
        const lastLine = loaderData.pop(); // Removes the last line: "} = require"
        loaderData.push(`    ${className},`);
        loaderData.push(lastLine);

        // Return the loading line but now with the new class attaced to it
        visitorFileContents = visitorFileContents.replace(loaderRegex, loaderData.join('\n'));
        
        // Now lets create a the method itself
        const visitorClassRegex = /module.exports\s*=\s*class ASTVisitor\s*{(.*)};/gsi;
        
        const classDef = visitorFileContents.match(visitorClassRegex);
        if (!classDef[0]) {
            throw new Error('Could not parse the ASTVisitor.js file.');
        }

        let classLines = classDef[0].split('\n');
        classLines.pop(); // Removes the last line, a.k.a };

        // Create the new method
        classLines.push(`
    /**
     * A method that's being triggered when the visitor visits a {@link ${className}}.
     * @param {ASTNode} node The node that the visitor found while iterating over the tree.
     * @see ${className}.accept(ASTVisitor visitor)
     */
    visit${classNameWithoutSuffix}(node) {
        /* Implementation */
    }`);
        classLines.push('};'); // returning the last line

        // Update the file
        visitorFileContents = visitorFileContents.replace(visitorClassRegex, classLines.join('\n'));
        
        // Write the file
        console.log(`Adding ${upperClassName} to ASTVisitor.js`);
        fs.writeFileSync(path.join(__dirname, 'ast', 'ASTVisitor.js'), visitorFileContents);
    } else {
        console.log(`ASTVisitor already has a method named visit${classNameWithoutSuffix}. Skipping on creating one.`);
    }

    /* Done */
    console.log('Done!');
}

/*****************************************************************************
 * MAIN
 *****************************************************************************/

if (!process.argv[2]) {
    console.error('Usage: dev-commands.js <command-name> ...');
    process.exit(1);
}

switch (process.argv[2]) {
    case 'new-ast-node':
        createASTNodeFile(process.argv.slice(3));
        break;
}

process.exit(0);