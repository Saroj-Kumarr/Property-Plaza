const express = require("express");
const {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(getUsers);

router
  .route("/:id")
  .get(getUser)
  .put(verifyToken, updateUser)
  .delete(verifyToken, deleteUser);

module.exports = router;
