/* eslint-disable max-len */
const router = require('express').Router();
const { seed } = require('./admin.controller');

/**
 * @api {post} /admin/seed Seed all collections
 * @apiName SeedData
 * @apiGroup Admin
 * @apiPermission admin
 * @apiHeader {string} X-Admin-Secret Secret Key to seed DB.
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 401 Un-Authorized
 * {
 *  "message": "Un-Authorized",
 *  "status": 401,
 *  "stack": "Error: Un-Authorized\n    at isAdmin (C:\\app\\app-backend\\src\\middlewares\\index.js:7:19)
 *  at Layer.handle [as handle_request] (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\layer.js:95:5)
 *  at trim_prefix (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:317:13)
 *  at C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:284:7
 *  at Function.process_params (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:335:12)
 *  at next (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:275:10)
 *  at Function.handle (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:174:3)
 *  at router (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:47:12)
 *  at Layer.handle [as handle_request] (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\layer.js:95:5)
 *  at trim_prefix (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:317:13)
 *  at C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:284:7
 *  at Function.process_params (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:335:12)
 *  at next (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:275:10)
 *  at jsonParser (C:\\app\\app-backend\\node_modules\\body-parser\\lib\\types\\json.js:110:7)
 *  at Layer.handle [as handle_request] (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\layer.js:95:5)
 *  at trim_prefix (C:\\app\\app-backend\\node_modules\\express\\lib\\router\\index.js:317:13)"
 * }
 */
router.post('/seed', seed);

module.exports = router;
