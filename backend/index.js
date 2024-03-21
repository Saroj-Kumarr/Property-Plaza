const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/", (req, res) => {
  res.status(200).json("This is the home page 🏠");
});

app.listen(8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
