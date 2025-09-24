
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

// NOTE: This is placeholder data that simulates a database.
export const users: User[] = [
];
