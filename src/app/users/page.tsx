
"use client";
import { AppHeader } from "@/app/components/layout/app-header";
import { UserList } from "@/app/components/dashboard/user-list";
import { useLanguage } from "@/contexts/language-context";

export default function UsersPage() {
    const { dictionary } = useLanguage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10 flex justify-center">
                <div className="w-full max-w-4xl">
                    <UserList />
                </div>
            </main>
        </div>
    )
}
