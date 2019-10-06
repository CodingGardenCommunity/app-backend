const { Router } = require('express');

const { isAdmin } = require('./middlewares');
const contributors = require('./api/contributors/contributors.routes');
const faqs = require('./api/faqs/faqs.routes');
const admin = require('./api/admin/admin.routes');
const history = require('./api/history/history.routes');
const videos = require('./api/videos/videos.routes');
const documentation = require('./api/docs/docs.routes');
const youtubeWebhook = require('./tasks/youtubeWebhook');

const router = Router();

router.use('/contributors', contributors);
router.use('/faqs', faqs);
router.use('/admin', isAdmin, admin);
router.use('/history', history);
router.use('/videos', videos);
router.use('/docs', documentation);
router.use('/youtube-webhook', youtubeWebhook);

module.exports = router;
