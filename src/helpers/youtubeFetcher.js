const fetch = require('node-fetch');
const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = require('../config');

function transformYoutubeResponseData({ items }) {
  return items.map(({ snippet: { id: { videoID }, title, publishedAt, description, thumbnails: { high } } }) => {
    return {
      type: 'video',
      name: title,
      date: publishedAt,
      url: `https://www.youtube.com/watch?v=${videoID}`,
      thumbnail: high,
      videoID,
      title,
      description,
    };
  });
}

export default async function fetchLatestYoutubeVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=50`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return transformYoutubeResponseData(data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
}
