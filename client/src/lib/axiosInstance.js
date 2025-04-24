import axios from "axios";

// Base URL can be set via .env file or hardcoded for local dev
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_RILCET_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
