const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/todos', todosRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the ToDo API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
