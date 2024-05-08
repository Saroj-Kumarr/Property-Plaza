import apiClient from "./apiConnectior";
import toast from "react-hot-toast";

export const register = async (name, email, phone, password, imageURL) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    toast.error("Email address is not valid.");
    return;
  }

  if (!isPasswordValid) {
    toast.error("Password is not valid.");
    return;
  }

  try {
    const response = await apiClient.post("/auth/register", {
      name,
      email,
      phone,
      password,
      image: imageURL,
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

export const login = async (email, password) => {
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
    const response = await apiClient.get("/auth/logout");

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Logout failed.");
    }
  } catch (error) {
    console.error("Error while logging out:", error.message);
  }
};
