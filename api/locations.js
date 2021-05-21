const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/locations');

const api = express.Router();

api
  .route("/")
  .get(getUsers)
  .post(createUser)

api
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

// locahost:5000/users/:id/orders

module.exports = api;