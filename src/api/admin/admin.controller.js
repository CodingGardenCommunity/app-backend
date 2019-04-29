const seedFAQs = require('../../tasks/seedFaq');

async function seed(req, res, next) {
  try {
    await seedFAQs();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

module.exports = { seed };
