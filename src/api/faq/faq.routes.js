const router = require('express').Router();
const { getFAQ, addFAQ, removeFAQ } = require('./faq.controller');

router.get('/', getFAQ);
router.get('/:id', getFAQ);
router.post('/add', addFAQ);
router.delete('/delete/:id', removeFAQ);

module.exports = router;
