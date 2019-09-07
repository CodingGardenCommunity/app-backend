const Video = require('./videos.model');

async function getVideos(req, res, next) {
  try {
    let response;
    if ('id' in req.params) {
      if (!/^[a-fA-F0-9]{24}$/.test(req.params.id)) throw new ReferenceError('Invalid Video ID.');
      try {
        response = [await Video.findById(req.params.id).exec()];
        if (response[0] === null) throw new ReferenceError('The requested ID does not exist.');
      } catch ({ message }) {
        throw new ReferenceError(message);
      }
    } else response = await Video.find({}).exec();

    const finalResponse = response.map(({ id, type, name, videoID, title, date, description, url, thumbnail, createdAt, updatedAt }) => ({
      type: 'video',
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

module.exports = { getVideos };
