import type { User } from './users';

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
        id: '1',
        filename: 'pl_20231026_1.txt',
        uploadDate: '2023-10-26',
        content: 'Leaked E-Corp presentation on Project Berenstain.',
        uploader: {
            id: 4,
            name: 'Tyrell Wellick',
            email: 'tyrell.w@e-corp.com',
            role: 'VIP',
            avatar: 'https://picsum.photos/seed/user4/100/100',
            pastes: 21,
            comments: 34,
            joined: '2023-03-10'
        },
    },
    {
        id: '2',
        filename: 'da_manifesto.txt',
        uploadDate: '2023-10-25',
        content: 'Internal manifesto of the Dark Army.',
        uploader: {
            id: 6,
            name: 'Whiterose',
            email: 'whiterose@darkarmy.com',
            role: 'Criminal',
            avatar: 'https://picsum.photos/seed/user6/100/100',
            pastes: 99,
            comments: 0,
            joined: '2023-06-06'
        },
    },
    {
        id: '3',
        filename: 'fsoc_init.txt',
        uploadDate: '2023-10-24',
        content: 'Initial communication logs for fsociety.',
        uploader: {
            id: 1,
            name: 'Elliot Alderson',
            email: 'elliot.a@protonmail.com',
            role: 'Admin',
            avatar: 'https://picsum.photos/seed/user1/100/100',
            pastes: 12,
            comments: 140,
            joined: '2023-01-15'
        },
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
