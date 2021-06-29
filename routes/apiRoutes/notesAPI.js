const { notes } =require('/data/db')
app.get('/data/db', (req, res) => {
    res.send('Hello!');
  });

  module.exports = notes