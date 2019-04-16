const seedFAQs = require('./seedFaq');

if (process.env.NODE_ENV === 'development') {
  seedFAQs();
}
