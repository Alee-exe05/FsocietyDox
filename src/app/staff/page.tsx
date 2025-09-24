
"use client";

import React, { useState } from 'react';
import { AppHeader } from "@/app/components/layout/app-header";
import { PinInput } from '@/app/components/staff/pin-input';
import { StaffChat } from '@/app/components/staff/staff-chat';
import { AdminChat } from '@/app/components/staff/admin-chat';
import { useLanguage } from '@/contexts/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const STAFF_PIN = "666";

export default function StaffPage() {
    const { dictionary } = useLanguage();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePinSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 p-4 md:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-headline">Staff Area</h1>
                    <p className="text-muted-foreground">Access restricted to authorized personnel.</p>
                </div>

                {!isAuthenticated ? (
                    <div className="flex justify-center">
                        <PinInput 
                            title={dictionary.staff.mainPin.title}
                            description={dictionary.staff.mainPin.description}
                            correctPin={STAFF_PIN} 
                            onSuccess={handlePinSuccess}
                        />
                    </div>
                ) : (
                    <>
                        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            <StaffChat />
                            <AdminChat />
                        </div>
                        <div className="block lg:hidden">
                            <Tabs defaultValue="staff" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="staff">Staff Chat</TabsTrigger>
                                    <TabsTrigger value="admin">Admin Chat</TabsTrigger>
                                </TabsList>
                                <TabsContent value="staff">
                                    <StaffChat />
                                </TabsContent>
                                <TabsContent value="admin">
                                    <AdminChat />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
