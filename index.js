// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./Interperter');

let input = `
hey!
    is meanie
    sup chocolate1
byes
`;

const interperter = new Interperter();
interperter.interpert(input);