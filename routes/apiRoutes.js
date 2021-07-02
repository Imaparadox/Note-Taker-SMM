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
    store.removeNote(req.body).then(note => { return res.json(note) })
        .catch(error => { res.status(500).json(error) })
})

// Delete a candidate
// app.delete('/notes/:id', (req, res) => {
//     const sql = `DELETE FROM candidates WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.statusMessage(400).json({ error: res.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Candidate not found'
//         });
//       } else {
//         res.json({
//           message: 'deleted',
//           changes: result.affectedRows,
//           id: req.params.id
//         });
//       }
//     });
//   });

module.exports = router

