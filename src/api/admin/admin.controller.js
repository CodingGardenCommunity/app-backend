const { mainSeed } = require('../../tasks/seed/seed');

async function seed(req, res, next) {
  try {
    await mainSeed();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  seed,
};
