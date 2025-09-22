import { AppHeader } from "@/app/components/layout/app-header";

export default function AddPastePage() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10">
                <h1 className="text-2xl font-bold">Add New Paste</h1>
                {/* Content for adding a new paste */}
            </main>
        </div>
    )
}
