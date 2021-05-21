const Location = require('../models/Location');

const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.json({ success: true, msg: 'show all locations', data: locations })
  } catch(err) {
    next(err)
  }
}

const getLocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const locations = await Location.findById(id);
    res.json({ success: true, msg: 'show selected location', data: location })
  } catch(err) {
    next(err)
  }
};

const createLocation = async (req, res, next) => {
  try {
    const { name, ratings, open, img, city_id, desc } = req.body;
    const location = await Location.create({ name, ratings, open, img, city_id, desc });

    res.json({ success: true, msg: 'show new location', data: location })
  } catch(err) {
    next(err)
  }
};

const deleteLocation = async (req, res, next) => {
  try {
    const { id } = req.params;

    const location = await Location.findByIdAndDelete(id);
    res.json({ success: true, msg: `location with id ${id} deleted`, data: location })
  } catch(err) {
    next(err) 
  }
};

const updateLocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, surname, age } = req.body;
    
    const location = await Location.findByIdAndUpdate(id, { name, surname, age }, { new: true });
    res.json({ success: true, msg: `location with id ${id} updated`, data: location })
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
  getLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation
 
}