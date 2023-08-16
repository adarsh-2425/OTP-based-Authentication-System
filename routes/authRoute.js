const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

//Registration Route
router.post('/register', authController.registerUser);

//loginUser route
router.post('/login', authController.loginUser);

//getallusers route
router.get('/all', authController.getUsers);

//remove users
router.delete('/remove/:username', authController.removeUsers);

module.exports = router;