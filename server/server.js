const express = require('express');
const app = express();
const PORT = 5000;

app.post('/upload', (req, res) => {
  console.log('upload called');
  res.json({ result: 'success'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
