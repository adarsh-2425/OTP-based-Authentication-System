const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Middleware for Authentication
exports.auth = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; 
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};


