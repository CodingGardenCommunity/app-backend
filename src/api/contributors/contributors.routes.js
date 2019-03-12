const router = require('express').Router();
const getContributors = require('./contributors.controller');

router.get('/', getContributors);

module.exports = router;
