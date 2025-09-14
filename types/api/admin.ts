import type { ResourceType } from './resource';

export interface Submission {
  id: string;
  title: string;
  type: ResourceType;
  description?: string | null;
  createdAt: string;
  createdById: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}
