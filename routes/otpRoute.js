const express = require("express");
const User = require("../models/User");
const { compareOTP } = require("../utils/otpGenerator");

const router = express.Router();

//verify otp
router.post("/verify-otp", async (req, res) => {
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

module.exports = router;