const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config')

const port = process.env.PORT || config.port;

const router = require('./routes/route1');
const app = express();

/**
 * 
 * Middlewares section
 * 
 */

// Cors
app.use(cors());

// setting up api routes
app.use('/api', router );

// create server
const server = app.listen(port, function () {
    console.log('server started ....');
});