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
    min: 8,
    lowercase: true,
    required: true,   
  },
  otp: Number,
  verified: false
});

//defining model
const User = mongoose.model('User', UserSchema);

module.exports = User;