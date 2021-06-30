//Global scope
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//API routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
