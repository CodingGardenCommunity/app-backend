const mongoose = require('mongoose');
const { database: { uri } } = require('../config');

module.exports = mongoose.connect(uri, { useNewUrlParser: true });
