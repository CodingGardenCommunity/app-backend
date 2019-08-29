const fetch = require('node-fetch');
const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = require('../config');

function transformYoutubeResponseData({ items }) {
  return items.map(({ id: { videoID }, snippet: { title, publishedAt, description, thumbnails: { high: { url } } } }) => {
    return {
      type: 'video',
      id: videoID,
      attributes: {
        type: 'video',
        name: title,
        videoID,
        title,
        date: publishedAt,
        description,
        url: `https://www.youtube.com/watch?v=${videoID}`,
        thumbnail: url,
      },
    };
  });
}

async function fetchLatestYoutubeVideos(maxResults) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=${maxResults}`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return transformYoutubeResponseData(data);
  } catch (err) {
    if (err) throw new Error(err);
    return err;
  }
}

module.exports = fetchLatestYoutubeVideos;
