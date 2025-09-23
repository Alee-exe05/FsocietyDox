"use client";

import React from 'react';
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
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const roleOrder: UserRole[] = ['CEO', 'Admin', 'VIP', 'Criminal'];

const getRoleClass = (role: UserRole) => {
    switch (role) {
      case 'CEO':
        return 'text-red-500 font-bold';
      case 'Admin':
        return 'text-violet-400 font-bold';
      case 'VIP':
        return 'text-yellow-400 font-bold';
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
    <div className="space-y-8">
        <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl">{dictionary.users.title}</CardTitle>
                <CardDescription>{dictionary.users.description}</CardDescription>
            </CardHeader>
        </Card>
        {Object.entries(groupedUsers).map(([role, users]) => (
        <div key={role}>
            <h3 className="font-headline text-xl font-bold mb-2 text-foreground">{role}</h3>
            <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-b border-primary/20">
                <TableHead className="text-foreground">ID</TableHead>
                <TableHead className="text-foreground">Username</TableHead>
                <TableHead className="text-foreground">Pastes</TableHead>
                <TableHead className="text-foreground">Comments</TableHead>
                <TableHead className="text-right text-foreground">Joined</TableHead>
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
    </div>
  );
}
