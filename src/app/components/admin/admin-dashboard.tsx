
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Settings, Activity, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';

const dashboardCards = [
    {
        title: "User Management",
        description: "View, edit, and manage all users on the platform.",
        href: "/admin/user-management",
        linkText: "Manage Users",
        icon: Users
    },
    {
        title: "Staff Chat",
        description: "Communicate with other staff members in real-time.",
        href: "/admin/chat",
        linkText: "Open Chat",
        icon: MessageSquare
    },
    {
        title: "Roles & Permissions",
        description: "Configure user roles and their specific permissions.",
        href: "/admin/roles",
        linkText: "Manage Roles",
        icon: ShieldCheck
    },
    {
        title: "System Logs",
        description: "Review important system and staff activity logs.",
        href: "/admin/logs",
        linkText: "View Logs",
        icon: FileText
    },
    {
        title: "Platform Analytics",
        description: "Monitor platform activity and user statistics.",
        href: "/info-users",
        linkText: "View Analytics",
        icon: Activity
    }
];

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the staff control panel.</p>
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
          <CardTitle>Quick Settings</CardTitle>
          <CardDescription>Quickly access important platform settings.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
            <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                General Settings
            </Button>
            <Button variant="destructive">
                <Activity className="mr-2 h-4 w-4" />
                System Status
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
