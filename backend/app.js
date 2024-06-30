// Server

const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
 const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000; // Default port 3000 if PORT is not defined in .env

// Middleware setup
app.use(express.json()); // Use express.json() middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes, adjust options as needed

app.get('/', (req, res)=> {
    res.send('Hello World')
})

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
    console.log(`listening to port:`, PORT);
  });
};

server();
