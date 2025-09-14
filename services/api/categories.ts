import api from './index';
import type { Category } from '@/types/api/category';

export const categoryService = {
  getAll: () => api.get<Category[]>('/categories'),
  getById: (id: string) => api.get<Category>(`/categories/${id}`),
  create: (name: string, slug: string) =>
    api.post<Category>('/categories', { name, slug }),
  update: (id: string, data: Partial<Category>) =>
    api.put<Category>(`/categories/${id}`, data),
  delete: (id: string) => api.delete<void>(`/categories/${id}`),
};
