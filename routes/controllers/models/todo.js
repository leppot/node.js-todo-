const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(__dirname, '../data/todos.json');

function readData() {
  try {
    const raw = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = {
  getAll() {
    return readData();
  },
  getById(id) {
    return readData().find(t => t.id === id);
  },
  create(title) {
    const todos = readData();
    const todo = { id: Date.now(), title, done: false };
    todos.push(todo);
    writeData(todos);
    return todo;
  },
  update(id, title, done) {
    const todos = readData();
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;
    if (title !== undefined) todo.title = title;
    if (done !== undefined) todo.done = done;
    writeData(todos);
    return todo;
  },
  delete(id) {
    let todos = readData();
    const origLen = todos.length;
    todos = todos.filter(t => t.id !== id);
    writeData(todos);
    return todos.length !== origLen;
  }
};
