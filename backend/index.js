const express = require("express");
const app = express();
const connectDB = require("./config/database");
const testRoutes = require("./routes/userRoutes");
require("dotenv").config();
app.use(express.json());

app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
  res.status(200).json("This is the home page 🏠");
});

app.listen(8000, () => {
  console.log(`Server is started on ${process.env.PORT}`);
  connectDB();
});
