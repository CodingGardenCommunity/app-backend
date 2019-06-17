const fetch = require('node-fetch');
const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = require('../config');

function transformYoutubeResponseData(data) {
  return data.items.map((item) => {
    const { title, publishedAt, description } = item.snippet;
    return {
      type: 'video',
      name: title,
      videoID: item.id.videoId,
      date: publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: item.snippet.thumbnails.high,
      title,
      description,
    };
  });
}

export default async function fetchLatestYoutubeVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet&order=date&maxResults=50`;
  try {
    const resp = await fetch(url);
    return transformYoutubeResponseData(resp.json());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
}
