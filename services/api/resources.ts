import api from './index';
import type { Resource } from '@/types/api/resource';

export const resourceService = {
  getAll: (type?: string) => api.get<Resource[]>('/resources', { params: { type } }),
  getById: (id: string) => api.get<Resource>(`/resources/${id}`),
  getByCategory: (categoryId: string) =>
    api.get<Resource[]>(`/resources/category/${categoryId}`),
  getRecommended: () => api.get<Resource[]>('/resources/recommended'),
  changeRecommended: (id: string, isRecommended: boolean) => api.put<Resource>(`/resources/${id}/recommended`, { isRecommended }),
};

