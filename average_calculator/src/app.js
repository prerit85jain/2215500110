const express = require('express');
const bodyParser = require('body-parser');
const numcontrollers = require('./controllers/numControllers');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/number', numcontrollers);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});