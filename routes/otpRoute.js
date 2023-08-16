const express = require("express");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const { compareOTP } = require("../utils/otpGenerator");

const router = express.Router();

//verify otp during registration
router.post("/registration", async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare received OTP with stored OTP
    if (compareOTP(otp, user.otp)) {
      // Update verified field to true
      user.verified = true;
      user.otp = null; // Set the OTP field to null after verification
      await user.save();

      return res.json({ message: "OTP verified successfully" });
    } else {
      return res.status(401).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//verify otp during login
router.post("/login", async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare received OTP with stored OTP
    if (compareOTP(otp, user.otp)) {
      
      user.otp = null; // Set the OTP field to null after verification
      await user.save();

      const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: '1h'});

    return res.status(200).json({token, user: {username: user.username, email: user.email}});
    } else {
      return res.status(401).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;