const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) + Number(b) });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}