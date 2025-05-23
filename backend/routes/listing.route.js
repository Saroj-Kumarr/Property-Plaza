const express = require("express");
const {
  createListing,
  deleteListing,
  editListing,
  getListing,
  getListings,
  getListingByUserId,
} = require("../controllers/listing.controller");

const { verifyToken } = require("../middlewares/verifyUser");

const router = express.Router();

router.route("/").get(getListings).post(verifyToken, createListing);

router
  .route("/:id")
  .delete(verifyToken, deleteListing)
  .put(verifyToken, editListing)
  .get(getListing);

router.route("/user/:id").get(getListingByUserId);

module.exports = router;
