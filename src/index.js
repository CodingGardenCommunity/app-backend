const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: '👋🌎',
  });
});

app.get('/contributors', async (req, res) => {
  const response = await fetch('https://raw.githubusercontent.com/CodingGardenCommunity/contributors/master/contributors.json');
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => console.log(`Server starting on http://localhost:${port}`));
