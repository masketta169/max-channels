import { a as api } from './index-BauIZjmw.mjs';

const resourceService = {
  getAll: (type) => api.get("/resources", { params: { type } }),
  getById: (id) => api.get(`/resources/${id}`),
  getByCategory: (categoryId) => api.get(`/resources/category/${categoryId}`),
  getRecommended: () => api.get("/resources/recommended"),
  changeRecommended: (id, isRecommended) => api.put(`/resources/${id}/recommended`, { isRecommended })
};

export { resourceService as r };
//# sourceMappingURL=resources-PPYOMjio.mjs.map
