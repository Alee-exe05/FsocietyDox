
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
import { users as initialUsers, User, UserRole } from '@/lib/data/users';
import { cn } from '@/lib/utils';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Users, MoreHorizontal, Trash2, Edit, Shield } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const getRoleClass = (role: UserRole) => {
    switch (role) {
      case 'CEO':
        return 'text-red-500 font-bold';
      case 'Admin':
        return 'text-violet-400 font-bold';
      case 'VIP':
        return 'text-yellow-400 font-bold';
      case 'Criminal':
        return 'text-foreground font-bold';
      default:
        return 'text-foreground';
    }
};

export function UserManagementTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>(initialUsers);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">User Management</CardTitle>
            <CardDescription>View, manage, and edit user accounts.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between gap-4 mb-4">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="Search by name or email..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{filteredUsers.length} Users</span>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Stats</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div className="grid">
                                   <span className={cn("font-semibold", getRoleClass(user.role))}>{user.name}</span>
                                   <span className="text-xs text-muted-foreground">{user.email}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                             <Badge variant="outline" className={cn(getRoleClass(user.role))}>
                                {user.role}
                            </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                            <div className="text-xs">Pastes: {user.pastes}</div>
                            <div className="text-xs">Comments: {user.comments}</div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{user.joined}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit</DropdownMenuItem>
                                    <DropdownMenuItem><Shield className="mr-2 h-4 w-4" />Change Role</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-500 focus:text-red-500"><Trash2 className="mr-2 h-4 w-4" />Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                            No users found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
  );
}
