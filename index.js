const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from GitHub Actions! Wilmar Gómez de la Cruz 2024-0103');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
