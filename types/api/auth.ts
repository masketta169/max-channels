export interface User {
    id: string;
    email: string;
    createdAt: string;
  }
  
  export interface AuthResponse {
    accessToken: string;
    user: User;
  }
  