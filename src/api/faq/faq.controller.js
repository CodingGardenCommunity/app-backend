const mongoose = require('mongoose');

require('./faq.model');

const FAQ = mongoose.model('faqs');

async function getFAQ(req, res) {
  try {
    let response;
    if ('id' in req.params) {
      try {
        response = [await FAQ.findById(req.params.id).exec()];
      } catch ({ message }) { throw new ReferenceError(message); }
    } else response = await FAQ.find({}).exec();

    const finalResponse = response
      .map(({
        id,
        question,
        answer,
        dateUpdated,
      }) => ({
        data: {
          type: 'faq',
          id,
          attributes: {
            question,
            answer,
            dateUpdated,
          },
        },
      }));
    return res.json(finalResponse);
  } catch (error) {
    const {
      message,
    } = error;
    const status = error instanceof ReferenceError ? 404 : 500;

    return res.status(status).json({
      status,
      message,
    });
  }
}

module.exports = { getFAQ };
