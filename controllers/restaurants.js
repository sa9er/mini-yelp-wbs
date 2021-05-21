const Restaurant = require('../models/Restaurant');

const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().populate('city_id');
    res.json({ success: true, msg: 'show all restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById().populate('city_id');
    res.json({ success: true, msg: 'show selected restaurant', data: restaurant })
  } catch(err) {
    next(err)
  }
};

const createRestaurant = async (req, res, next) => {
  try {
    const { name, ratings, open, img, city_id, desc } = req.body;
    const restaurant = await Restaurant.create({ name, ratings, open, img, city_id, desc });

    res.json({ success: true, msg: 'show new restaurant', data: restaurant })
  } catch(err) {
    next(err)
  }
};

const deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findByIdAndDelete(id);
    res.json({ success: true, msg: `restaurant with id ${id} deleted`, data: restaurant })
  } catch(err) {
    next(err) 
  }
};

const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, surname, age } = req.body;
    
    const restaurant = await Restaurant.findByIdAndUpdate(id, { name, surname, age }, { new: true });
    res.json({ success: true, msg: `user with id ${id} updated`, data: restaurant })
  } catch(err) {
    next(err)
  }
};

// const getUserOrders = async (req, res, next) => {
//   // ?price[lte]=2000
//   try {
//     const { id } = req.params;
//     const queryStr = JSON.stringify(req.query).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

//     const orders = await Order.find({ userId: ObjectId(id), ...JSON.parse(queryStr) })
//     res.json({ success: true, msg: `orders of user with user id ${id} retrieved`, data: orders })
//   } catch(err) {
//     next(err)
//   }
// };


module.exports = {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
 
}