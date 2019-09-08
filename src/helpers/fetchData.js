/* eslint-disable no-console */
const fetch = require('node-fetch');
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
      // Test this line!
      const errors = error.errors.map(err => err.reason).join(', ');
      return {
        error: errors,
      };
    }

    if (!items) {
      return [];
    }

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
  } catch (error) {
    return {
      error,
    };
  }
}

async function fetchVideosJob() {
  try {
    const video = await Video.findOne({}).sort({
      date: -1,
    });
    // Check if db has at least one video
    if (!video) {
      return {
        message: `Video database is empty.`,
      };
    }

    // Transforms date format to the Youtube-API standard.
    const lastDate = video.date.toISOString();
    const fetchedVideos = await fetchLatestYoutubeVideos({
      publishedAfter: lastDate,
    });

    if (fetchedVideos.error) {
      return {
        error: `Fetch error: ${fetchedVideos.error}.`,
      };
    }

    if (fetchedVideos.length === 0) {
      return {
        message: `Youtube API returned an empty array.`,
      };
    }

    let savedVideos = 0;

    fetchedVideos.forEach(async newVideo => {
      if (newVideo.date !== lastDate) {
        savedVideos += 1;
        try {
          await new Video(newVideo).save();
        } catch (error) {
          throw error;
        }
      }
    });
    if (savedVideos === 0) {
      return {
        message: `Video DB up to date.`,
      };
    }
    return {
      message: `Saved ${savedVideos} new videos`,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

module.exports = {
  fetchLatestYoutubeVideos,
  fetchVideosJob,
};
