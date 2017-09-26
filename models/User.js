const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  alpha: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
