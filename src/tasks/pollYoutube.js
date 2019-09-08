/* eslint-disable no-console */
const { schedule } = require('node-cron');
const { fetchVideosJob } = require('../helpers/fetchData');

// Probably this won't be used anymore but works on dev now.
const runJob = async () => {
  const { error, message } = await fetchVideosJob();
  if (error) console.error(error);
  if (message) console.log(message);
};

runJob();
schedule('59 * * * *', runJob);
