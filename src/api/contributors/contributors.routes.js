const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Contributors 🌎',
  });
});

module.exports = router;
