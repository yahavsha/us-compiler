// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie

    friend bar with (a, b):
        a is 5
        b is 6
    hihi!
    
    friend foo with (a, b):
        a is 2
        b is 2
        summons bar with (a, b)
        gimme a + b
    hihi!

    woah chocolate is (summons foo with (1, 1))
    
    woah a is 1


    BARRIER!
    
    friend mul with (a, b):
        gimme a * b
    hihi!

    friend add with (a, b):
        gimme summons mul with (a + a, b + b)
    hihi!


    shh shh... (summons print with ("Hello " + (summons add with (1, 2))))
    summons print with ("Hello %d!", 5)

    woah a is 1
    RELEASE!
    

    BARRIER! 
    woah a is 2
    woah sum is 1
    woah i is 1
    huh i small^ 5?
        sum is sum * i++
    stop!

	hides (woah i is 1; ++i) til (i small 50)
        sum is sum + i
    foundya!

    anw a same 1?
        a is 10
    yay!
    gosh anw a big 2?
        a is 20
    yay!
    gosh
        a is 30
    ugh!
    
    sum is sum + 1

	hides (i is 1; ++i) til (i same 50)
        sum is sum + i
        sum is sum + 1
    foundya!


	hides (i is 1; i++) til (i same 50)
		shh shh... Code
    foundya!
    

    huh i small^ 5?
        sum is sum * i
        i is i + 1
    stop!

    sup chocolate1
    shh shh...chocolate1 is 1k same 2k also 2k diff 3k also 3k same 2k
    chocolate1 is 3k

    anw nop?
        chocolate1 is chocolate1 * 3
    yay!
	gosh anw chocolate1 big 2k?
        chocolate1 is chocolate1 * 6
    yay!
    gosh
        chocolate is chocolate * 8
    ugh!

    sup castedChocolate
    woah castedChocolate is (cosplay chocolate1 as Words)


    sup chocolate2
    woah chocolate2 is "123"
    
    anw chocolate1 big 2k also chocolate1 small 4k also chocolate2 same "123"?
        chocolate1 is chocolate1 * 3
    yay!

    anw chocolate1 big 2k also chocolate1 small 4k also chocolate2 same "123"?
        chocolate1 is chocolate1 * 3
    yay!
    
        sup castedChocolate
        woah castedChocolate is (cosplay chocolate2 as Number)
        
        chocolate1 is "hello: " + yupyup
        chocolate1 is 1m
        chocolate1 is -1
    RELEASE!
byes
`;

(async () => {
    try {
        const {WordsType}=require('./types');
        const interperter = new Interperter();
        interperter.setGlobalVariable('name', 'Nozomi');
        interperter.setGlobalVariable('name2', WordsType.getInstance().createValue('Yahav'));
        interperter.setNativeFunction({
            name: 'print',
            pointer: (...args) => {
                let util = require('util');
                console.log(util.format(... args));
            }
        });

        // interperter.setNativeFunction('random', [], m => Math.random());
        let result = await interperter.interpert(input);

        // console.log('Execution Result (index.js):');
        // console.log(result.invokeUserFunction('add', [1, 2]));
    } catch (e) {
        // throw e;
        try {
        console.error('\n\n** Error Was Thrown **');
        console.error(e.message);
        console.error(e.getUnderlineError());

        console.error('Stack Trace:');
        console.error(e.getStackTrace());
        console.error('');
        } catch {}
        throw e;
    }
})();