// types/api/submission.ts
export type ResourceType = 'CHANNEL' | 'CHAT' | 'BOT'

export interface SubmissionResponse {
  id: string;
  title: string;
  type: ResourceType;
  description?: string;
  userId: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}
