// services/submissionService.ts
import api from './index';
import type { SubmissionResponse, ResourceType } from '@/types/api/submissions';

export interface SubmissionCreateDto {
  title: string;
  type: ResourceType;
  description?: string;
  categoryIds?: string[];
}

export interface CategoryResponse {
  id: string;
  name: string;
  slug: string;
}

export const submissionService = {
  createSubmission: (data: SubmissionCreateDto) =>
    api.post<SubmissionResponse>('/submissions/create', data),

  getPendingSubmissions: () =>
    api.get<SubmissionResponse[]>('/submissions/pending'),

  getApprovedSubmissions: () =>
    api.get<SubmissionResponse[]>('/submissions/approved'),

  getRejectedSubmissions: () =>
    api.get<SubmissionResponse[]>('/submissions/rejected'),

  approveSubmission: (id: string, adminId: string) =>
    api.post(`/submissions/${id}/approve`, { adminId }),

  rejectSubmission: (id: string, adminId: string, reason?: string) =>
    api.post(`/submissions/${id}/reject`, { adminId, reason }),

  getCategories: () =>
    api.get<CategoryResponse[]>('/categories'),
};
