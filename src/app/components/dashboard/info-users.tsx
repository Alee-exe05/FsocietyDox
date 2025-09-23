"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, UserPlus, UserX } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Progress } from '@/components/ui/progress';

export function InfoUsers() {
  const { dictionary } = useLanguage();

  const stats = [
    {
      title: dictionary.infoUsers.stats.totalUsers.title,
      value: '238',
      icon: <Users className="h-6 w-6 text-primary" />,
      description: dictionary.infoUsers.stats.totalUsers.description,
      progress: 85,
      trend: dictionary.infoUsers.stats.totalUsers.trend,
    },
    {
      title: dictionary.infoUsers.stats.onlineUsers.title,
      value: '1',
      icon: <UserCheck className="h-6 w-6 text-primary" />,
      description: dictionary.infoUsers.stats.onlineUsers.description,
      progress: 5,
      trend: dictionary.infoUsers.stats.onlineUsers.trend,
    },
    {
      title: dictionary.infoUsers.stats.newUsers.title,
      value: '3',
      icon: <UserPlus className="h-6 w-6 text-primary" />,
      description: dictionary.infoUsers.stats.newUsers.description,
      progress: 20,
      trend: dictionary.infoUsers.stats.newUsers.trend,
    },
    {
      title: dictionary.infoUsers.stats.bannedUsers.title,
      value: '0',
      icon: <UserX className="h-6 w-6 text-primary" />,
      description: dictionary.infoUsers.stats.bannedUsers.description,
      progress: 0,
      trend: dictionary.infoUsers.stats.bannedUsers.trend,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold font-headline">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <Progress value={stat.progress} aria-label={stat.trend} />
            <p className="text-xs text-muted-foreground">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
