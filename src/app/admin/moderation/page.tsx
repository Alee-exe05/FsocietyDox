
"use client";
import { ModerationTool } from "@/app/components/dashboard/moderation-tool";

export default function ModerationPage() {
    return (
        <main className="p-4 md:p-8">
            <div className="w-full max-w-4xl mx-auto">
                <ModerationTool />
            </div>
        </main>
    );
}

