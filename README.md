# My To-Do App

A simple Node.js To-Do List REST API built with Express.

## How to Run

```bash
npm install
npm start
```

The app will be available at http://localhost:3000.

## API Endpoints

- `GET /todos` – List all to-dos
- `GET /todos/:id` – Get a specific to-do
- `POST /todos` ��� Create a new to-do (`{title: string}`)
- `PUT /todos/:id` – Update an existing to-do (`{title, done}`)
- `DELETE /todos/:id` – Delete a to-do

## Run Tests

```bash
npm test
```
