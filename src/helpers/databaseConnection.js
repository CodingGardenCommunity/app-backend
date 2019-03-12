const mongoose = require('mongoose');
const { database: { uri } } = require('../config');

module.exports = mongoose.connect(
  uri, { useNewUrlParser: true },
  () => process.stdout.write('\x1b[33m Connected to database \x1b[0m \n\n'),
);
