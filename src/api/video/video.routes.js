const router = require('express').Router();
const { getVideos } = require('./video.controller');

router.get('/', getVideos);
router.get('/:id', getVideos);

module.exports = router;
