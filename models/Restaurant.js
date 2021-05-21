const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [75, 'The name can be max 75 chars long']
  },
  ratings: {
    type: Number,
    required: [true, 'Please add a surname'],
    maxlength: [75, 'The surname can be max 75 chars long']
  },
  open: {
    type: String
  },
  img: {
    type: String
  },
  city_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Location'
  }
});

// User --> users
// Movie --> movies
module.exports = mongoose.model('Restaurant', RestaurantSchema);