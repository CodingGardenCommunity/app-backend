const router = require('express').Router();
const { getVideos } = require('./video.controller');

router.get('/', getVideos);

module.exports = router;
