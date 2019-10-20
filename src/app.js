const express = require('express');
const routes = require('./routes');

const { fetchVideosJob } = require('./helpers/fetchData');

// Database connection
require('./helpers/databaseConnection');

// Fetch new video once when app starts.
if (process.env.NODE_ENV !== 'test') fetchVideosJob();

const { errorHandler, notFound, cors } = require('./middlewares');

// Initialize server
const app = express();

// App middleware
if (process.env.NODE_ENV !== 'test') {
  app.use(cors);
}

app.use(express.json());

// App routes
app.get('/', (req, res) => res.json({ message: 'Check out /contributors, /faqs, /history, /docs, and /videos' }));
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
