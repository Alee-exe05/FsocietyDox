
"use client";

import { AppHeader } from "@/app/components/layout/app-header";
import { ProfileSettings } from "@/app/components/profile-settings";


export default function ProfilePage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <ProfileSettings />
                </div>
            </main>
        </div>
    );
}

