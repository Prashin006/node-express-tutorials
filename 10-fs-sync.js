const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync();

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// If the file exists then node will overwrite it else it will create it and write into it
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);

// To append to a file we need to pass an object setting the flag parameter
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag : 'a'});

console.log('done with this task');
console.log('starting with the next one');