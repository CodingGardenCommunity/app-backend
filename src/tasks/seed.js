require('../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');

(async () => {
  try {
    await seedFAQs();
  } catch (error) {
    process.stdout.write(error);
  } finally {
    process.exit(0);
  }
})();
