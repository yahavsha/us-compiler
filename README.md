# Us Programming Language
## Principals
US is a programming language made just for us and based on our conversations styles.
The programming language is couply tied with Chocolat, so its possible to use it to ask her to perform some tasks, such as asking questions or her opinion.
Just like it should be in an ideal world, `us` doesnt like the usage of insulting words or emojis, and the programmer should be nice to her and dont bully her. In case of bully, us will have un-predicted results 🙄🙄.

## Features
- Variables
- Comments
- If-else
- Loops
- Functions

## Program
It'll be rude to start programming w/o saying hi to the compiler, so any program have to start with a hi statement. In addition, every program should be ended with a bye statement so the compiler won't get insulted.

```
hey!
	Code...
byes
```

If the program won't be nice enough and have these prefix and suffix, it won't get executed. Beware!

## Value types
|  Type | Value |
| ------------ | ------------ |
| Answer | (Boolean) a true or false value, typed with `yupyup` (true) or `nop` (false)  |
| Number  | Aything that goes with numbers, `1`, `3.14`, `-15`. Numbers can also have a suffix `k` for thousands or `m` for milions. For example, `5k` = `5000`. |
| Words | (String) Double quotes wrapped characters. `"Hey"`, `"😛"`. |
| Regex pattern | To make a regex, you should use a string with a "like that" prefix. For example, the regex `[a-zA-Z]+` should be written as `LIKE THAT /[a-zA-Z+]/`. |
| NULL | Nothing, void. typed with `...` |

## Variables
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
	woah 🍫is 5m
byes
```

That'd be same as (javascript):
```javascript
let var1 = 5000;
let Var2 = "Hello";
let chocolate = 5000000;
```

## Casting
Sometimes you'd want to make a variable takes a form of another data type. Variables can't change themseleves, but they surely can cosplay! 
```
hey!
	shh shh... milkChocolate is 1
	woah milkChocolate is 1
	
	shh shh... Now we turn it into a yupyup (true) value.
	woah u have castedChocolate with (cosplay milkChocolate as Number)
	
byes
```

That'd be same as (javascript):
```javascript
// milkChocolate is 1
let milkChocolate = 1;

//  Now we turn it into a true value.
let castedChocolate = Boolean(milkChocolate);
```

## Conditions
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


## Loops
`us` allows you to repeat a code while hiding from someone. The `hide` (equivilent to `for`) code block is
```
hides while (initialization; increment) til (termination)
```

For example:
```
hey!
	hides while (i is 1; i++) til (i same 50)
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

## Functions
Functions can be defined in `us` language as well.
To define a function, 
```
hey
	look look add has (a, b) :O
		gimme a + b
	done!
	look look abs has (a) :O
		anw a < 0?
			gimme -a
		yay!
		gosh
			gimme a
		ugh!
	done!
byes
```

To call a function, you should summon it!
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

## Comments
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
## Built-in Functions
The language contains some basic functions that allows it to interact with Chocolat and ask for her help!
