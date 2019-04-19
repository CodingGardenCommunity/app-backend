const express = require('express');

// ENV configuration
require('dotenv').config();

const { contributors, faq, admin } = require('./routes');
const { server: { port, host } } = require('./config');

// Database connection
require('./helpers/databaseConnection');

const { isAdmin } = require('./middlewares');

// Initialize server
const app = express();

// App middleware
app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ msg: 'Check out /contributors and /faq' }));
app.use('/contributors', contributors);
app.use('/faq', faq);
app.use('/admin', isAdmin, admin);

// Run server
app.listen(port, host, () => process.stdout.write(`\n\n\x1b[34m Server started @ http://${host}:${port}/\x1b[0m \n`));
