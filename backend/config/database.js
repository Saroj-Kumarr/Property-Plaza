const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection success ✅");
  } catch (error) {
    console.log("Database connection failed ❌");
  }
};

module.exports = connection;
