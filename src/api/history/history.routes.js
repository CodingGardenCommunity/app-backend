const router = require('express').Router();
const { getHistory } = require('./history.controller');

router.get('/', getHistory);
router.get('/:id', getHistory);

module.exports = router;
