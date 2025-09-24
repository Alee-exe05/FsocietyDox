
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

// NOTE: This is placeholder data. In a real application, this would be fetched from a database.
export const users: User[] = [
  {
    id: 1,
    name: 'Elliot Alderson',
    email: 'elliot@fsociety.com',
    role: 'Super Admin',
    avatar: 'https://picsum.photos/seed/user1/100/100',
    isOnline: true,
    pastes: 12,
    comments: 45,
    joined: '2023-10-26',
  }
];

