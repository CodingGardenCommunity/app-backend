const express = require('express');

const routes = require('./routes');

// Database connection
require('./helpers/databaseConnection');

const { errorHandler, notFound } = require('./middlewares');

// Initialize server
const app = express();

// App middleware
app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ msg: 'Check out /contributors, /faq, and /history' }));
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
