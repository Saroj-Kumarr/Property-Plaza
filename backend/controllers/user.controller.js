const User = require("../models/user.model");
const Listing = require("../models/listing.model");

const updateUser = async (req, res) => {
  const { name, email, phone, image } = req.body;

  if (!name || !email || !phone || !image) {
    return res.status(400).json("All Fields are required.");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        phone,
        image,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "User is updated successfully.",
      user: {
        _id: updatedUser._id,
        email: updatedUser.email,
        name: updatedUser.name,
        phone: updatedUser.phone,
        image: updatedUser.image,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    const deletedListings = await Listing.deleteMany({ owner: id });
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "User is deleted successfully.",
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
