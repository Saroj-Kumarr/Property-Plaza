const Listing = require("../models/listing.model");
const errorHandler = require("../utils/error");

const createListing = (req, res, next) => {
  Listing.create(req.body, (error, listing) => {
    if (error) {
      return next(error);
    }
    res.status(201).json(listing);
  });
};

const deleteListing = (req, res, next) => {
  Listing.findById(req.params.id, (error, listing) => {
    if (error) {
      return next(error);
    }
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, "You can only delete your own listings!"));
    }
    Listing.findByIdAndDelete(req.params.id, (error) => {
      if (error) {
        return next(error);
      }
      res.status(200).json("Listing has been deleted!");
    });
  });
};

const updateListing = (req, res, next) => {
  Listing.findById(req.params.id, (error, listing) => {
    if (error) {
      return next(error);
    }
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, "You can only update your own listings!"));
    }
    Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedListing) => {
        if (error) {
          return next(error);
        }
        res.status(200).json(updatedListing);
      }
    );
  });
};

const getListing = (req, res, next) => {
  Listing.findById(req.params.id, (error, listing) => {
    if (error) {
      return next(error);
    }
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  });
};

const getListings = (req, res, next) => {
  const limit = parseInt(req.query.limit) || 9;
  const startIndex = parseInt(req.query.startIndex) || 0;
  let offer = req.query.offer;

  if (offer === undefined || offer === "false") {
    offer = { $in: [false, true] };
  }

  let furnished = req.query.furnished;

  if (furnished === undefined || furnished === "false") {
    furnished = { $in: [false, true] };
  }

  let parking = req.query.parking;

  if (parking === undefined || parking === "false") {
    parking = { $in: [false, true] };
  }

  let type = req.query.type;

  if (type === undefined || type === "all") {
    type = { $in: ["sale", "rent"] };
  }

  const searchTerm = req.query.searchTerm || "";
  const sort = req.query.sort || "createdAt";
  const order = req.query.order || "desc";

  Listing.find({
    name: { $regex: searchTerm, $options: "i" },
    offer: offer,
    furnished: furnished,
    parking: parking,
    type: type,
  })
    .sort({ [sort]: order })
    .limit(limit)
    .skip(startIndex)
    .exec((error, listings) => {
      if (error) {
        return next(error);
      }
      res.status(200).json(listings);
    });
};

module.exports = {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
};
