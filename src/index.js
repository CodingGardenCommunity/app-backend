const colors = require('colors/safe');

const { PORT, HOST } = require('./config');
const app = require('./app');

// Run server
app.listen(PORT, HOST, () => console.log(colors.cyan(`Server started @ http://${HOST}:${PORT}/`)));
