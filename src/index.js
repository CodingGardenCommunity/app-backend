const express = require('express');
const { home } = require('./routes');
const { server } = require('./config');
const { logger } = require('./middleware');

// ENV configuration
require('dotenv').config();

// Database connection
require('./database');

// Initialize server
const app = express();
const { port } = server;

// App middleware
app.use(express.json());
app.use(logger);

// App routes
app.use('/', home);

// Run server
app.listen(port, () => process.stdout.write(`\n\n\x1b[34m Server started on port ${port} \x1b[0m \n`));
