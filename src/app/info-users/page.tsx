"use client";

import { AppHeader } from "@/app/components/layout/app-header";
import { InfoUsers } from "@/app/components/dashboard/info-users";

export default function InfoUsersPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10">
                <InfoUsers />
            </main>
        </div>
    );
}
