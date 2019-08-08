const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const { sendVersionMarkup } = require('./doc.controller');
const openApiDocumentation = require('../../../docs/APIs.json');

const options = {
  // customCssUrl: '/custom.css' // If additional options are needed.
};

router.use('/', swaggerUi.serve);

router.get('/', sendVersionMarkup);
router.get('/v1.0.0', swaggerUi.setup(openApiDocumentation, options));

module.exports = router;
