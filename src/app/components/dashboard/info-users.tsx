"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, Wifi, UserPlus, Ban } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { UserActivityChart } from './user-activity-chart';
import { RecentActivity } from './recent-activity';

export function InfoUsers() {
    const { dictionary } = useLanguage();
    const { info_users } = dictionary;

    const stats = [
        {
            title: info_users.stats.total_users,
            value: '0',
            description: info_users.stats.total_users_desc,
            progress: 0,
            Icon: Users,
            color: 'text-primary',
            progressColor: 'bg-primary'
        },
        {
            title: info_users.stats.online_users,
            value: '0',
            description: info_users.stats.online_users_desc,
            progress: 0,
            Icon: Wifi,
            color: 'text-green-500',
            progressColor: 'bg-green-500'
        },
        {
            title: info_users.stats.new_users,
            value: '0',
            description: info_users.stats.new_users_desc,
            progress: 0,
            Icon: UserPlus,
            color: 'text-yellow-500',
            progressColor: 'bg-yellow-500'
        },
        {
            title: info_users.stats.banned_users,
            value: '0',
            description: info_users.stats.banned_users_desc,
            progress: 0,
            Icon: Ban,
            color: 'text-red-500',
            progressColor: 'bg-red-500'
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-headline font-bold">{info_users.title}</h1>
                <p className="text-muted-foreground">{info_users.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.Icon className={`h-5 w-5 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                            <Progress value={stat.progress} className={`mt-2 h-2 ${stat.progressColor}`} />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <UserActivityChart />
                </div>
                <div className="lg:col-span-1">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
