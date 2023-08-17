const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware");

const { sendOTPByEmail } = require("../middlewares/emailOtpMiddleware");
const otpGenerator  = require("../utils/otpGenerator");

//User Registration
exports.registerUser = async (req, res) => {
  const{ username, email, password } = req.body;
  try {
    //check if user exists
    const existingUser = await User.findOne({$or: [{username}, {email}]});
    if (existingUser) {
      return res.status(400).json({message: "Username or Email already exists"});
    }

    // Generate OTP
    const otp = otpGenerator.generateOTP();

    // Send OTP via Email
    sendOTPByEmail(email, otp);
    
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      otp
    });

    //save
    await newUser.save();
    res.status(201).json({message: "User registered successfully, OTP sent to email"});   
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server Error"});
  }
};

//Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    //console.log(user);
    if (!user) {
      return res.send(404).json({message: "User not found"});
    }
    //compare password

    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);

console.log(isPasswordValid);
    
    if (!isPasswordValid) {
      return res.status(401).json({message: "Invald Password"})
    }

    // Generate OTP
    const otp = otpGenerator.generateOTP();

    //save otp to database
    user.otp = otp;
    await user.save();

    // Send OTP via Email
    sendOTPByEmail(email, otp);

    res.status(200).json({message: "Please Enter Your OTP"});

    //const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: '1h'});

    //res.status(200).json({token, user: {username: user.username, email: user.email}});
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Server Error'})
  }
};

//Get Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Server Error'})
  }
}

//Remove Users
exports.removeUsers = async (req, res) => {
  const { username } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ username });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: 'Server Error'})
  }
}