const express = require('express');

const { contributors, faq } = require('./routes');
const { server: { port, host } } = require('./config');

// ENV configuration
require('dotenv').config();

// Database connection
require('./helpers/databaseConnection')
  .then(
    () => process.stdout.write('\x1b[33m Connected to database \x1b[0m \n\n'),
    err => process.stdout.write(`\x1b[33m ${err} \x1b[0m \n\n`),
  );

// Initialize server
const app = express();

// App middleware
app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ msg: 'Check out /contributors and /faq' }));
app.use('/contributors', contributors);
app.use('/faq', faq);

// Run server
app.listen(port, host, () => process.stdout.write(`\n\n\x1b[34m Server started @ http://${host}:${port}/\x1b[0m \n`));
