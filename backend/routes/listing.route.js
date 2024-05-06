const express = require("express");
const {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
  getListingByUserId,
} = require("../controllers/listing.controller");

const { verifyToken } = require("../utils/verifyUser");

const router = express.Router();

router.route("/").get(getListings).post(verifyToken, createListing);

router
  .route("/:id")
  .delete(verifyToken, deleteListing)
  .put(verifyToken, updateListing)
  .get(getListing);

router.route("/user-listings/:id").get(getListingByUserId);

module.exports = router;
