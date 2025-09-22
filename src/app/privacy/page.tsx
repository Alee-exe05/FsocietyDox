import { AppHeader } from "@/app/components/layout/app-header";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10">
                <h1 className="text-2xl font-bold">Privacy Policy</h1>
                {/* Content for privacy page */}
            </main>
        </div>
    )
}
