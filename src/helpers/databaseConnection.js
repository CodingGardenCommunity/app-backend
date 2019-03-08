const mongoose = require("mongoose");
const { database } = require("../config");

module.exports = mongoose.connect(
  database.uri,
  { useNewUrlParser: true },
  () => {
    process.stdout.write("\x1b[33m Connected to database \x1b[0m \n\n");
  }
);
