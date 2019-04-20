const mongoose = require('mongoose');

const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
