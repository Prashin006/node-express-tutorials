const { readFile } = require('fs');

console.log('started first task');
readFile('./content/result-sync.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('started next task');