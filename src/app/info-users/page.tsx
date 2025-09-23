
"use client";
import { AppHeader } from "@/app/components/layout/app-header";
import { InfoUsers } from "@/app/components/dashboard/info-users";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfoUsersPage() {
    const { dictionary } = useLanguage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10 flex flex-col items-center gap-8">
                <Card className="w-full max-w-4xl text-center border-none shadow-none">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">{dictionary.infoUsers.title}</CardTitle>
                        <CardDescription>{dictionary.infoUsers.description}</CardDescription>
                    </CardHeader>
                </Card>
                <div className="w-full max-w-4xl">
                    <InfoUsers />
                </div>
            </main>
        </div>
    )
}
