export type UserRole = 'CEO' | 'Admin' | 'VIP' | 'Criminal';

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
    {
      id: 1,
      name: 'Elliot Alderson',
      email: 'elliot.a@protonmail.com',
      role: 'Admin',
      avatar: 'https://picsum.photos/seed/user1/100/100',
      isOnline: true,
      pastes: 12,
      comments: 140,
      joined: '2023-01-15'
    },
    {
      id: 2,
      name: 'Mr. Robot',
      email: 'mr.robot@e-corp.com',
      role: 'CEO',
      avatar: 'https://picsum.photos/seed/user2/100/100',
      isOnline: true,
      pastes: 5,
      comments: 256,
      joined: '2023-01-15'
    },
    {
      id: 3,
      name: 'Darlene',
      email: 'darlene@fsociety.com',
      role: 'Admin',
      avatar: 'https://picsum.photos/seed/user3/100/100',
      isOnline: false,
      pastes: 8,
      comments: 89,
      joined: '2023-02-20'
    },
    {
        id: 4,
        name: 'Tyrell Wellick',
        email: 'tyrell.w@e-corp.com',
        role: 'VIP',
        avatar: 'https://picsum.photos/seed/user4/100/100',
        isOnline: true,
        pastes: 21,
        comments: 34,
        joined: '2023-03-10'
      },
      {
        id: 5,
        name: 'Angela Moss',
        email: 'angela.m@e-corp.com',
        role: 'VIP',
        avatar: 'https://picsum.photos/seed/user5/100/100',
        isOnline: false,
        pastes: 3,
        comments: 5,
        joined: '2023-05-01'
      },
      {
        id: 6,
        name: 'Whiterose',
        email: 'whiterose@darkarmy.com',
        role: 'Criminal',
        avatar: 'https://picsum.photos/seed/user6/100/100',
        isOnline: true,
        pastes: 99,
        comments: 0,
        joined: '2023-06-06'
      },
      {
        id: 7,
        name: 'Phillip Price',
        email: 'price@e-corp.com',
        role: 'CEO',
        avatar: 'https://picsum.photos/seed/user7/100/100',
        isOnline: false,
        pastes: 1,
        comments: 800,
        joined: '2023-01-01'
      },
];
