const router = require('express').Router();
const { isAdmin } = require('../../middlewares');
const { getFAQs, addFAQ, removeFAQ } = require('./faqs.controller');

router.get('/', getFAQs);
router.get('/:id', getFAQs);
router.post('/', isAdmin, addFAQ);
router.delete('/:id', isAdmin, removeFAQ);

module.exports = router;
