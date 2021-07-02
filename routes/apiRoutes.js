const router = require('express').Router();
const store = require('../data/store');
//Deconstructor for notes
// const { notes } = require('../data/notes.json');

//router.get('/notes', (req, res) => {
//let results = notes;
// if (req.query) {
//   results = filterByQuery(req.query, results);
// }
// res.json(results);
// console.log(results);
//});

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


module.exports = router

//readFileAsync and the writeFileAsync