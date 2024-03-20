const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection success ✅");
  } catch (error) {
    console.log("Database connection failed ❌");
  }
};

module.exports = connection;
