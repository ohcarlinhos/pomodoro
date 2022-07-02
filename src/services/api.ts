import router from "@/router";
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

api.interceptors.response.use(
  (value) => {
    return value;
  },
  (value) => {
    if (value.response.status == 401) {
      authService.cleanSession();
      router.push({ name: "login" });
    }
    return Promise.reject(value);
  }
);

export default api;
