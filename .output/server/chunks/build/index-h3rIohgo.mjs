import axios from 'axios';
import { u as useCookie } from './cookie-CI0eADt1.mjs';

const authService = {
  register: (email, password) => api.post("/auth/register", { email, password }),
  login: (email, password) => api.post("/auth/login", { email, password }),
  refresh: () => api.post("/auth/refresh"),
  logout: () => api.post("/auth/logout")
};
const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true
});
api.interceptors.request.use((config) => {
  const token = useCookie("accessToken").value;
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("response error", error?.response?.status);
    if (error.response?.status === 401) {
      const refreshToken = useCookie("refreshToken").value;
      if (refreshToken) {
        try {
          const response = await authService.refresh();
          useCookie("accessToken").value = response.data.accessToken;
          error.config.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
          return api.request(error.config);
        } catch (err) {
          console.error("Refresh token failed:", err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export { api as a };
//# sourceMappingURL=index-h3rIohgo.mjs.map
