const fetch = require('node-fetch');
const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = require('../config');

async function fetchLatestYoutubeVideos({ maxResults, publishedAfter }) {
  const mrOpt = maxResults ? `maxResults=${maxResults}` : '';
  const paOpt = publishedAfter ? `publishedAfter=${publishedAfter}` : '';
  const optUrl = [mrOpt, paOpt].filter(Boolean).join('&') || '';
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&${optUrl}`;
  try {
    const resp = await fetch(apiUrl);
    const { items, error } = await resp.json();

    if (error) {
      error.errors.forEach(({ reason }) => {
        // eslint-disable-next-line no-console
        console.error(`[fetch-error] ${reason}`);
      });
      return [];
    }
    if (items) {
      return items.map(({ id: { videoId: videoID }, snippet: { title: name, publishedAt: date, description, thumbnails: { high: { url: thumbnail } } } }) => {
        return {
          name,
          date,
          description,
          url: `https://www.youtube.com/watch?v=${videoID}`,
          videoID,
          thumbnail,
        };
      });
    }
    return [];
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[error]: ${err}`);
    return [];
  }
}

module.exports = { fetchLatestYoutubeVideos };
