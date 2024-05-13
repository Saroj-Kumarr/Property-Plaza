import apiClient from "./apiConnectior";

export const fetchUser = async (id) => {
  try {
    const response = await apiClient.get(`/user/${id}`);
    if (response.status === 200) {
      return response.data.user;
    } else {
      console.log("User is not fetched.");
    }
  } catch (error) {
    console.error("Error while fetching user info:", error.message);
  }
};

export const updateUser = async (id, name, email, phone, imageURL) => {
  try {
    const response = await apiClient.put(`/user/${id}`, {
      name,
      email,
      phone,
      image: imageURL,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("User is not updated.");
    }
  } catch (error) {
    console.error("Error while updating user info:", error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await apiClient.delete("/user/" + id);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("User is not deleted.");
    }
  } catch (error) {
    console.error("Error while deleting user:", error.message);
  }
};

export const sendEmailMessage = async (name, fromUser, toUser, message) => {
  try {
    const response = await apiClient.post("/user/send-email", {
      name,
      fromUser,
      toUser,
      message,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Email is not sent.");
    }
  } catch (error) {
    console.error("Error while sending email:", error.message);
  }
};
