const Listing = require("../models/listing.model");
const errorHandler = require("../utils/error");

const createListing = async (req, res, next) => {
  try {
    const newListing = await Listing.create(req.body);

    if (!newListing) {
      res.status(400).json("Listing is not created.");
    }

    res.status(200).json(newListing);
  } catch (error) {
    console.log(error.massage);
  }
};

const deleteListing = async (req, res, next) => {
  try {
    const listing = await Listing.findByIdAndDelete(req.params.id);

    if (!listing) {
      res.status(400).json("Not able to fetch the listings");
    }

    res.status(200).json(listing);
  } catch (error) {
    console.log(error.message);
  }
};

const updateListing = async (req, res, next) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedListing) {
      res.status(400).json("Not able to update.");
    }

    res.status(200).json(updatedListing);
  } catch (error) {
    console.log(error.message);
  }
};

const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("owner");

    if (!listing) {
      res.status(400).json("Not able to fetch the listings");
    }

    res.status(200).json(listing);
  } catch (error) {
    console.log(error.message);
  }
};

const getListings = async (req, res, next) => {
  try {
    const allListings = await Listing.find({})
      .populate("owner")
      .sort({ createdAt: -1 });

    if (!allListings) {
      res.status(400).json("Not able to fetch the listings");
    }

    res.status(200).json(allListings);
  } catch (error) {
    console.log(error.message);
  }
};

const getListingByUserId = async (req, res, next) => {
  try {
    const userListings = await Listing.find({ owner: req.params.id });

    if (!userListings) {
      res.status(400).json("This user has no listings.");
    }

    res.status(200).json(userListings);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createListing,
  deleteListing,
  updateListing,
  getListingByUserId,
  getListing,
  getListings,
};
