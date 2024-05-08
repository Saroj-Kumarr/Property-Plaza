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

export const updateUser = async (id, user) => {
  try {
    const response = await apiClient.put(`/user/${id}`, user);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("User is not updated.");
    }
  } catch (error) {
    console.error("Error while updating user info:", error.message);
  }
};

export const deleteUser = async () => {
  try {
    const response = await apiClient.delete("/user");
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("User is not deleted.");
    }
  } catch (error) {
    console.error("Error while deleting user:", error.message);
  }
};
