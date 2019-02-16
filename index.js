// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie
    
    sup chocolate1
    chocolate1 is 1k + 2k

    sup chocolate2
    woah chocolate2 is "123"
    
    sup castedChocolate
    woah castedChocolate is (cosplay chocolate2 as Number)
    
    shh shh...chocolate1 is "hello: " + yupyup
    shh shh...chocolate1 is 1m
    shh shh...chocolate1 is -1
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