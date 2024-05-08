const Listing = require("../models/listing.model");

const createListing = async (req, res) => {
  try {
    const listing = await Listing.create(req.body);

    if (!listing) {
      res.status(400).json("Listing is not created.");
    }

    res.status(200).json({ message: "Listing is created successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      res.status(400).json("Listing is not deleted.");
    }

    res.status(200).json({ message: "Listing is deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedListing) {
      res.status(400).json("Listing is not updated.");
    }

    res
      .status(200)
      .json({ message: "Listing is updated successfully.", updatedListing });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id).populate("owner");

    if (!listing) {
      res.status(400).json("Listing is not found.");
    }

    res.status(200).json(listing);
  } catch (error) {
    console.log(error.message);
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

    res.status(200).json(listings);
  } catch (error) {
    console.log(error.message);
  }
};

const getListingByUserId = async (req, res) => {
  
  const { id } = req.params;

  try {
    const userListings = await Listing.find({ owner: id });

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
  getListing,
  getListings,
  getListingByUserId,
};
