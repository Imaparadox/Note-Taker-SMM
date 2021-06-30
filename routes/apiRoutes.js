const router = require('express').Router();
const store = require('../data/store');
//Deconstructor for notes
// const { notes } = require('../data/notes.json');

router.get('/notes', (req, res) => {
    store.getNotes().then(notes => { return res.json(notes) })
        .catch(error => { res.status(500).json(error) })
});

//POST route
router.post('/notes', (req, res) => {
    store.addNote().then(notes => { return res.json(notes) })
        .catch(error => { res.status(400).json(error) })
})

//DELETE route


module.exports = router