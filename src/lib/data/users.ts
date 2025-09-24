
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
  },
  {
    id: 2,
    name: 'Darlene Alderson',
    email: 'darlene@fsociety.com',
    role: 'Admin',
    avatar: 'https://picsum.photos/seed/user2/100/100',
    isOnline: true,
    pastes: 8,
    comments: 23,
    joined: '2023-10-28',
  },
  {
    id: 3,
    name: 'Angela Moss',
    email: 'angela@ecorp.com',
    role: 'Moderatore',
    avatar: 'https://picsum.photos/seed/user3/100/100',
    isOnline: false,
    pastes: 3,
    comments: 10,
    joined: '2023-11-01',
  },
  {
    id: 4,
    name: 'Tyrell Wellick',
    email: 'tyrell@ecorp.com',
    role: 'Utente Staff',
    avatar: 'https://picsum.photos/seed/user4/100/100',
    isOnline: true,
    pastes: 1,
    comments: 5,
    joined: '2023-11-05',
  },
    {
    id: 5,
    name: 'Phillip Price',
    email: 'price@ecorp.com',
    role: 'CEO',
    avatar: 'https://picsum.photos/seed/user5/100/100',
    isOnline: true,
    pastes: 50,
    comments: 100,
    joined: '2022-01-15',
  },
  {
    id: 6,
    name: 'Whiterose',
    email: 'whiterose@darkarmy.com',
    role: 'Admin',
    avatar: 'https://picsum.photos/seed/user6/100/100',
    isOnline: false,
    pastes: 99,
    comments: 0,
    joined: '2022-03-20',
  },
  {
    id: 7,
    name: 'Fernando Vera',
    email: 'vera@hostile.com',
    role: 'Criminal',
    avatar: 'https://picsum.photos/seed/user7/100/100',
    isOnline: true,
    pastes: 2,
    comments: 88,
    joined: '2024-01-10',
  },
  {
    id: 8,
    name: 'Leon',
    email: 'leon@darkarmy.com',
    role: 'VIP',
    avatar: 'https://picsum.photos/seed/user8/100/100',
    isOnline: true,
    pastes: 5,
    comments: 30,
    joined: '2023-05-19',
  }
];
