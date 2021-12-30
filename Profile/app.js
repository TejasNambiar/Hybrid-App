const express = require('express');
const routes = require('./Routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express();
const PORT = 4000;
app.use(bodyParser.json())
//initializing routes
app.use('/api',routes);
mongoose.connect('mongodb://localhost/testingProfile');
mongoose.Promise = global.Promise

// listen for requests
app.listen(PORT, () =>{
    console.log('listening at '+PORT);
});