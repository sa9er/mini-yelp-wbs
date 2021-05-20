const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new Schema({

  name: {
    type: String,   
    required: [true, 'Please add a name'],
    maxlength: [75, 'The name can be max 75 chars long']
  }
});

// User --> users
// Movie --> movies
module.exports = mongoose.model('Location', LocationSchema);