const router = require('express').Router();
const { seed } = require('./admin.controller');

router.post('/seed', seed);

module.exports = router;
