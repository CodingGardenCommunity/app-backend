const express = require('express');
const contributors = require('./Contributor/contributor.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/contributors', contributors);

app.get('/', (req, res) => {
  res.json({
    message: '👋🌎',
  });
});

app.listen(port, () => console.log(`Server starting on http://localhost:${port}`));
