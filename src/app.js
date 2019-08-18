const express = require('express');
const routes = require('./routes');

// Database connection
require('./helpers/databaseConnection');

const { errorHandler, notFound, cors } = require('./middlewares');

// Initialize server
const app = express();

// App middleware
if (process.env.NODE_ENV !== 'test') {
  app.use(cors);
}

app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ message: 'Check out /contributors, /faq, /history, /docs, and /video' }));
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
