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
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: response.url,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to upload image" });
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

    res.status(200).json({
      success: true,
      message: "Images uploaded successfully",
      data: urls,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to upload images" });
  }
};

module.exports = {
  singleImageUpload,
  multipleImageUpload,
};
