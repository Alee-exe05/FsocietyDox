"use client";

import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { User } from "lucide-react";

interface Activity {
    id: number;
    user: string;
    avatar: string;
    action: string;
    time: string;
}

const possibleUsers = [
    { name: 'mr.robot', avatar: '/avatars/1.png' },
    { name: 'darlene', avatar: '/avatars/2.png' },
    { name: 'elliot', avatar: '/avatars/3.png' },
    { name: 'tyrell', avatar: '/avatars/4.png' },
    { name: 'angela', avatar: '/avatars/5.png' },
    { name: 'whiterose', avatar: '/avatars/6.png' },
];

const possibleActions = [
    "uploaded a new module",
    "commented on a paste",
    "updated their profile",
    "logged in",
    "logged out",
];

const generateRandomActivity = (): Activity => {
    const user = possibleUsers[Math.floor(Math.random() * possibleUsers.length)];
    const action = possibleActions[Math.floor(Math.random() * possibleActions.length)];
    const time = `${Math.floor(Math.random() * 59) + 1}m ago`;
    return {
        id: new Date().getTime() + Math.random(),
        user: user.name,
        avatar: `https://i.pravatar.cc/40?u=${user.name}`,
        action,
        time,
    };
};

export function RecentActivity() {
  const { dictionary } = useLanguage();
  const { recent_activity } = dictionary.info_users;
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;

    // Initial population
    const initialActivities = Array.from({ length: 5 }, generateRandomActivity);
    setActivities(initialActivities);

    const interval = setInterval(() => {
        setActivities(prevActivities => {
            const newActivity = generateRandomActivity();
            const newActivities = [newActivity, ...prevActivities];
            if (newActivities.length > 10) {
                newActivities.pop();
            }
            return newActivities;
        });
    }, 5000);

    return () => clearInterval(interval);

  }, [isMounted]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{recent_activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar} alt="Avatar" />
                <AvatarFallback>{activity.user.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user}
                </p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">
                {activity.time}
              </div>
            </div>
          ))
        ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center text-muted-foreground p-8">
                <User className="h-8 w-8" />
                <p className="text-sm">No recent activity</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
