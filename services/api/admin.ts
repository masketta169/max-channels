import api from './index';
import type { Submission } from '@/types/api/admin';

export const adminService = {
  getSubmissions: (status?: string) =>
    api.get<Submission[]>('/admin/submissions', { params: { status } }),
  approveSubmission: (id: string, adminId: string) =>
    api.patch(`/admin/submissions/${id}/approve`, { adminId }),
  rejectSubmission: (id: string, adminId: string, reason: string) =>
    api.patch(`/admin/submissions/${id}/reject`, { adminId, reason }),
};
