
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function SystemLogsPage() {
    const { dictionary } = useLanguage();
    const { systemLogs: pageDict } = dictionary.admin;

    return (
        <main className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <FileText />
                        {pageDict.title}
                    </CardTitle>
                    <CardDescription>
                        {pageDict.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-12">
                        <p>{pageDict.underConstruction}</p>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
