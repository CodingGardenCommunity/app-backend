const colors = require('colors/safe');

const {
  PORT,
  HOST,
} = require('./config');
const app = require('./app');

// Run server
// eslint-disable-next-line no-console
app.listen(PORT, HOST, () => console.log(colors.cyan(`Server started @ http://${HOST}:${PORT}/`)));
