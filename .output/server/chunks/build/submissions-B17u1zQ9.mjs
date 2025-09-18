import { a as api } from './index-BauIZjmw.mjs';

const submissionService = {
  createSubmission: (data) => api.post("/submissions/create", data),
  getPendingSubmissions: () => api.get("/submissions/pending"),
  getApprovedSubmissions: () => api.get("/submissions/approved"),
  getRejectedSubmissions: () => api.get("/submissions/rejected"),
  approveSubmission: (id, adminId) => api.post(`/submissions/${id}/approve`, { adminId }),
  rejectSubmission: (id, adminId, reason) => api.post(`/submissions/${id}/reject`, { adminId, reason }),
  getCategories: () => api.get("/categories")
};

export { submissionService as s };
//# sourceMappingURL=submissions-B17u1zQ9.mjs.map
