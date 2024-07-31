// GLOBALS - NO WINDOW
// __dirname => path to curr directory
// __filename => filename
// require => function to use modules (CommonJS)
// module => info about curr module (file)
// process => info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("Hello, World!");
}, 1000);