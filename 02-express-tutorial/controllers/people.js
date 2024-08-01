let { people } = require('../data');

// GET 
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

// POST
const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide a name value!' });
    }
    res.status(201).json({ success: true, person: name });
}

// UPDATE
const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id} found` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
}

// DELETE
const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id} exists` });
    }
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
}

// POST for /api/people/postman route
const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please enter valid credentials!!!' });
    }
    res.status(201).json({ success: true, data: [...people, name] });
}

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
    createPersonPostman
};