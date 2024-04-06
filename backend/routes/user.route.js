const express = require("express");
const {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.delete("/user/delete/:id", deleteUser);
router.put("/user/update/:id", updateUser);
router.get("/user/get/:id", getUser);
router.get("/all-users", getAllUsers);

module.exports = router;
