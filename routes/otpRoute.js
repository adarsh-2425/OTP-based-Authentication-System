const express = require("express");
const { sendOTPByEmail } = require("../middlewares/otpMiddleware");
const otpGenerator  = require("../utils/otpGenerator");

const router = express.Router();

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = otpGenerator.generateOTP();

  sendOTPByEmail(email, otp);
  res.json({message: "OTP sent successfully"});
});

module.exports = router;