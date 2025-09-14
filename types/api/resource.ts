export type ResourceType = 'CHANNEL' | 'CHAT' | 'BOT' | 'GROUP';

export interface Resource {
  id: string;
  title: string;
  slug: string;
  type: ResourceType;
  description?: string | null;
  createdAt: string;
  categories: { id: string; name: string }[];
}
