import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL =
  "https://66bc5b9424da2de7ff6a2e06.mockapi.io/api/v1/campers";

export const fetchAllCars = async () => {
  try {
    const response = await axios.get();
    return response.data;
  } catch (error) {
    toast.error("Opppppps something went wrong, please reload the page 😞");
    return [];
  }
};
export const fetchCarWithTopic = async (topic) => {
  try {
    const response = await axios.get(`?name=${topic}`);
    return response.data;
  } catch (error) {
    toast.error("Opppppps something went wrong, please reload the page 😞");
    return [];
  }
};
