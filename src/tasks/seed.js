const seedFAQs = require('./seedFaq');

if (process.env.NODE_ENV === 'development') {
  seedFAQs();
  process.exit(0);
}
