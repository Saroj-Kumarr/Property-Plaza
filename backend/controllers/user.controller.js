const bcryptjs = require("bcryptjs");
const User = require("../models/user.model");
const errorHandler = require("../utils/error");
const Listing = require("../models/listing.model");

const uploadFileToCloudinary = (file, folder) => {
  const options = { folder: folder };

  try {
    return cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));

  const { name, email, phone, password } = req.body;

  const { image } = req.files;

  const imageURL = await uploadFileToCloudinary(image, "saroj");

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          email,
          phone,
          password,
          image: imageURL.secure_url,
        },
      },
      { new: true },
      (error, updatedUser) => {
        if (error) {
          return next(error);
        }
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
      }
    );
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only delete your own account!"));
  try {
    User.findByIdAndDelete(req.params.id, (error) => {
      if (error) {
        return next(error);
      }
      res.clearCookie("access_token");
      res.status(200).json("User has been deleted!");
    });
  } catch (error) {
    next(error);
  }
};

const getUserListings = (req, res, next) => {
  if (req.user.id === req.params.id) {
    Listing.find({ userRef: req.params.id }, (error, listings) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(listings);
    });
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

const getUser = (req, res, next) => {
  User.findById(req.params.id, (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  });
};

module.exports = {
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
};
