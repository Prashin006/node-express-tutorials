let express = require('express');
const path = require('path');
const app = express();

// To use the static files like images, scripts, css etc. We require express.static to serve those resources. It is a middleware that handles caching of these resources
// It is a common convention to put all the static resources in a directory named "public"
// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.statusCode = 200;
//     // res.send('<h1>Jai Shree Ram</h1>');
//     res.sendFile(path.join(__dirname,'./navbar-app/index.html'));
//     adding to static assets in public folder
//     SSR(Server-Side Rendering) 
// });

app.all('*', (req, res) => {
    res.statusCode = 404;
    res.send('Resource Not Found');
});


app.listen(5000, () => {
    console.log(`server is listening on port 5000...`);
});

