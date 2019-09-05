/* eslint-disable no-console */
const { red, green } = require('colors/safe');
const { schedule } = require('node-cron');
const { fetchLatestYoutubeVideos } = require('../helpers/fetchData');
const Video = require('../api/video/video.model');

async function fetchVideosJob() {
  try {
    const { date } = await Video.findOne({}).sort({ date: -1 });
    // Transforms date format to the Youtube-API standard.
    const lastDate = date.toISOString();

    const fetchedVideos = await fetchLatestYoutubeVideos({ publishedAfter: lastDate });

    if (fetchedVideos.length > 0) {
      fetchedVideos.forEach(async newVideo => {
        if (newVideo.date !== lastDate) {
          const { name } = await new Video(newVideo).save();
          console.log(green(`[cron-job] Added new video from Youtube: ${name}, at ${new Date().toISOString()}`));
        }
      });
    }
  } catch (err) {
    console.error(red(`[cron-job-error] ${err}`));
  }
}

fetchVideosJob();
schedule('59 * * * *', fetchVideosJob);
