const router = require('express').Router();
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const openApiDocumentation = require('../../APIs.json');

const options = {
  // customCssUrl: '/custom.css' // If additional options ar needed.
};

router.use('/', swaggerUi.serve);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/versions.html'));
});

router.get('/v1.0.0', swaggerUi.setup(openApiDocumentation, options));

module.exports = router;
