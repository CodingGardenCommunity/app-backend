const fetch = require('node-fetch');

/**
 * @api {get} /contributors Get all Contributors
 * @apiName GetContributors
 * @apiGroup Contributor
 * @apiExample {curl} Example Usage:
 * curl -i https://api-dev.coding.garden/contributors
 *
 * @apiSuccess {Object[]} response Contributor List.
 * @apiSuccess {String} response.type Data Type.
 * @apiSuccess {String} response.id Record ID from DB.
 * @apiSuccess {Object} response.attributes Contributor Data.
 * @apiSuccess {String} response.attributes.username Contributor ID.
 * @apiSuccess {String} response.attributes.name Contributor Name.
 * @apiSuccess {String} response.attributes.image Contributor Avatar URL.
 * @apiSuccess {String} response.attributes.countryCode Contributor Country Code.
 * @apiSuccess {Boolean} response.attributes.active Contributor Active.
 * @apiSuccess {Date} response.attributes.joined Contributor Joined Project.
 * @apiSuccess {Number[]} response.attributes.teamIds Contributor Project Teams.
 */

/**
 * @api {get} /contributors/:id Get Contributor by ID
 * @apiName GetContributorByID
 * @apiGroup Contributor
 * @apiExample {curl} Example Usage:
 * curl -i https://api-dev.coding.garden/contributors/:id
 *
 * @apiParam {String} id The Contributor's ID.
 *
 * @apiSuccess {Object[]} response Contributor List.
 * @apiSuccess {String} response.type Data Type.
 * @apiSuccess {String} response.id Record ID from DB.
 * @apiSuccess {Object} response.attributes Contributor Data.
 * @apiSuccess {String} response.attributes.username Contributor ID.
 * @apiSuccess {String} response.attributes.name Contributor Name.
 * @apiSuccess {String} response.attributes.image Contributor Avatar URL.
 * @apiSuccess {String} response.attributes.countryCode Contributor Country Code.
 * @apiSuccess {Boolean} response.attributes.active Contributor Active.
 * @apiSuccess {Date} response.attributes.joined Contributor Joined Project.
 * @apiSuccess {Number[]} response.attributes.teamIds Contributor Project Teams.
 */

module.exports = async function getContributors(req, res, next) {
  const contribURL = 'https://raw.githubusercontent.com/CodingGardenCommunity/contributors/master/contributors.json';
  try {
    const response = await fetch(contribURL);
    let data = await response.json();

    if ('id' in req.params) {
      const individualData = data.filter(({ github: id }) => id === req.params.id);
      if (individualData.length > 0) data = individualData;
      else throw new RangeError('There is no contributor with the ID that you requested.');
    }

    const finalResponse = data
      .sort((a, b) => {
        if (a.active && !b.active) return -1;
        if (!a.active && b.active) return 1;
        return new Date(a.joined) - new Date(b.joined);
      })
      .map(({
        name,
        github: username,
        image,
        countryCode,
        teamIds,
        active,
        joined,
      }) => ({
        type: 'contributor',
        id: username,
        attributes: {
          username,
          name,
          image,
          countryCode,
          active,
          joined,
          teamIds,
        },
      }));
    res.json(finalResponse);
  } catch (error) {
    if (error instanceof RangeError) res.status(404);
    next(error);
  }
};
