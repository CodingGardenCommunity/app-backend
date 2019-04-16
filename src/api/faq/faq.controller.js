const FAQ = require('./faq.model');

async function getFAQ(req, res) {
  try {
    let response;
    if ('id' in req.params) {
      try {
        response = [await FAQ.findById(req.params.id).exec()];
        if (response[0] === null) throw new ReferenceError('The requested ID does not exist.');
      } catch ({ message }) { throw new ReferenceError(message); }
    } else response = await FAQ.find({}).exec();

    const finalResponse = response
      .map(({
        id,
        question,
        answer,
        createdAt,
        updatedAt,
      }) => ({
        data: {
          type: 'faq',
          id,
          attributes: {
            question,
            answer,
            createdAt,
            updatedAt,
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
