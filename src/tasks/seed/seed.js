require('../../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');
const seedHistories = require('./seedHistory');
const seedVideos = require('./seedVideos');

async function mainSeed() {
  try {
    await seedFAQs();
    await seedHistories();
    await seedVideos();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

module.exports = {
  mainSeed,
};
