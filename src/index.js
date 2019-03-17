const express = require('express');

const { contributors, faq } = require('./routes');
const { server: { port } } = require('./config');

// ENV configuration
require('dotenv').config();

// Database connection
require('./helpers/databaseConnection');

// Initialize server
const app = express();

// App middleware
app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ 
  msg: 'Check out /contributors and /faq',
  'mongo-url': process.env.MONGO_URL,
  'mongo-secret': process.env.MONGO_SECRET,
  'node-env': process.env.NODE_ENV,
}));
app.use('/contributors', contributors);
app.use('/faq', faq);

// Run server
app.listen(port, () => process.stdout.write(`\n\n\x1b[34m Server started on port ${port} \x1b[0m \n`));
