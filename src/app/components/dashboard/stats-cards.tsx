"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, Users, Percent } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function StatsCards() {
  const { dictionary } = useLanguage();

  const stats = [
    {
      title: dictionary.dashboard.stats.modules,
      value: '1,284',
      icon: <FileText className="h-6 w-6 text-primary" />,
      change: '+20.1% from last month',
    },
    {
      title: dictionary.dashboard.stats.moderated,
      value: '97.2%',
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      change: '+180.1% from last month',
    },
    {
      title: dictionary.dashboard.stats.users,
      value: '237',
      icon: <Users className="h-6 w-6 text-primary" />,
      change: '+2 from last hour',
    },
    {
      title: dictionary.dashboard.stats.flagged,
      value: '3.4%',
      icon: <Percent className="h-6 w-6 text-primary" />,
      change: '-0.2% from yesterday',
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
          <CardContent>
            <div className="text-3xl font-bold font-headline">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
