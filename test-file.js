// var input = fs.readFileSync(iName, 'UTF-8');

var Interperter = require('./interperter');

let input = `
hey!
    woah chocolate is 5
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
        interperter.setNativeFunction({
            name: 'print',
            pointer: (...args) => {
                let util = require('util');
                console.log('[US Compiler] ' + util.format(... args));
            }
        });

        // interperter.setNativeFunction('random', [], m => Math.random());
        let result = await interperter.interpert(input);
        console.log('res: ' + result.getGlobalVariable('chocolate'));

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