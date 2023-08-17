const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const authController = require("../controllers/authController");

//Registration Route
router.post('/register', authController.registerUser);

//loginUser route
router.post('/login', authController.loginUser);

//getallusers route
router.get('/all', authController.getUsers);

//remove users
router.delete('/remove/:username',authController.removeUsers);

//Profile route using authentication
router.get('/profile', authMiddleware.auth, (req, res) => {
  const user = req.user;
  res.json({ message: `Welcome, ${user.username}!` });
});

module.exports = router;