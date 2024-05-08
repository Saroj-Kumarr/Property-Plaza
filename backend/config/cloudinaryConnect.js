const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinaryConnect = function () {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Connected with cloudinary.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  cloudinaryConnect,
};
