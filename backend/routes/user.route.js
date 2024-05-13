const express = require("express");
const {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyUser");
const { sendEmailMessage } = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(getUsers);

router
  .route("/:id")
  .get(getUser)
  .put(verifyToken, updateUser)
  .delete(verifyToken, deleteUser);

router.post("/send-email", sendEmailMessage);

module.exports = router;
