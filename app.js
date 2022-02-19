const express = require('express');
const routes = require('./routes');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use('/', routes);

app.listen(PORT, () => {
  console.log('Link to the server:');
  console.log(BASE_PATH);
});
