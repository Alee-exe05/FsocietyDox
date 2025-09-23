"use client";

import React, { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';

const roleOrder: UserRole[] = ['CEO', 'Admin', 'VIP', 'Criminal'];

const getRoleClass = (role: UserRole) => {
    switch (role) {
      case 'CEO':
        return 'text-red-500 font-bold animate-glitter';
      case 'Admin':
        return 'text-violet-400 font-bold animate-glitter';
      case 'VIP':
        return 'text-yellow-400 font-bold';
      default:
        return 'text-foreground';
    }
};

export function UserList() {
  const { dictionary } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = initialUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedUsers = roleOrder.reduce((acc, role) => {
    const usersInRole = filteredUsers.filter(user => user.role === role);
    if (usersInRole.length > 0) {
      acc[role] = usersInRole;
    }
    return acc;
  }, {} as Record<UserRole, User[]>);

  const formatRoleDisplay = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  }

  return (
    <div className="space-y-8">
        <Card className="bg-transparent border-none shadow-none text-center">
            <CardHeader className="p-0">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl flex flex-col items-center">
                        <CardTitle className="font-headline text-3xl">{dictionary.users.title}</CardTitle>
                        <CardDescription>{dictionary.users.description}</CardDescription>
                        <div className="relative w-full max-w-sm mt-4">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search users..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {filteredUsers.length}
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
        </Card>
        {Object.keys(groupedUsers).length > 0 ? (
            Object.entries(groupedUsers).map(([role, users]) => (
            <div key={role}>
                <h3 className="font-headline text-xl font-bold mb-2 text-foreground">{formatRoleDisplay(role)}</h3>
                <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent border-b border-primary/20">
                    <TableHead className="text-foreground text-left">ID</TableHead>
                    <TableHead className="text-foreground text-left">Username</TableHead>
                    <TableHead className="text-foreground text-left">Pastes</TableHead>
                    <TableHead className="text-foreground text-left">Comments</TableHead>
                    <TableHead className="text-right text-foreground">Joined</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                    <TableRow key={user.id} className="border-b border-primary/10 hover:bg-secondary/30">
                        <TableCell className="text-left">{user.id}</TableCell>
                        <TableCell className={cn("font-medium text-left", getRoleClass(user.role))}>{user.name}</TableCell>
                        <TableCell className="text-left">{user.pastes}</TableCell>
                        <TableCell className="text-left">{user.comments}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{user.joined}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
            ))
        ) : (
            <p className="text-center text-muted-foreground mt-4">No users found.</p>
        )}
    </div>
  );
}
