const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  const response = await fetch('https://raw.githubusercontent.com/CodingGardenCommunity/contributors/master/contributors.json');
  const data = await response.json();
  res.json(data);
});

module.exports = router;
