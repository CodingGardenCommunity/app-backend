const { schedule } = require('node-cron');
const { fetchVideosJob } = require('../helpers/fetchData');

fetchVideosJob();
schedule('59 * * * *', fetchVideosJob);
