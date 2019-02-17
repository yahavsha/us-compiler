// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie
    
    sum is 1

	hides (i is 1; ++i) til (i same 50)
        sum is sum + i
        sum is sum + 1
    foundya!



    BARRIER! 
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

try {
    const interperter = new Interperter();
    interperter.interpert(input);
} catch (e) {
    throw e;
    console.error('** Error Was Thrown **');
    console.log(e.message);
    console.log(e.getUnderlineError());
}