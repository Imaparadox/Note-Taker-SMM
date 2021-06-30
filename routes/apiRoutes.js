const router = require('express').Router();
const store = require('../data/store');

router.get('/notes', (req, res) => {
    store.getNotes().then(notes => { return res.json(notes) })
    .catch(error => {res.status(500).json(error)})
});

//POST route

//DELETE


module.exports = router