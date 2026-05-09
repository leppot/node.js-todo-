const Todo = require('../models/todo');

// Get all todos
exports.getAll = (req, res) => {
  res.json(Todo.getAll());
};

// Get todo by id
exports.getById = (req, res) => {
  const todo = Todo.getById(Number(req.params.id));
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json(todo);
};

// Create new todo
exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const todo = Todo.create(req.body.title);
  res.status(201).json(todo);
};

// Update a todo
exports.update = (req, res) => {
  const id = Number(req.params.id);
  const { title, done } = req.body;
  const todo = Todo.update(id, title, done);
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json(todo);
};

// Delete a todo
exports.remove = (req, res) => {
  const id = Number(req.params.id);
  const ok = Todo.delete(id);
  if (!ok) return res.status(404).json({ error: "Not found" });
  res.json({ deleted: true });
};
