const path = require('path');

function sendVersionMarkup(req, res) {
  res.sendFile(path.join(__dirname, '/versions.html'));
}

module.exports = { sendVersionMarkup };
