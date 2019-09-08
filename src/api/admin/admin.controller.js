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
    const { message: info, error } = await fetchVideosJob();

    const status = error ? 500 : 200;
    const message = error || info;

    res.status(status).json({
      status,
      message,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  seed,
  fetchVideos,
};
