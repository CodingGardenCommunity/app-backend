const seedFAQs = require('./seedFaq');

(async () => {
  if (process.env.NODE_ENV === 'development') {
    await seedFAQs();
    process.exit(0);
  }
})();
