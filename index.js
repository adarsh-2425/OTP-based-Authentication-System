const express = require("express");
const app = express();

const connectDb = require('./db.js');
const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});