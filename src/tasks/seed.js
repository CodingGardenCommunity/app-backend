require('../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');

(async () => {
  try {
    await seedFAQs();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    process.exit(0);
  }
})();
