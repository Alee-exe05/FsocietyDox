
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
    { id: 1, name: 'Elliot Alderson', email: 'elliot@fsociety.com', role: 'Super Admin', avatar: 'https://picsum.photos/seed/user1/100/100', isOnline: true, pastes: 12, comments: 88, joined: '2023-01-15' },
    { id: 2, name: 'Mr. Robot', email: 'mrrobot@fsociety.com', role: 'Admin', avatar: 'https://picsum.photos/seed/user2/100/100', isOnline: true, pastes: 4, comments: 34, joined: '2023-01-15' },
    { id: 3, name: 'Darlene', email: 'darlene@fsociety.com', role: 'Moderatore', avatar: 'https://picsum.photos/seed/user3/100/100', isOnline: false, pastes: 21, comments: 102, joined: '2023-02-20' },
    { id: 4, name: 'Tyrell Wellick', email: 'tyrell@ecorp.com', role: 'Utente Staff', avatar: 'https://picsum.photos/seed/user4/100/100', isOnline: true, pastes: 8, comments: 56, joined: '2023-03-10' },
    { id: 5, name: 'Angela Moss', email: 'angela@ecorp.com', role: 'Utente Staff', avatar: 'https://picsum.photos/seed/user5/100/100', isOnline: false, pastes: 2, comments: 12, joined: '2023-05-01' },
];

