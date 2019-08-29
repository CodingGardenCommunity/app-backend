const router = require('express').Router();
const { getVideos, fetchVideos } = require('./video.controller');

router.get('/', getVideos);
router.get('/fetch', fetchVideos);
router.get('/:id', getVideos);

module.exports = router;
