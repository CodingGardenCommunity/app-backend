require('../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');

(async () => {
  try {
    await seedFAQs();
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
})();
