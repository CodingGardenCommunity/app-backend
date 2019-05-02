require('../helpers/databaseConnection');

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

(async () => {
  try {
    await mainSeed();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    process.exit(0);
  }
})();

module.exports = {
  mainSeed,
};
