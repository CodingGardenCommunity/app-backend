require('../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');
const seedHistories = require('./seedHistory');

(async () => {
  try {
    await seedFAQs();
    await seedHistories();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    process.exit(0);
  }
})();
