const router = require('express').Router();
const { getVideos } = require('./videos.controller');

router.get('/', getVideos);
router.get('/:id', getVideos);

module.exports = router;
