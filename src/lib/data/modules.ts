
import { users, User } from './users';

export type UserRole = 'CEO' | 'Admin' | 'VIP' | 'Criminal';

export interface Module {
  id: string;
  filename: string;
  uploadDate: string;
  content: string;
  uploader: User;
}

export const modules: Module[] = [
    { 
        id: 'mod001', 
        filename: 'ecorp_financials_q3.txt',
        uploadDate: '2024-07-28',
        content: 'E-Corp Q3 financial leak. Shows major vulnerabilities.',
        uploader: users.find(u => u.name === 'Elliot Alderson')!
    },
    {
        id: 'mod002',
        filename: 'dark_army_comm_log.txt',
        uploadDate: '2024-07-27',
        content: 'Intercepted communications from the Dark Army.',
        uploader: users.find(u => u.name === 'Whiterose')!
    },
    {
        id: 'mod003',
        filename: 'vera_gang_roster.txt',
        uploadDate: '2024-07-26',
        content: 'Full roster and hierarchy of Fernando Vera\'s operation.',
        uploader: users.find(u => u.name === 'Fernando Vera')!
    },
     {
        id: 'mod004',
        filename: 'allsafe_security_protocols.txt',
        uploadDate: '2024-07-25',
        content: 'Legacy security protocols from Allsafe Cybersecurity.',
        uploader: users.find(u => u.name === 'Angela Moss')!
    }
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
