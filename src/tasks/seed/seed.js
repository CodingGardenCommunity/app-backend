require('../../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');
const seedHistories = require('./seedHistory');

async function mainSeed() {
  try {
    await seedFAQs();
    await seedHistories();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

module.exports = {
  mainSeed,
};
