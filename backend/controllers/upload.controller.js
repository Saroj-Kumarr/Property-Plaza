const cloudinary = require("cloudinary").v2;

const uploadFileToCloudinary = (file, folder) => {
  const options = { folder: folder };

  try {
    return cloudinary.uploader.upload(file.tempFilePath, options);
  } catch (error) {
    console.log(error.message);
  }
};

const singleImageUpload = async (req, res) => {
  const { image } = req.files;
  try {
    const response = await uploadFileToCloudinary(image, "saroj");
    res.status(200).json(response.url);
  } catch (error) {
    console.log(error.message);
  }
};

const multipleImageUpload = async (req, res) => {
  const { images } = req.files;

  try {
    const uploadedImages = await Promise.all(
      images.map(async (image) => {
        const result = await uploadFileToCloudinary(image, "saroj");
        return result;
      })
    );

    const urls = uploadedImages.map((image) => image.url);

    res.status(200).json(urls);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to upload images" });
  }
};

module.exports = {
  singleImageUpload,
  multipleImageUpload,
};
