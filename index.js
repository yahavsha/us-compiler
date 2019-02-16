// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie
    
    sup chocolate1
    chocolate1 is 1k + 2k

    sup chocolate2
    woah chocolate2 is "123"
    
    anw chocolate1 big 2k also chocolate1 small 4k also chocolate2 same "123"?
        chocolate1 is chocolate1 * 3
    yay!

    BARRIER!
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