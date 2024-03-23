import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection success ✅");
  } catch (error) {
    console.log("Database connection failed ❌");
  }
};

export default connection;
