const router = require('express').Router();
const pubSubHubbub = require('pubsubhubbub');
const { parseString } = require('xml2js');

const { YOUTUBE_CHANNEL_ID, YOUTUBE_WEBHOOK_SECRET: secret } = require('../config');
const { fetchVideosJob } = require('../helpers/fetchData');

let lastestVideoID;

const pubsub = pubSubHubbub.createServer({ secret });

const fetchVideos = () => setTimeout(fetchVideosJob, 30000);

pubsub.on('feed', data => {
  const xml = data.feed.toString();

  parseString(xml, (err, result) => {
    if (err) return;

    const { entry } = result.feed;

    if (entry && entry.length !== 0) {
      const { 'yt:channelId': channelID, 'yt:videoId': videoID } = entry[0];
      if (YOUTUBE_CHANNEL_ID === channelID[0] && lastestVideoID !== videoID[0]) {
        [lastestVideoID] = videoID;
        fetchVideos();
      }
    }
  });
});

router.use('/', pubsub.listener());
module.exports = router;
