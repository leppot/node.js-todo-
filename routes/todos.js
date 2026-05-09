const express = require('express');
const router = express.Router();
const controller = require('../controllers/todosController');

// List all todos
router.get('/', controller.getAll);

// Get one todo
router.get('/:id', controller.getById);

// Create todo
router.post('/', controller.create);

// Update todo
router.put('/:id', controller.update);

// Delete todo
router.delete('/:id', controller.remove);

module.exports = router;
