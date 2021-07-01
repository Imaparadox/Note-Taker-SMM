//Require statements
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});