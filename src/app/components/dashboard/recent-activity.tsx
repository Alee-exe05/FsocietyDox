"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { User } from "lucide-react";

const activities: any[] = [];

export function RecentActivity() {
  const { dictionary } = useLanguage();
  const { recent_activity } = dictionary.info_users;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{recent_activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
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
