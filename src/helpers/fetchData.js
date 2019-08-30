const fetch = require('node-fetch');
const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = require('../config');

async function fetchLatestYoutubeVideos(options) {
  const mrOpt = 'maxResults' in options ? `maxResults=${options.maxResults.toString()}` : `maxResults=10`;
  const paOpt = 'publishedAfter' in options ? `publishedAfter=${options.publishedAfter.toString()}` : '';
  const optUrl = [mrOpt, paOpt].join('&');
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&${optUrl}`;
  try {
    const resp = await fetch(apiUrl);
    const { items } = await resp.json();
    return items.map(({ id: { videoId: videoID }, snippet: { title, publishedAt: date, description, thumbnails: { high: { url: thumbnail } } } }) => {
      return {
        type: 'video',
        name: title,
        date,
        description,
        url: `https://www.youtube.com/watch?v=${videoID}`,
        videoID,
        thumbnail,
      };
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return [];
  }
}

module.exports = { fetchLatestYoutubeVideos };
