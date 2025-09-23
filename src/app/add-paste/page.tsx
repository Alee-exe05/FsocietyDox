
"use client";
import { AppHeader } from "@/app/components/layout/app-header";
import { AddPasteForm } from "@/app/components/add-paste-form";
import { useLanguage } from "@/contexts/language-context";

export default function AddPastePage() {
    const { dictionary } = useLanguage();
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    <AddPasteForm />
                </div>
            </main>
        </div>
    )
}
