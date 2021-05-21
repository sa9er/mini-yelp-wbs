const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require('../controllers/restaurants');

const api = express.Router();

api
  .route("/")
  .get(getRestaurants)
  .post(createRestaurant)

api
  .route('/:id')
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant)

// locahost:5000/users/:id/orders

module.exports = api;