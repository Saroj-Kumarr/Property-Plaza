const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json("All fields must be filled.");
  }

  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json(userDoc);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json("User not found.");
    }
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(400).json("Email or Password is wrong.");
    }

    const { password: pass, ...userDoc } = user._doc;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        token,
        userDoc,
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  register,
  login,
};
