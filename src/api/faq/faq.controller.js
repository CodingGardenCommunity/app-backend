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

async function addFAQ(req, res) {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) throw new ReferenceError('Make sure your request includes a question and answer.');
    await new FAQ({ question, answer }).save();
    return res.json({ status: 200, message: 'FAQ added successfully to DB.' });
  } catch (error) {
    const {
      message,
    } = error;
    const status = error instanceof ReferenceError ? 400 : 500;

    return res.status(status).json({
      status,
      message,
    });
  }
}

async function removeFAQ(req, res) {
  try {
    const { id: _id } = req.params;
    const deletedFAQ = await FAQ.deleteOne({ _id });
    if (deletedFAQ.deletedCount === 0) throw new ReferenceError('There is no FAQ to delete with that ID.');
    return res.json({ status: 200, message: 'FAQ removed successfully from DB.' });
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

module.exports = { getFAQ, addFAQ, removeFAQ };
