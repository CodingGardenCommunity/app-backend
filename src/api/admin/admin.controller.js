const { mainSeed } = require('../../tasks/seed/seed');

/**
 * @api {post} /admin/seed Seed all collections
 * @apiName SeedData
 * @apiGroup Admin
 * @apiPermission admin
 * @apiHeader {string} X-Admin-Secret Secret Key to seed DB.
 */

async function seed(req, res, next) {
  try {
    await mainSeed();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  seed,
};
