const { red, green } = require('colors/safe');
const { schedule } = require('node-cron');
const { fetchLatestYoutubeVideos } = require('../helpers/fetchData');
const Video = require('../api/video/video.model');

schedule('59 * * * *', async () => {
  try {
    let { date: lastDate } = await Video.findOne({}).sort({ date: -1 });
    lastDate = lastDate.toISOString(); // Transforms date formart to the Youtube-API Standar.

    const fetchedVideos = await fetchLatestYoutubeVideos({ publishedAfter: lastDate });
    const now = new Date().toISOString();

    if (fetchedVideos.length > 0) {
      fetchedVideos.forEach(async newVideo => {
        if (newVideo.date !== lastDate) {
          const { name } = await new Video(newVideo).save();
          // eslint-disable-next-line no-console
          console.log(green(`[cron-job] Added new video from Youtube: ${name}, at ${now}`));
        }
      });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(red(`[cron-job-error] ${err}`));
  }
});
