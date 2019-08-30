/* eslint-disable no-console */

const { schedule } = require('node-cron');
const fetchLatestYoutubeVideos = require('../helpers/fetchData');
const Video = require('../api/video/video.model');

// 59 * * * * - every hour.
// * * * * * - every minute, just for testing porpuses

schedule('* * * * *', async () => {
  try {
    const { date: lastDate } = await Video.findOne({}).sort({ createdAt: -1 });
    // lastDate is the lasted upload video date registered in DB
    const fetchedVideos = await fetchLatestYoutubeVideos({ publishedAfter: lastDate.toISOString() });

    if (fetchedVideos.length > 0) {
      fetchedVideos.forEach(async newVideo => {
        const video = new Video(newVideo);
        await video.save((err, res) => {
          if (err) throw err;
          console.log(`Added new video from Youtube: ${res.name}.`);
        });
      });
    } else {
      console.log('Nothing to add.');
    }
  } catch (err) {
    // Maybe implement a loggin system to save errors
    console.error('ERROR:', err);
  }
});
