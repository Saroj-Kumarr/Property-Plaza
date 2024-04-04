const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { name, email, phone, password, image } = req.body;

  if (!name || !email || !phone || !password || !image) {
    return res.status(400).json("All Fields are required.");
  }

  try {
    const newUser = await User.create({
      name,
      email,
      phone,
      password,
      image,
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found.");
    }

    if (user.password != password) {
      return res.status(403).json("Invalid crediatial.");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    console.log("token", token);

    const rest = user._doc;
    delete rest.password;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      token,
      rest,
    });
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
