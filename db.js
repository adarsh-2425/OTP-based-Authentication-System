const mongoose = require('mongoose');

//mongodb uri
const MONGO_URI = process.env.MONGO_URI;

//connect to db
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongoose connected to MONGODB Atlas');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;