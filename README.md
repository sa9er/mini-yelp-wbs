# node mongoose boilerplate

## Setup

This server is expecting a `MONGO_URI` environment variable defined in a `.env` file at root level.
You can check out the schema for `User` and `Order` collections inside the directory `models`.
That will help you populate the db with initial data if needed.

## Install and run :runner:

Unsurprisingly, run 

```sh
npm i
npm start
```
inside the root directory in order to run.

## Example requests

to add a new user: `curl -d '{"name": "Jiggly", "surname": "Puff", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:3000/users`

to try to add a new user and have it fail: `curl -d '{"surname": "Chu", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:3000/users` prompts errors!

to update a user: `curl -d '{"name": "Jiggly", "surname": "Puff", "age": 3}' -H "Content-Type: application/json" -X PUT http://localhost:3000/users/5f4f5726ddde594d290c80d1`

to add an order: `curl -d '{"price": 10, "user": 2}' -H "Content-Type: application/json" -X POST http://localhost:3000/orders`

to update an order `curl -d '{"price": 12, "user": 5}' -H "Content-Type: application/json" -X PUT http://localhost:3000/orders/5`

to delete a user: `curl -X DELETE http://localhost:3000/users/5f4d7587bf290843cc1e7f95`
