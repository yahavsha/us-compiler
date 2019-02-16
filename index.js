// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie
    
    sup chocolate1
    shh shh...chocolate1 is 1k

    shh shh...sup castedChocolate
    shh shh...woah castedChocolate is (cosplay chocolate1 as Words)
    
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