const { schedule } = require('node-cron');
const { fetchLatestYoutubeVideos } = require('../helpers/fetchData');
const Video = require('../api/video/video.model');

schedule('59 * * * *', async () => {
  try {
    let log = false;
    let { date: lastDate } = await Video.findOne({}).sort({ date: -1 });
    lastDate = lastDate.toISOString();

    const fetchedVideos = await fetchLatestYoutubeVideos({ publishedAfter: lastDate });
    const now = new Date().toISOString();

    if (fetchedVideos.length > 0) {
      fetchedVideos.forEach(async newVideo => {
        if (newVideo.date !== lastDate) {
          const { name } = await new Video(newVideo).save();
          // eslint-disable-next-line no-console
          console.log(`[CRON-JOB] Added new video from Youtube: ${name}, at ${now}`);
        } else {
          log = true;
        }
      });
      // eslint-disable-next-line no-console
      if (log) console.log(`[CRON-JOB] No new videos found, at ${now}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`[CRON-JOB] No new videos found, at ${now}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[CRON-JOB][ERROR] ${err}`);
  }
});
