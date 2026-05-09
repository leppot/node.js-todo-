const request = require('supertest');
const app = require('../app');

async function runTests() {
  // Create a todo
  let res = await request(app).post('/todos').send({ title: "Test task" });
  console.log('Create:', res.body);
  const id = res.body.id;

  // Get all todos
  res = await request(app).get('/todos');
  console.log('Get all:', res.body);

  // Get by id
  res = await request(app).get(`/todos/${id}`);
  console.log('Get by id:', res.body);

  // Update
  res = await request(app).put(`/todos/${id}`).send({ done: true });
  console.log('Update:', res.body);

  // Delete
  res = await request(app).delete(`/todos/${id}`);
  console.log('Delete:', res.body);
}

runTests();
