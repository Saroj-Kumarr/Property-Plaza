import { useEffect, useState } from "react";
import apiClient from "../services/apiConnectior";

const useFetchOwners = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await apiClient.get("/user");
        setOwners(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOwners();
  }, []);

  return owners;
};

export default useFetchOwners;
