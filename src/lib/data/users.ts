
export type UserRole = 'Super Admin' | 'Admin' | 'Moderatore' | 'Utente Staff' | 'Criminal' | 'VIP' | 'CEO';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  isOnline?: boolean;
  pastes: number;
  comments: number;
  joined: string;
}

export const users: User[] = [
    // Data removed as requested. In a real application, this would be fetched from a database.
];
