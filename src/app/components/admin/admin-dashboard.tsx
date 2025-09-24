
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Settings, Activity, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export function AdminDashboard() {
  const { dictionary } = useLanguage();
  const { dashboard: dashboardDict, navigation: navDict } = dictionary.admin;

  const dashboardCards = [
      {
          title: dashboardDict.userManagement.title,
          description: dashboardDict.userManagement.description,
          href: "/admin/user-management",
          linkText: dashboardDict.userManagement.linkText,
          icon: Users
      },
      {
          title: dashboardDict.staffChat.title,
          description: dashboardDict.staffChat.description,
          href: "/admin/chat",
          linkText: dashboardDict.staffChat.linkText,
          icon: MessageSquare
      },
      {
          title: dashboardDict.rolesPermissions.title,
          description: dashboardDict.rolesPermissions.description,
href: "/admin/roles",
          linkText: dashboardDict.rolesPermissions.linkText,
          icon: ShieldCheck
      },
      {
          title: dashboardDict.systemLogs.title,
          description: dashboardDict.systemLogs.description,
          href: "/admin/logs",
          linkText: dashboardDict.systemLogs.linkText,
          icon: FileText
      },
      {
          title: dashboardDict.platformAnalytics.title,
          description: dashboardDict.platformAnalytics.description,
          href: "/info-users",
          linkText: dashboardDict.platformAnalytics.linkText,
          icon: Activity
      }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold">{dashboardDict.title}</h1>
        <p className="text-muted-foreground">{dashboardDict.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dashboardCards.map((card, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <card.icon className="h-6 w-6" />
                        {card.title}
                    </CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href={card.href}>{card.linkText}</Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{dashboardDict.quickSettings.title}</CardTitle>
          <CardDescription>{dashboardDict.quickSettings.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                {dashboardDict.quickSettings.generalSettings}
            </Button>
            <Button variant="destructive">
                <Activity className="mr-2 h-4 w-4" />
                {dashboardDict.quickSettings.systemStatus}
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
