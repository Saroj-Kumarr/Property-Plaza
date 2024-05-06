
const User = require("../models/user.model");
const Listing = require("../models/listing.model");

const updateUser = async (req, res) => {
  const { name, email, phone, password, image } = req.body;

  if (!name || !email || !phone || !password || !image) {
    return res.status(400).json("All Fields are required.");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
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

    res
      .status(200)
      .json({ message: "User is updated successfully.", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.cookies;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    const deletedListings = await Listing.deleteMany({ owner: id });
    res.clearCookie("token");
    res.status(200).json({
      deletedUser,
      deletedListings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      res.status(400).json("User is not found.");
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(400).json("Users are not found.");
    }

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};

