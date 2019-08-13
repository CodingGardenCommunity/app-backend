const router = require('express').Router();
const { isAdmin } = require('../../middlewares');
const { getFAQ, addFAQ, removeFAQ } = require('./faq.controller');

router.get('/', getFAQ);
router.get('/:id', getFAQ);
router.post('/', isAdmin, addFAQ);
router.delete('/:id', isAdmin, removeFAQ);

module.exports = router;
