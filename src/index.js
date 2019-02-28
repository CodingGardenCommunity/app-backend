const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: '👋🌎',
  });
});

app.listen(port, () => console.log(`Server starting on http://localhost:${port}`));
