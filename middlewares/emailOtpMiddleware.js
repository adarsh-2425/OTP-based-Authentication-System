const nodemailer = require("nodemailer");

//Nodemailer
//transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email,
    pass: process.env.password //use application specific password from zoho
  },
  tls:{
      rejectUnauthorized:false
    }
});

//Send OTP via Email
exports.sendOTPByEmail = (email, otp) => {
  const mailOptions = {
    from: '"Node Project" <' + process.env.email + '>',
    to: email,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

//reference
//https://stackoverflow.com/questions/65983495/nodemailer-invalid-login-535-authentication-failed

