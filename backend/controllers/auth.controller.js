const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

const uploadFileToCloudinary = (file, folder) => {
  const options = { folder: folder };

  try {
    return cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res, next) => {
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
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(email + " " + password);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found.");
    }

    if (user.password != password) {
      return res.status(403).json("Invalid crediatial.");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const rest = user._doc;
    delete rest.password;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out!");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
};
