"use client";

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { users as initialUsers, User } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

export function UserList() {
  const [users, setUsers] = useState<User[]>(
    initialUsers.map((u) => ({ ...u, isOnline: Math.random() > 0.3 }))
  );
  const { dictionary } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((currentUsers) => {
        const userIndexToToggle = Math.floor(Math.random() * currentUsers.length);
        return currentUsers.map((user, index) => {
          if (index === userIndexToToggle) {
            return { ...user, isOnline: !user.isOnline };
          }
          return user;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
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
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {user.isOnline ? dictionary.users.online : dictionary.users.offline}
                </span>
                <div
                  className={cn(
                    'h-2.5 w-2.5 rounded-full',
                    user.isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
