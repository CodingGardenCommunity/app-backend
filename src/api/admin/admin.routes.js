const router = require('express').Router();
const { seed, fetchVideos } = require('./admin.controller');

router.post('/seed', seed);
router.post('/fetch-videos', fetchVideos);

module.exports = router;
