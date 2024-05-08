import apiClient from "../services/apiConnectior";

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await apiClient.post("/upload/single-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadImages = async (images) => {
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }

  try {
    const response = await apiClient.post("/upload/multiple-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
