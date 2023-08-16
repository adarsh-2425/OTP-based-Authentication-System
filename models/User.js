const mongoose = require('mongoose');

//userschema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,   
  },
  otp: String,
  verified: {
    type: Boolean,
    default: false
  }
});

//defining model
const User = mongoose.model('User', UserSchema);

module.exports = User;