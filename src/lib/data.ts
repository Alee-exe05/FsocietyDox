export type UserRole = 'CEO' | 'Admin' | 'VIP' | 'Criminal';

export interface User {
  id: number;
  name: string;
  role: UserRole;
  avatar: string;
  isOnline?: boolean;
  pastes: number;
  comments: number;
  joined: string;
}

export const users: User[] = [
    { id: 1, name: 'mr.robot', role: 'CEO', avatar: '/avatars/1.png', isOnline: true, pastes: 12, comments: 45, joined: '2023-01-15' },
    { id: 2, name: 'darlene', role: 'Admin', avatar: '/avatars/2.png', isOnline: true, pastes: 8, comments: 23, joined: '2023-02-20' },
    { id: 3, name: 'elliot', role: 'VIP', avatar: '/avatars/3.png', isOnline: false, pastes: 5, comments: 15, joined: '2023-03-10' },
    { id: 4, name: 'tyrell', role: 'VIP', avatar: '/avatars/4.png', isOnline: true, pastes: 3, comments: 8, joined: '2023-05-22' },
    { id: 5, name: 'angela', role: 'Criminal', avatar: '/avatars/5.png', isOnline: false, pastes: 1, comments: 2, joined: '2023-06-01' },
    { id: 6, name: 'whiterose', role: 'Admin', avatar: '/avatars/6.png', isOnline: true, pastes: 20, comments: 100, joined: '2022-12-01' },
];

export interface Module {
  id: string;
  filename: string;
  uploadDate: string;
  content: string;
  uploader: User;
}

export const modules: Module[] = [];

export const chartConfig = {
  uploads: {
    label: "Uploads",
    color: "hsl(var(--chart-1))",
  },
  moderations: {
    label: "Moderations",
    color: "hsl(var(--chart-2))",
  },
};

export const chartData = [
  { month: "January", uploads: 186, moderations: 80 },
  { month: "February", uploads: 305, moderations: 200 },
  { month: "March", uploads: 237, moderations: 120 },
  { month: "April", uploads: 73, moderations: 190 },
  { month: "May", uploads: 209, moderations: 130 },
  { month: "June", uploads: 214, moderations: 140 },
];
