const router = require('express').Router();
const controller = require('./admin.controller');

router.post('/seed', controller.seed);

module.exports = router;
