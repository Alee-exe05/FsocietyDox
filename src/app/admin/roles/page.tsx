
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function RolesPage() {
    return (
        <main className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2">
                        <ShieldCheck />
                        Roles & Permissions
                    </CardTitle>
                    <CardDescription>
                        Configure user roles and their specific permissions. This feature is under construction.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-12">
                        <p>Role and permission management functionality will be implemented here.</p>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
