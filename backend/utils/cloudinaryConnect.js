const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = function () {
  try {
    cloudinary.config({
      cloud_name: "dpkeexb0x",
      api_key: "824867471374662",
      api_secret: "zDIE0iGlXiXv53A2OhfOCsfdzmk",
    });
    console.log("Connected with cloudinary.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  cloudinaryConnect,
};
