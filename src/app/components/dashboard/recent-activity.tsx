"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

const activities = [
  {
    user: "yAle01_",
    avatar: "https://picsum.photos/seed/yale/100/100",
    action: "Joined the platform",
    time: "10 minutes ago",
  },
];

export function RecentActivity() {
  const { dictionary } = useLanguage();
  const { recent_activity } = dictionary.info_users;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{recent_activity.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
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
        ))}
      </CardContent>
    </Card>
  );
}
