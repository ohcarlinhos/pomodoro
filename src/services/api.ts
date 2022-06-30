import axios from "axios";
import { authService } from ".";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const userToken = authService.getUserToken();
  if (userToken)
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + userToken,
    };

  return config;
});

export default api;
