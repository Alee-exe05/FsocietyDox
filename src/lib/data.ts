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
  { id: 1, name: 'Tyrell Wellick', role: 'CEO', avatar: 'https://picsum.photos/seed/tyrell/100/100', pastes: 5, comments: 12, joined: '2022-01-15' },
  { id: 2, name: 'Darlene Alderson', role: 'Admin', avatar: 'https://picsum.photos/seed/darlene/100/100', pastes: 23, comments: 88, joined: '2021-11-30' },
  { id: 3, name: 'Angela Moss', role: 'VIP', avatar: 'https://picsum.photos/seed/angela/100/100', pastes: 2, comments: 5, joined: '2022-03-10' },
  { id: 4, name: 'Phillip Price', role: 'CEO', avatar: 'https://picsum.photos/seed/price/100/100', pastes: 1, comments: 3, joined: '2020-05-20' },
  { id: 5, name: 'Whiterose', role: 'Criminal', avatar: 'https://picsum.photos/seed/whiterose/100/100', pastes: 50, comments: 0, joined: '2019-01-01' },
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
