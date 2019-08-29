const path = require('path');

const latestAPIVersion = 'v1';

function sendVersionMarkup(req, res) {
  res.sendFile(path.join(__dirname, '/versions.html'));
}

function redirectToLatestAPIVersion(req, res) {
  res.redirect(latestAPIVersion);
}

module.exports = { sendVersionMarkup, redirectToLatestAPIVersion };
