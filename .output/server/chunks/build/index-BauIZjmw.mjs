import axios from 'axios';

const api = axios.create({
  baseURL: "https://max-community.ru/api",
  withCredentials: true
});
api.interceptors.request.use((config) => {
  return config;
});
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("response error", error?.response?.status);
    if (error.response?.status === 401) ;
    return Promise.reject(error);
  }
);

export { api as a };
//# sourceMappingURL=index-BauIZjmw.mjs.map
