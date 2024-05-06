import apiClient from "./apiConnectior";

export const register = async ({ name, email, phone, password }) => {
  try {
    const response = await apiClient.post("/auth/register", {
      name,
      email,
      phone,
      password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Registration failed.");
    }
  } catch (error) {
    console.log("Error while registering:", error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Login failed.");
    }
  } catch (error) {
    console.error("Error while logging in:", error.message);
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.post("/auth/logout");

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Logout failed.");
    }
  } catch (error) {
    console.error("Error while logging out:", error.message);
  }
};
