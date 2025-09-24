import type { User } from './users';

export type UserRole = 'CEO' | 'Admin' | 'VIP' | 'Criminal';

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
