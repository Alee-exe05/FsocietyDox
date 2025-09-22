import { AppHeader } from "@/app/components/layout/app-header";
import { AddPasteForm } from "@/app/components/add-paste-form";

export default function AddPastePage() {
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
