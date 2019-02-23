# Us Programming Language
[![Build Status](https://travis-ci.org/yahavsha/us-compiler.svg?branch=master)](https://travis-ci.org/yahavsha/us-compiler)

## Words of Opening, End Goal & Project Dedication
This is an implementation of an interperter (similar to compiler, but interperts the code and execute it instead of compiles it into machine code) in plain ES6 (JavaScript) code.

This implementation make use of ANTLR4 to generate a lexer, semantic parser and and AST visitor. Then, the implementation runs over the AST with an evaluation visitor and creates from it an evaluation tree. This tree can be evaluate at one as each branch evaluates the other and performs the actual commands.

The language supports:
- Types: numbers, strings, booleans.
- Variables (Arithmetic operations).
- Casting.
- If-else conditions.
- For loop.
- While loop.
- Functions.

I believes this implementation can be a good sample for anyone who looks to start to work with ANTLR especially in NodeJS as there're barely any example on how to do it in JS.

Last words: This project is dedicated to a good friend of mine who had a birthday. I made it as a birthday present for him, as he studies Computer Science and aims to be a pro front-end developer.
The reserved words and general context of this langauge is based on our conversations.
I hopes with all my heart that this project will be a good reference for him while he reaches his goal, as well as a source for motivation.

The code has been published under the MIT license. Please read the LICENSE.md file for more information.

**Words of thanks: Thanks to 🍫🍫chocolates🍫🍫, who made me really happy while writing all of this code. Of course (Lite) Cola helped me as well - but chocolates were a requirement to make this project possible!**

## Principals
US is a programming language made just for us and based on our conversations styles.
The programming language is couply tied with Chocolat, so its possible to use it to ask her to perform some tasks, such as asking questions or her opinion.
Just like it should be in an ideal world, `us` doesnt like the usage of insulting words or emojis, and the programmer should be nice to her and dont bully her. In case of bully, us will have un-predicted results 🙄🙄.

- As the language doesn't use semicolons at the end, each command must be in a separate line.
- Note to the code block prefix and suffix. Omitting a suffix (for example, a `gotcha!` in for loop) will result in a compilation error.
- The indentations used in the examples are there just to make the code pretty. You don't **have** to use them. But they're cute, aren't they?

## Features
- Variables
- Comments
- If-else
- Loops
- Functions

### Program
It'll be rude to start programming w/o saying hi to the compiler, so any program have to start with a hi statement. In addition, every program should be ended with a bye statement so the compiler won't get insulted.

```
hey!
	Code...
byes
```

If the program won't be nice enough and have these prefix and suffix, it won't get executed. Beware!

### Meanie Program
Some people like being meanie, and so does the `us` compiler.
By specifying the `is meanie` the instruction as the very first line of the code (after the "hey!" statement, of course! U can't get meanie before saying hello, right?)
the program will behave in more meanie and strict way.
That means:
- Variables must get declared before used.
- Variables can't change their types.
- No implict casting.
- Misc behaviour. That... depends on the program mood and how forgiving it is... 🙄

### Comments
#### Single Line Comments
You can ask the compiler to be silent about a statement. You can do so by saying "shh shh". In that case, the rest of the line will be a comment.

```
hey!
	shh shh... That's a secret line. It wont do anything
byes
```

That'd be same as (javascript):
```javascript
// That's a secret line. It wont do anything
```
#### Multi Line Comments

To hide some explanation content, you need to put a barrier to protect it. to do it, you should:

```
BARRIER!
	this is a hidden content.
	And that is hidden as well.
RELEASE!
```
That'd be same as (javascript):
```javascript
/*
	this is a hidden content.
	And that is hidden as well.
*/
```


### Value types
|  Type | Value |
| ------------ | ------------ |
| Answer | (Boolean) a true or false value, typed with `yupyup` (true) or `nop` (false)  |
| Number  | Aything that goes with numbers, `1`, `3.14`, `-15`. Numbers can also have a suffix `k` for thousands or `m` for milions. For example, `5k` = `5000`. |
| Words | (String) Double quotes wrapped characters. `"Hey"`, `"😛"`. |
| NULL | Nothing, void. typed with `...` |

### Variables
Variables can contain one of the value types specified above.
A variable name can be any unicode character that matches the `us` programming principals. That obviously means that variables like `🍫` are welcome!
`us` is a weakly typed language, so no need to refer to the variable type.

To define a variable you need to introduce it to the compiler, with a value
```
hey!
	sup variable1
	sup Var2
	sup 🍫
byes
```

That'd be same as (javascript):
```javascript
let variable1;
let Var2;
let chocolate;
```

This code introduce 3 variables - `variable1`, `Var2` and the **lovely** 🍫 variable. The variables value will be `...` (null).
But we wanna assign the variables value, right? We can do it like so:
```
hey!
	woah var1 is 5k
	woah Var2 is "hello"
	woah 🍫 is 5m
byes
```

That'd be same as (javascript):
```javascript
let var1 = 5000;
let Var2 = "Hello";
let chocolate = 5000000;
```

**Note that if you are _not_ in meanie mode, you can skip on the `woah` usage (which declares the variable) and just use `chocolate is 1` to define it and assign it.**

### Casting
Sometimes you'd want to make a variable takes a form of another data type. Variables can't change themseleves, but they surely can cosplay! 
```
hey!
	shh shh... milkChocolate is 1
	woah milkChocolate is 1
	
	shh shh... Now we turn it into a yupyup (true) value.
	woah castedChocolate is (cosplay milkChocolate as Number)
	
byes
```

That'd be same as (javascript):
```javascript
// milkChocolate is 1
let milkChocolate = 1;

//  Now we turn it into a true value.
let castedChocolate = Boolean(milkChocolate);
```

### Conditions
You can ask to check conditions by using the condition coding blok:
```
hey!
	anw {condition}?
		shh shh... Code if true
	yay!
byes
```

that's equivilent to:
```javascript
if (condition) {
	// Code if true
}
```

Tho sometimes we won't be able to achieve our goals, so we can use an else statement:
```
hey!
	anw {condition}?
		shh shh... Code if true
	yay!
	gosh anw {condition2}?
		shh shh... Code if true...
	yay!
	gosh
		shh shh... Code if true...
	ugh!
byes
```

that's equivilent to:
```javascript
if (condition1) {
	// Code if true
} else if (condition2) {
	// Code if true
} else {
	// Code if false
}
```

The comparison operators are:

|  Operator in `us` | Operator in `javascript` |
| ------------ | ------------ |
| `same` | `==` |
| `diff` | `!=` |
| `small` | `<` |
| `big` | `>` |
| `small^` | `<=` |
| `big^` | `>=` |

The logical operators are:

|  Operator in `us` | Operator in `javascript` |
| ------------ | ------------ |
| `or` | `||` |
| `also` | `&&` |
| `nah` | `!` |


### Loops
`us` allows you to repeat a code while hiding from someone. The `hide` (equivilent to `for`) code block is
```
hides (initialization; increment) til (termination)
```

For example:
```
hey!
	hides (i is 1; i++) til (i same 50)
		shh shh... Code
	foundya!
byes
```

That's equivilent to:
```javascript
for (var i = 1; i < 50; i++) {
	// Code...
}
```

In addition, `us` allows you to repeat a block of code mutiple times until you answer `nop` to a condition.
```
hey!
	huh {condition}?
		shh shh... Code
	stop!
byes
```

That's equivilient to:
```javascript
while (condition) {
	// code...
}
```

### Functions
### Decl
Functions can be defined in `us` language as well.
Functions can have zero or multiple arguments. In addition, functions can return a single value or not return anything at all. That's sad not to return anything, especially chocolates... But sigh.
A return statement can be performed with the `gimmie` keyword, which's equivilent to `return` a statement

Functions are friends who can be summoned to help you clear a hard level! 

** If the function gets at least one argument, the structure is **
```
friend {functionName} with (argsList):
	Code...
hihi!
```
** If the function does not gets any argument, the structure is **
```
friend {functionName}:
	Code...
hihi!
```
Which means, if you get arguments you must use `with (...)`. Otherwise, you can't use that at all.

You must end the friend definition with a `hihi!` so the friend knows she's welcome to join your program! otherwise she'll be sad and won't agree to join, let aside the compiler will be angry at you.

Lets see an example:
```
hey
	friend add with (a, b):
		gimme a + b
	hihi!
	friend abs with (a)
		anw a < 0?
			gimme -a
		yay!
		gosh
			gimme a
		ugh!
	hihi!
byes
```

That's equivilent to:
```javascript
function add(a, b) {
	return a + b;
}

function abs(a) {
	if (a < 0) {
		return -a;
	} else {
		return a;
	}
}
```

### Call
To call a friend to aid you, you should summon her!
```
hey!
	summons add with (1, 5)
	summons multiply with (2, summons add with (1, 1))
byes
```

That's equivilent to:
```javascript
add(1, 5);
multiply(2, add(1, 1));
```

## Build the US interperter
To have the interperter ready to work, you should have ANTLR installed and configured on your machine, as well as Python 3+.
Then, after cloning this repository, you should run:
```
	$ npm run build
```

This command will run `run.py` (A python script) which executes ANTLR on the grammer file (`us.g4`) and generates the lexer and parser.

## Using the interperter
The interperter can be easily accessed to interpet US code.
You can use the interperter class to get/set global variables, set native (js) functions that the US code can execute and evaluate code.

### Evaluate (Interpert) Code
Interperting simple US code is easy! Just create a new interperter instance and call the `interpert` method.

```
const code = getCodeSomehow();

(async () => {
    try {
        const interperter = new Interperter();
		await interperter.interpert(code);
    } catch (e) {
        console.error('** Error Was Thrown **');
        console.error(e.message);
        console.error(e.getUnderlineError());

        console.error('Stack Trace:');
        console.error(e.getStackTrace());
    }
})();
```

- Oh, and don't forget to try-catch it, as it might throw some exceptions.
- Oh #2, don't forget US is Promise compatible, which means `interpert` return a Promise. Thus, please use `async` and `await`.

**The `interpert` call gives you an `EvaluationResult` instance. This object can used to access variables & functions the user has defined in her US program**

### Using EvaluationResult
After calling `interpert`, you gets an `EvaluationResult` instance. This object can used to access variables & functions the user has defined in her US program.
This object has the following methods

|  Method | Arguments | Description | Is async |
| ------------ | ------------ | ------------ | ------------ |
| `getIsMeanieProgram` | N/A | Gets a boolean value that determine if the program were in meanie mode | no |
| `hasGlobalVariable` | `name` - The variable name | Checks if a variable were defined in the global scope | no |
| `getGlobalVariable` | `name` - The variable name | Gets a variable that's been defined at the program global scope | no |
| `getRawGlobalVariable` | `name` - The variable name | Gets a variable that's been defined at the program global scope **In it's `TypeValue` form** | no |
| `hasUserFunction`| `name` The function name | Checks if the given user function was defined. | no |
| `invokeUserFunction` | `name` - The function name, `args` - A list of arguments to send to the function | Invokes a user declared function (which means a function defined in the US script). The function returns the invocation result. | yes |

Example usage:
```
(async () => {
    try {
        const interperter = new Interperter();
		const result = await interperter.interpert(code);

		const name = result.getGlobalVariable("name"); // Assuming "name" was defined in the US script.
		const addResult = await result.invokeUserFunction("add", [1, 2]); // Assuming "add" was defined in the US script, sets 3
    } catch (e) {
		// Handle errors
    }
})();
```

### Error Handling
The interperter checks for two type of errors:
- Lexing Errors: These errors occures if there's a syntax error, like if you written "yup" instead of "yupyup".
- Semantic Error: These errors occures if there's a semantic error, like if a variable doesn't exists, an arithmetic expression isinvalid etc.

Error handling can be done simply with a try-n'-catch block. The catched `e` parameter will be of type `CompilationError`, which can be found at `interperter/CompilationErrors`.
To actually resolve the error, you may use these methods & attributes:

|  Command | Description |
| ------------ | ------------ |
| `e.message` | The error details. Just like in normal JS, yup. |
| `e.lineNumber` | The error line number |
| `e.column` | The location in the error line that starts the problem |
| `e.start` | The start location of the error problem in the line (should be computed with `column`) |
| `e.stop` | The end location in the line of the problematic token. |
| `e.getUnderlineError()` | Gets a string that shows the error location with `^^^^^` that marks the error location. |
| `e.getStackTrace` | Gets the stack trace associated with the program |

### Defining Global Variables
You can define variables that'll be available to US programs when they start.
To do so, you should simply use `interperter.setGlobalVariable(name, value)` method.
Note that the `value` field can have two values:
- A normal JS value.
- A `TypeValue` value. `TypeValue` (defined at `./types`) describes a value in the language. You should use it only if you want to pass more complex value to the program, that it doesn't know how to convert by itself. You shouldn't worry much about it. Just use normal JS values lol.

### Exposing Native Functions
You can define native functions that US will be able to access.

## Interperter Structure
### Architecture
The interperter is consisted of the following modules:
- ast: This module responsible on taking the CST (Concrete Syntax Tree) that's being generated by ANTLR and converting it into an AST (Abstract Syntax Tree) that can serve our proposes. The AST tree nodes are defined inside the AST module.  The way this happens is by using the `Visitor` design pattern. ANTLR genertes us an `USVisitor` abstract class which allows to visit tokens and rules. We use it to visit the portions of the tree and create an AST from it.
	- nodes: These are the ast nodes classes. The `index.js` file contains the list of nodes and a factory method (`NodeFactory`) which allow to get an instance of an `ASTNode` by suppling its type. Please note that the nodes templates has been generated using the `dev-commands.js` script. It obviously doesn't generate the logic, but it does create the node class, adds the created note to the ASTNodeTypes` enum and adds a `visitXXXX` function to the `ASTVisitor` abstract class (Which's being used later by the evaluator).
- evaluation: This module is responsible on evaluating the AST and actually performs the program instructions. The way the module does it is by using the `Visitor` design pattern, but now instead of iterating over the CST that ANTLR generates, we iterate over the AST we generated in the previous step.
	- symbols: This sub-module contains the various symbols we might find while evaluating the AST. Symbols are identifiers that has a label and value attributes and can be stored in a symbols table. For example: Variable and Fucntions. The module also has a SymbolsTable implementation which allows to support scoping, so functions will have their own variables etc.
- interperter: Contains the main interperter class that performs the lexical + semantical analysis and then evaluates the code. This module also handles compilation errors.
- lib: The lexer and parser classes generated by ANTLR. Please see `run.py` to see how these files are being generated from the `us.g4` grammer file.
- test: Some simple tests written with `mocha`
- types: A module responsible on the language types. It allows to register types, perform arithmetic operations, logical and comparion conditions etc.
- utils: Some utilities classes.

### Using TypeValue
A `TypeValue` is basically a value in our program. We won't pass values as raw ES6 values as we might wanna pass later more complex values and for that we'd need to store more information and have more flexibility. A `TypeValue` is basically a class that contains a `type` field, which's a `Type` class instance (just a second 'bout that) and a `value`, which's the raw ES6 value.
Each US value has a type. A type is been represented by the `Type` class (Defined at `./types`). The types we currentlys upport are `Number`, `Words` (string), `Answer` (boolean) & Null. Each of them has been defined (as singletons) in the `./types` module. Thus, a `TypeValue` just stores an instance to that type.

You may use these `TypeValue` instead of raw ES6 values:
- When declaring global ES6 value: instead of passing ES6 values to `setGlobalVariable`, you can just pass it a `TypeValue`.
- Accessing variable defined in a US program: call `getRawGlobalVariable` from your `EvaluationResult` will give you the `TypeValue`.
- When exposing ES6 functions: Set the `sendTypeValue` flag to `true` when declaring the function (in the options object). That'll make sure your native function gets the `TypeValue`. 

## Final Notes
Last words: This project is dedicated to a good friend of mine who had a birthday. I made it as a birthday present for him, as he studies Computer Science and aims to be a pro front-end developer.
The reserved words and general context of this langauge is based on our conversations.
I hopes with all my heart that this project will be a good reference for him while he reaches his goal, as well as a source for motivation.

**Words of thanks: Thanks to 🍫🍫chocolates🍫🍫, who made me really happy while writing all of this code. Of course (Lite) Cola helped me as well - but chocolates were a requirement to make this project possible!**

## License
This project is being licensed under the MIT license.