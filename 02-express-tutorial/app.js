const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');


// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// set the base path to "/api/people" and make use of Express routers => which we set up in routes folder
app.use('/api/people', people);
// set the base path as "/login" for the regular login page
app.use('/login', auth)



// app.get('/api/people/:id', (req, res) => {
//     let newPeople = [...people];
//     const id = req.params;
//     if (id) {
//         newPeople.filter((people) => people.id === Number(id));
//         return res.json(newPeople);
//     }
//     res.status(200).json(newPeople);
// });


app.listen(5000, () => {
    console.log('server listening at port 5000...');
});