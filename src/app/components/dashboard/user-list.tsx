"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { users as initialUsers, User, UserRole } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

const roleOrder: UserRole[] = ['CEO', 'Admin', 'VIP', 'Criminal'];

const getRoleClass = (role: UserRole) => {
    switch (role) {
      case 'CEO':
        return 'text-red-500 font-bold';
      case 'Admin':
        return 'text-violet-400 animate-glitter font-bold';
      case 'VIP':
        return 'text-yellow-400 animate-glitter font-bold';
      default:
        return 'text-foreground';
    }
  };

export function UserList() {
  const { dictionary } = useLanguage();

  const groupedUsers = roleOrder.reduce((acc, role) => {
    const usersInRole = initialUsers.filter(user => user.role === role);
    if (usersInRole.length > 0) {
      acc[role] = usersInRole;
    }
    return acc;
  }, {} as Record<UserRole, User[]>);

  return (
    <Card className="border-none shadow-none bg-transparent">
        <CardHeader>
            <CardTitle className="font-headline">{dictionary.users.title}</CardTitle>
            <CardDescription>{dictionary.users.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
            {Object.entries(groupedUsers).map(([role, users]) => (
            <div key={role}>
                <h3 className="font-headline text-xl font-bold mb-2 text-primary">{role}</h3>
                <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-primary/20">
                    <TableHead>ID</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Pastes</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead className="text-right">Joined</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.id} className="border-b border-primary/10 hover:bg-secondary/30">
                        <TableCell>{user.id}</TableCell>
                        <TableCell className={cn("font-medium", getRoleClass(user.role))}>{user.name}</TableCell>
                        <TableCell>{user.pastes}</TableCell>
                        <TableCell>{user.comments}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{user.joined}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
            ))}
      </CardContent>
    </Card>
  );
}
