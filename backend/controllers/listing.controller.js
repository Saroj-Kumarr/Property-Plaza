const Listing = require("../models/listing.model");

const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);

    if (!listing) {
      res.status(400).json("Listing is not created.");
    }

    res
      .status(201)
      .json({ success: true, message: "Listing is created successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      res.status(400).json("Listing is not deleted.");
    }

    res
      .status(200)
      .json({ success: true, message: "Listing is deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const editListing = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);

  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedListing) {
      return res.status(400).json("Listing is not updated.");
    }

    res.status(200).json({
      success: true,
      message: "Listing is updated successfully.",
      updatedListing,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id).populate("owner");

    if (!listing) {
      return res.status(400).json("Listing is not found.");
    }

    res.status(200).json({
      success: true,
      message: "Listing is found.",
      listing,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getListings = async (req, res) => {
  try {
    const listings = await Listing.find({})
      .populate("owner")
      .sort({ createdAt: -1 });

    if (!listings) {
      res.status(400).json("Listings are not found.");
    }

    res.status(200).json({
      success: true,
      message: "Listings are found.",
      listings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getListingByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const userListings = await Listing.find({ owner: id });

    if (!userListings) {
      res.status(400).json("This user has no listings.");
    }

    res.status(200).json({
      success: true,
      message: "User listings are found.",
      userListings,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createListing,
  deleteListing,
  editListing,
  getListing,
  getListings,
  getListingByUserId,
};
