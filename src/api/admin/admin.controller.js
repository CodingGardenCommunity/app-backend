const { mainSeed } = require('../../tasks/seed/seed');
const { fetchVideosJob } = require('../../helpers/fetchData');

async function seed(req, res, next) {
  try {
    await mainSeed();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

async function fetchVideos(req, res, next) {
  try {
    // eslint-disable-next-line no-console
    console.log('Manual fetch.');
    await fetchVideosJob();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  seed,
  fetchVideos,
};
