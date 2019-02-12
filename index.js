// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey
    is meanie
    sup chocolate1
    chocolate1 is 1
    chocolate1 is 1k
    chocolate1 is 1m
    chocolate1 is -1
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