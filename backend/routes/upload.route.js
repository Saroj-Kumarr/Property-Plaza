const express = require("express");
const {
  singleImageUpload,
  multipleImageUpload,
} = require("../controllers/upload.controller");

const router = express.Router();

router.post("/single-image", singleImageUpload);
router.post("/multiple-image", multipleImageUpload);

module.exports = router;
