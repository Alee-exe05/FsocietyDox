
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Settings, Activity } from 'lucide-react';
import Link from 'next/link';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the staff control panel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              User Management
            </CardTitle>
            <CardDescription>View, edit, and manage all users on the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="#">Manage Users</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Staff Chat
            </CardTitle>
            <CardDescription>Communicate with other staff members in real-time.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="#">Open Chat</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-6 w-6" />
              Platform Analytics
            </CardTitle>
            <CardDescription>Monitor platform activity and user statistics.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/info-users">View Analytics</Link>
            </Button>
          </CardContent>
        </Card>
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
            <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Roles & Permissions
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
