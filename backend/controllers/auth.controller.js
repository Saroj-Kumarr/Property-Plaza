const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const uploadFileToCloudinary = (file, folder) => {
  const options = { folder: folder };

  try {
    return cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

const register = (req, res, next) => {
  const { name, email, phone, password } = req.body;

  // const { file } = req.files;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    name: name,
    email: email,
    phone: phone,
    password: hashedPassword,
  });

  try {
    newUser.save((error) => {
      if (error) {
        return next(error);
      }
      res.status(201).json("User created successfully!");
    });
  } catch (error) {
    next(error);
  }
};



const login = (req, res, next) => {
  const { email, password } = req.body;
  try {
    User.findOne({ email: email }, (error, validUser) => {
      if (error) {
        return next(error);
      }
      if (!validUser) {
        return next(errorHandler(404, "User not found!"));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(401, "Wrong credentials!"));
      }
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const rest = validUser._doc;
      delete rest.password;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
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
