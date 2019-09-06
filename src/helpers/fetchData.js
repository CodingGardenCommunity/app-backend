/* eslint-disable no-console */
const fetch = require('node-fetch');
const { red, green } = require('colors/safe');
const Video = require('../api/video/video.model');
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
    console.error(`[error]: ${err}`);
    return [];
  }
}

async function fetchVideosJob() {
  try {
    const video = await Video.findOne({}).sort({ date: -1 });
    // Check if db has at least one video
    if (video) {
      // Transforms date format to the Youtube-API standard.
      const lastDate = video.date.toISOString();

      const fetchedVideos = await fetchLatestYoutubeVideos({ publishedAfter: lastDate });

      if (fetchedVideos.length > 0) {
        fetchedVideos.forEach(async newVideo => {
          if (newVideo.date !== lastDate) {
            const { name } = await new Video(newVideo).save();
            console.log(green(`[cron-job] Added new video from Youtube: ${name}, at ${new Date().toISOString()}`));
          }
        });
      }
    }
  } catch (err) {
    console.error(red(`[cron-job-error] ${err}`));
  }
}

module.exports = { fetchLatestYoutubeVideos, fetchVideosJob };
