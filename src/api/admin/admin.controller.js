const seedFAQs = require('../../tasks/seedFaq');

async function seed(req, res) {
  try {
    await seedFAQs();
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
    res.json({
      message: error.message,
    });
  }
}

module.exports = {
  seed,
};
