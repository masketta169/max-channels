import axios, { type AxiosRequestHeaders } from 'axios';
import { authService } from './auth';
import { getCookie, setCookie } from '@/utils/cookies'

const api = axios.create({
  baseURL: 'https://max-community.ru/api', 
  withCredentials: true,
});

// --- 1. Перед запросом добавляем токен ---
api.interceptors.request.use((config) => {
  const token = getCookie('accessToken');
  if (token) {
    if (!config.headers) {

      config.headers = {} as AxiosRequestHeaders;
    }
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// --- 2. Обрабатываем ответы ---
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('response error', error?.response?.status);

    if (error.response?.status === 401) {
      const refreshToken = getCookie('refreshToken');
      if (refreshToken) {
        try {
          // пробуем обновить токен
          const response = await authService.refresh();
          setCookie('accessToken', response.data.accessToken);

          // 🔁 повторяем оригинальный запрос с новым токеном
          error.config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
          return api.request(error.config);
        } catch (err) {
          console.error('Refresh token failed:', err);
          // редирект на логин, если нужно
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
