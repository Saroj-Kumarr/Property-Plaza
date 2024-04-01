const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const listingRouter = require("./routes/listing.route");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connection = require("./config/database");
const cloudinary = require("cloudinary").v2;
const { cloudinaryConnect } = require("./utils/cloudinaryConnect");
const User = require("./models/user.model");
const bcryptjs = require("bcryptjs");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use("/api/user", userRouter);
// app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

const uploadFileToCloudinary = (file, folder) => {
  const options = { folder: folder };

  try {
    return cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

app.post("/api/auth/register", async (req, res, next) => {
  const { name, email, phone, password } = req.body;

  const { image } = req.files;

  const imageURL = await uploadFileToCloudinary(image, "saroj");

  if (!name || !email || !phone || !password) {
    return res.status(400).json("All Fields are required.");
  }

  try {
    const newUser = await User.create({
      name,
      email,
      phone,
      password,
      image: imageURL.secure_url,
    });

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

app.use(function (err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});
cloudinaryConnect();

app.listen(process.env.PORT, function () {
  console.log(`Server is running on ${process.env.PORT}`);
  connection();
});
