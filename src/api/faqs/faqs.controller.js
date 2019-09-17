const FAQ = require('./faqs.model');

async function getFAQs(req, res, next) {
  try {
    let response;
    if ('id' in req.params) {
      if (!/^[a-fA-F0-9]{24}$/.test(req.params.id)) throw new ReferenceError('Invalid FAQ ID.');
      try {
        response = [await FAQ.findById(req.params.id).exec()];
        if (response[0] === null) throw new ReferenceError('The requested ID does not exist.');
      } catch ({ message }) {
        throw new ReferenceError(message);
      }
    } else response = await FAQ.find({}).exec();

    const finalResponse = response.map(({ id, question, answer, createdAt, updatedAt }) => ({
      type: 'faq',
      id,
      attributes: {
        question,
        answer,
        createdAt,
        updatedAt,
      },
    }));
    res.json(finalResponse);
  } catch (error) {
    if (error instanceof ReferenceError) res.status(404);
    next(error);
  }
}

async function addFAQ(req, res, next) {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) throw new ReferenceError('Make sure your request includes a question and answer.');
    const { _id } = await new FAQ({ question, answer }).save();
    res.json({
      status: 200,
      message: `FAQ with ID: ${_id} has been added successfully to the DB.`,
    });
  } catch (error) {
    if (error instanceof ReferenceError) res.status(404);
    next(error);
  }
}

async function removeFAQ(req, res, next) {
  try {
    const { id: _id } = req.params;
    if (!/^[a-fA-F0-9]{24}$/.test(_id)) throw new ReferenceError('Invalid FAQ ID.');
    const deletedFAQ = await FAQ.deleteOne({ _id });
    if (deletedFAQ.deletedCount === 0) throw new ReferenceError('There is no FAQ to delete with that ID.');
    res.json({
      status: 200,
      message: 'FAQ removed successfully from DB.',
    });
  } catch (error) {
    if (error instanceof ReferenceError) res.status(404);
    next(error);
  }
}

module.exports = {
  getFAQs,
  addFAQ,
  removeFAQ,
};
