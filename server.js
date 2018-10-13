const express = require('express');
const app = express();

const PORT = process.env.PORT || 5200;

app.use(express.static('build'));

app.listen(PORT, () =>
  console.log(`App is Runing http://localhost:${PORT} ...`),
);
