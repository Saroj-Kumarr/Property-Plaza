const jwt = require("jsonwebtoken");
const errorHandler = require("./error.js").errorHandler;

const verifyToken = function (req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(errorHandler(401, "Unauthorized: Token not found"));
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) return next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};




module.exports = {
  verifyToken,
};
