"use client";

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users as initialUsers, User, UserRole } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { Separator } from '@/components/ui/separator';

const roleOrder: UserRole[] = ['CEO', 'Admin', 'VIP', 'Criminal'];

export function UserList() {
  const { dictionary } = useLanguage();

  const groupedUsers = initialUsers.reduce((acc, user) => {
    (acc[user.role] = acc[user.role] || []).push(user);
    return acc;
  }, {} as Record<UserRole, User[]>);

  const userImageHints: Record<string, string> = {
    'Tyrell Wellick': 'corporate man',
    'Darlene Alderson': 'woman hacker',
    'Angela Moss': 'business woman',
    'Phillip Price': 'old businessman',
    'Whiterose': 'elegant woman'
  }

  return (
    <Card className="border-2 border-primary/50">
      <CardHeader>
        <CardTitle className="font-headline">{dictionary.users.title}</CardTitle>
        <CardDescription>{dictionary.users.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {roleOrder.map(role => (
          groupedUsers[role] && (
            <div key={role}>
              <h3 className="text-lg font-semibold text-primary mb-3">{role}s</h3>
              <div className="space-y-4">
                {groupedUsers[role].map((user) => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={userImageHints[user.name]} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {role !== roleOrder[roleOrder.length - 1] && <Separator className="mt-6 bg-primary/20" />}
            </div>
          )
        ))}
      </CardContent>
    </Card>
  );
}
