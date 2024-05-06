const express = require("express");
const {
  singleImageUpload,
  multipleImageUpload,
} = require("../controllers/upload.controller");

const router = express.Router();

router.route("/single-image").post(singleImageUpload);
router.route("/multiple-image").post(multipleImageUpload);

module.exports = router;
