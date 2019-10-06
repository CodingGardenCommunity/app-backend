const router = require('express').Router();
const pubSubHubbub = require('pubsubhubbub');
const { parseString } = require('xml2js');

const { YOUTUBE_CHANNEL_ID, NODE_ENV, YOUTUBE_WEBHOOK_SECRET } = require('../config');
const { fetchVideosJob } = require('../helpers/fetchData');

// const topic = `https://www.youtube.com/xml/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
// const hub = 'https://pubsubhubbub.appspot.com/';

const url = NODE_ENV === 'production' ? 'https://api.codinggarden.community' : 'https://api-dev.codinggarden.community';
const callbackUrl = `${url}/youtube-webhook`;

const pubsub = pubSubHubbub.createServer({
  callbackUrl,
  secret: YOUTUBE_WEBHOOK_SECRET,
});

pubsub.on('feed', data => {
  const xml = data.feed.toString();

  parseString(xml, (err, result) => {
    if (err) return;

    const { entry } = result.feed;

    if (entry && entry.length !== 0) {
      const { 'yt:channelId': channelIDArray } = entry[0];
      if (channelIDArray.includes(YOUTUBE_CHANNEL_ID)) {
        fetchVideosJob();
      }
    }
  });
});

router.use('/', pubsub.listener());
module.exports = router;
