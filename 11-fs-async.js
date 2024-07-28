const { readFile, writeFile, read } = require('fs');

console.log('start');
// For async operations, we use a callback (Similar to when we click a button, some function operates on the webpage)
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task');