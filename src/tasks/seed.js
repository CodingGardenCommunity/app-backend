const seedFAQs = require('./seedFaq');

(async () => {
  if (process.env.NODE_ENV === 'development' && process.env.MONGO_URI) {
    await seedFAQs();
    process.exit(0);
  }
})();
