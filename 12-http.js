const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('<h1>Welcome to our home page!</h1>');
    }
    if (req.url === '/about') {
        res.end('<h2>This is about us</h2>');
    }
    res.end(`<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>back to home</a>`);

});

server.listen(5000);
