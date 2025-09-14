import api from './index';
import type { AuthResponse, User } from '@/types/api/auth';

export const authService = {
  register: (email: string, password: string) =>
    api.post<AuthResponse>('/auth/register', { email, password }),

  login: (email: string, password: string) =>
    api.post<AuthResponse>('/auth/login', { email, password }),

  refresh: () =>
    api.post<AuthResponse>('/auth/refresh'),

  logout: () =>
    api.post<void>('/auth/logout'),
};
