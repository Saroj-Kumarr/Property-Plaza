const bcryptjs = require("bcryptjs");
const User = require("../models/user.model");
const errorHandler = require("../utils/error");
const Listing = require("../models/listing.model");

const updateUser = async (req, res, next) => {
  const { name, email, phone, password, image } = req.body;

  if (!name || !email || !phone || !password || !image) {
    return res.status(400).json("All Fields are required.");
  }

  try {
    const newUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        password,
        image,
      },
      {
        new: true,
      }
    );

    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    const deletedListings = await Listing.deleteMany({ owner: req.params.id });
    res.clearCookie("access_token");
    res.status(200).json({
      deletedUser,
      deletedListings,
    });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const userInfo = await User.findById(req.params.id).select("-password");

    if (!userInfo) {
      res.status(400).json("User has not been updated.");
    }

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(400).json("Not able to fetch the listings");
    }

    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Error");
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
};
