const express = require("express");
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.delete("/user/:id", verifyToken, userController.deleteUser);
router.put("/user/:id", verifyToken, userController.updateUser);
router.get("/user/:id/listings", verifyToken, userController.getUserListings);
router.get("/user/:id", verifyToken, userController.getUser);

module.exports = router;
