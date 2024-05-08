const jwt = require("jsonwebtoken");
const errorHandler = require("./error.js").errorHandler;

const verifyToken = function (req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({ message: "Token is not found." });
  }

  jwt.verify(token, process.env.JWT_SECRET, function (error, user) {
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    req.user = user;

    next();
  });
};

module.exports = {
  verifyToken,
};
