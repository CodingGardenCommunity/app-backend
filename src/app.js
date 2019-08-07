const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');

// Database connection
require('./helpers/databaseConnection');

const { errorHandler, notFound } = require('./middlewares');

const openApiDocumentation = require('../Swag/swag');

// Initialize server
const app = express();

// App middleware
app.use(express.json());
app.use('/apiDocs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

// App routes
app.get('/', (req, res) => res.json({ msg: 'Check out /contributors, /faq, /history and /video' }));
app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
