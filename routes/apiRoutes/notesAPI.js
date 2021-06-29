const router = require('express').Router();
const { notes } = require('/data/notes')
router.get('/data/db', (req, res) => {
    res.send('Hello!');
});

module.exports = router