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
- No implict casting.

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
	gotcha!
byes
```

That's equivilent to:
```javascript
for (var i = 1; i < 50; i++)
{
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
Functions can have zero or multiple arguments. In addition, functions can return a single value or not return anything.
A return can be performed with the `gimmie` keyword, which's equivilent to `return` a statement

Functions are friends who can be summoned to help you clear a hard level! 

The structure is:
```
friend {functionName} with (argsList):
	Code...
hihi!
```
You must end the friend definition with a `hihi!` so the friend knows she's welcome to join your program! otherwise she'll be sad and won't agree to join, let aside the compiler will be angry at you.

Note that the `with (argsList)` is optional, and if you don't have any arguements, you can omit it.

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
hey
	summons add with (1, 5)
	summons multiply with (2, summons add with (1, 1))
byes
```

That's equivilent to:
```javascript
add(1, 5);
multiply(2, add(1, 1));
```

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

### Built-in Functions
The language contains some basic functions that allows it to interact with Chocolat and ask for her help!

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
TODO

### Using Global Variables
TODO

### Exposing Native Functions
TODO