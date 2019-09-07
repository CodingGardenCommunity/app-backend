const { Router } = require('express');

const { isAdmin } = require('./middlewares');
const contributors = require('./api/contributors/contributors.routes');
const faqs = require('./api/faqs/faqs.routes');
const admin = require('./api/admin/admin.routes');
const history = require('./api/history/history.routes');
const video = require('./api/video/video.routes');
const documentation = require('./api/docs/docs.routes');

const router = Router();

router.use('/contributors', contributors);
router.use('/faqs', faqs);
router.use('/admin', isAdmin, admin);
router.use('/history', history);
router.use('/video', video);
router.use('/docs', documentation);

module.exports = router;
