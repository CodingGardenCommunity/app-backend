const History = require('./history.model');

async function getHistory(req, res, next) {
  try {
    let response;
    if ('id' in req.params) {
      if (!(/^[a-fA-F0-9]{24}$/.test(req.params.id))) throw new ReferenceError('Invalid History ID.');
      try {
        response = [await History.findById(req.params.id).exec()];
        if (response[0] === null) throw new ReferenceError('The requested ID does not exist.');
      } catch ({ message }) {
        throw new ReferenceError(message);
      }
    } else response = await History.find({}).exec();

    const finalResponse = response
      .map(({
        id,
        type,
        name,
        videoID,
        title,
        date,
        description,
        url,
        thumbnail,
        createdAt,
        updatedAt,
      }) => ({
        type: 'history',
        id,
        attributes: {
          type,
          name,
          videoID,
          title,
          date,
          description,
          url,
          thumbnail,
          createdAt,
          updatedAt,
        },
      }));
    return res.json(finalResponse);
  } catch (error) {
    if (error instanceof ReferenceError) res.status(404);
    return next(error);
  }
}

module.exports = { getHistory };
