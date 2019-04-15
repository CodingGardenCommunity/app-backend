const mongoose = require('mongoose');

require('./faq.model');

const FAQ = mongoose.model('faqs');

async function getFAQ(req, res) {
  try {
    const queryAll = FAQ.find({});
    const faqData = await queryAll.exec();
    let response = faqData;
    if ('id' in req.params) {
      response = [faqData.find(({ id }) => id === req.params.id)];
      if (response[0] === undefined) throw new RangeError('There is no FAQ with the ID that you requested.');
    }

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
    const status = error instanceof RangeError ? 404 : 500;

    return res.status(status).json({
      status,
      message,
    });
  }
}

module.exports = { getFAQ };
