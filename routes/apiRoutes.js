//Require statements
const router = require('express').Router();
const store = require('../lib/store');

//GET route
router.get('/notes', (req, res) => {
    store.getNotes().then(notes => { return res.json(notes) })
        .catch(error => { res.status(500).json(error) })
});

//POST route
router.post('/notes', (req, res) => {
    store.addNote(req.body).then(note => { return res.json(note) })
        .catch(error => { res.status(500).json(error) })
})

//DELETE route
router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id).then(note => { return res.json(note) })
        .catch(error => { res.status(500).json(error) })
})

module.exports = router

