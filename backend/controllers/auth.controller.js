const { response } = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
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

    res.status(200).json({ message: "User is created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json("User not found.");
    }

    if (user.password != password) {
      return res.status(403).json("Email or Password is incorrect.");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logged out successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
};
