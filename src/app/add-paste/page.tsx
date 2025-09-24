
"use client";
import { AddPasteForm } from "@/app/components/add-paste-form";

export default function AddPastePage() {
    return (
        <div className="flex min-h-screen w-full">
            <main className="flex-1" />
            <div className="w-full md:w-[450px] lg:w-[500px] border-l border-border flex-shrink-0">
                <AddPasteForm />
            </div>
        </div>
    )
}
