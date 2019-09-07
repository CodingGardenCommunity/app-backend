const router = require('express').Router();
const { serve, setup } = require('swagger-ui-express');
const { sendVersionMarkup, redirectToLatestAPIVersion } = require('./docs.controller');
const openApiDocumentation = require('../../../docs/APIs.json');

const options = {
  // customCssUrl: '/custom.css' // If additional options are needed.
};

router.use('/', serve);

router.get('/', redirectToLatestAPIVersion);
router.get('/versions', sendVersionMarkup);
router.get('/v1', setup(openApiDocumentation, options));

module.exports = router;
