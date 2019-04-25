require('../helpers/databaseConnection');

const seedFAQs = require('./seedFaq');

(async () => {
  try {
    await seedFAQs();
  } catch (error) {
<<<<<<< HEAD
    process.stdout.write(error);
=======
    // eslint-disable-next-line no-console
    console.log(error);
>>>>>>> 05c1f18ff2db6fd3bbe844ac492eb0dbbf2a79a0
  } finally {
    process.exit(0);
  }
})();
