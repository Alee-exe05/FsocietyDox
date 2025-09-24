
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function SystemLogsPage() {
    return (
        <main className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <FileText />
                        System Logs
                    </CardTitle>
                    <CardDescription>
                        Review important system and staff activity logs. This feature is under construction.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-12">
                        <p>System Logs functionality will be implemented here.</p>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
