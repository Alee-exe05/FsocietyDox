export type UserRole = 'CEO' | 'Admin' | 'VIP' | 'Normal';

export interface User {
  name: string;
  role: UserRole;
  avatar: string;
  isOnline?: boolean;
}

export interface Module {
  id: string;
  filename: string;
  uploadDate: string;
  content: string;
  uploader: User;
}

export const users: User[] = [
  { name: 'Tyrell Wellick', role: 'CEO', avatar: 'https://picsum.photos/seed/tyrell/100/100' },
  { name: 'Darlene Alderson', role: 'Admin', avatar: 'https://picsum.photos/seed/darlene/100/100' },
  { name: 'Angela Moss', role: 'VIP', avatar: 'https://picsum.photos/seed/angela/100/100' },
  { name: 'Phillip Price', role: 'CEO', avatar: 'https://picsum.photos/seed/price/100/100' },
  { name: 'Whiterose', role: 'Admin', avatar: 'https://picsum.photos/seed/whiterose/100/100' },
];

export const modules: Module[] = [
  {
    id: 'mod-1',
    filename: 'E-Corp_Financials_Q3.txt',
    uploadDate: '2023-10-28',
    content: 'Sensitive financial data...',
    uploader: users[0],
  },
  {
    id: 'mod-2',
    filename: 'Dark_Army_Op_Manual.txt',
    uploadDate: '2023-10-27',
    content: 'Tactical information...',
    uploader: users[4],
  },
  {
    id: 'mod-3',
    filename: 'AllSafe_Client_List.txt',
    uploadDate: '2023-10-25',
    content: 'Client PII...',
    uploader: users[2],
  },
  {
    id: 'mod-4',
    filename: 'fsociety_manifesto.txt',
    uploadDate: '2023-10-22',
    content: 'Our mission statement.',
    uploader: { name: 'Mr. Robot', role: 'Admin', avatar: '' },
  },
];

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
