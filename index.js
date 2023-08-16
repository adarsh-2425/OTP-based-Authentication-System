const express = require("express");
const app = express();

const connectDb = require('./db.js');
const PORT = process.env.PORT || 3000;

connectDb();

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

//Import and use the Authentication Route
const authRoutes = require("./routes/authRoute.js");
app.use('/auth', authRoutes);

//Import and use the OTPRoute
const otpRoutes = require("./routes/otpRoute.js");
app.use('/verify-otp', otpRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});