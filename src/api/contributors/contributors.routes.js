const router = require('express').Router();
const getContributors = require('./contributors.controller');

router.get('/', getContributors);
router.get('/:id', getContributors);

module.exports = router;
