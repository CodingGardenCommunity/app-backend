const fetch = require('node-fetch');

module.exports = async function getContributors(req, res) {
  const contribURL = 'https://raw.githubusercontent.com/CodingGardenCommunity/contributors/master/contributors.json';
  try {
    const response = await fetch(contribURL);
    const data = await response.json();
    return res.json(data);
  } catch ({ message }) {
    return res.status(400).json({ status: 400, message });
  }
};
