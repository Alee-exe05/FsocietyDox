"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const activities = [
    {
        avatar: "/avatars/01.png",
        fallback: "OM",
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "+$1,999.00"
    },
    {
        avatar: "/avatars/02.png",
        fallback: "JL",
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "+$39.00"
    },
    {
        avatar: "/avatars/03.png",
        fallback: "IN",
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "+$299.00"
    },
    {
        avatar: "/avatars/04.png",
        fallback: "WK",
        name: "William Kim",
        email: "will@email.com",
        amount: "+$99.00"
    },
    {
        avatar: "/avatars/05.png",
        fallback: "SD",
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        amount: "+$39.00"
    }
]

export function RecentActivity() {
    const { dictionary } = useLanguage();
    const { recentActivity } = dictionary.infoUsers;
  return (
    <Card>
        <CardHeader>
            <CardTitle>{recentActivity.title}</CardTitle>
            <CardDescription>{recentActivity.description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
            {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src={activity.avatar} alt="Avatar" />
                        <AvatarFallback>{activity.fallback}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            {activity.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {activity.email}
                        </p>
                    </div>
                    <div className="ml-auto font-medium">{activity.amount}</div>
                </div>
            ))}
        </CardContent>
    </Card>
  )
}
