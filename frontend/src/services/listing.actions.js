import apiClient from "./apiConnectior";

const fetchListings = async () => {
  try {
    const response = await apiClient.get("/listing");
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Listings is not fetched.");
    }
  } catch (error) {
    console.error("Error while fetching listings:", error.message);
  }
};

const fetchListing = async (id) => {
  try {
    const response = await apiClient.get(`/listing/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Listing is not fetched.");
    }
  } catch (error) {
    console.error(`Error fetching listing with ID ${id}:`, error.message);
  }
};

const fetchUserListings = async (userId) => {
  try {
    const response = await apiClient.get(`/listing/user/${userId}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("User listings is not fetched.");
    }
  } catch (error) {
    console.error("Error while fetching user listings:", error.message);
  }
};

const createListing = async (listing) => {
  try {
    const response = await apiClient.post("/listing", listing);

    if (response.status === 201) {
      return response.data;
    } else {
      console.log("Listing is not created.");
    }
  } catch (error) {
    console.error("Error while creating listing:", error.message);
  }
};

const updateListing = async (id, listing) => {
  try {
    const response = await apiClient.put(`/listing/${id}`, listing);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Listing is not updated.");
    }
  } catch (error) {
    console.error(`Error updating listing with ID ${id}:`, error.message);
  }
};

const deleteListing = async (id) => {
  try {
    const response = await apiClient.delete(`/listing/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Listing is not deleted.");
    }
  } catch (error) {
    console.error(`Error deleting listing with ID ${id}:`, error.message);
  }
};

export {
  fetchListings,
  fetchListing,
  fetchUserListings,
  createListing,
  updateListing,
  deleteListing,
};
