const router = require('express').Router();
const {
  getAllFAQs,
  addFAQ,
  deleteFAQ,
  updateFAQ,
} = require('./faq.controller');

router.get('/', getAllFAQs);
router.post('/add', addFAQ);
router.delete('/:id', deleteFAQ);
router.put('/:id', updateFAQ);

module.exports = router;
