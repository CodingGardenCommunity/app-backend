const router = require('express').Router();
const getContributors = require('./contributors.controller');

/**
 * @api {get} /contributors Get all Contributors
 * @apiName GetContributors
 * @apiGroup Contributor
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
 * @apiSuccessExample {json} Success-Response:
 * [
 *  {
 *   "type": "contributor",
 *   "id": "w3cj",
 *   "attributes": {
 *    "username": "w3cj",
 *    "name": "CJ",
 *    "image": "https://avatars1.githubusercontent.com/u/14241866",
 *    "countryCode": "USA",
 *    "active": true,
 *    "joined": "2018-12-16",
 *    "teamIds": [
 *     0,
 *     1,
 *     2,
 *     3,
 *     4
 *    ]
 *   }
 *  },
 *  {
 *   "type": "contributor",
 *   "id": "spiray",
 *   "attributes": {
 *    "username": "spiray",
 *    "name": "YSpira",
 *    "image": "https://avatars0.githubusercontent.com/u/26689583",
 *    "countryCode": "USA",
 *    "active": true,
 *    "joined": "2018-12-16",
 *    "teamIds": [
 *     0,
 *     3
 *    ]
 *   }
 *  }
 *  ...
 * ]
 * @apiError InternalServerError {string}
 */
router.get('/', getContributors);

/**
 * @api {get} /contributors/:id Get Contributor by ID
 * @apiName GetContributorByID
 * @apiGroup Contributor
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
 * @apiSuccessExample {json} Success-Response:
 * [
 *  {
 *   "type": "contributor",
 *   "id": "w3cj",
 *   "attributes": {
 *    "username": "w3cj",
 *    "name": "CJ",
 *    "image": "https://avatars1.githubusercontent.com/u/14241866",
 *    "countryCode": "USA",
 *    "active": true,
 *    "joined": "2018-12-16",
 *    "teamIds": [
 *     0,
 *     1,
 *     2,
 *     3,
 *     4
 *    ]
 *   }
 *  }
 * ]
 */
router.get('/:id', getContributors);

module.exports = router;
