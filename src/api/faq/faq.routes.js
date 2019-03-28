const router = require('express').Router();
const { getFAQ } = require('./faq.controller');

router.get('/', getFAQ);
router.get('/:id', getFAQ);


module.exports = router;
