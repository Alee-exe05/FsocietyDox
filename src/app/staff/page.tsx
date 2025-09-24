
"use client";

import React, { useState, useEffect } from 'react';
import { PinInput } from '@/app/components/staff/pin-input';
import { StaffChat } from '@/app/components/staff/staff-chat';
import { AdminChat } from '@/app/components/staff/admin-chat';
import { useLanguage } from '@/contexts/language-context';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Shield } from "lucide-react"
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/layout/app-sidebar";
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';


const STAFF_PIN = "666";

export default function StaffPage() {
    const { dictionary } = useLanguage();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeChat, setActiveChat] = useState<'staff' | 'admin'>('staff');
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);
    
    if (loading || !user) {
        return <div>Loading...</div>;
    }

    const handlePinSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <SidebarProvider>
            <Sidebar>
                <AppSidebar />
            </Sidebar>
            <SidebarInset>
                <main className="flex-1 p-4 md:p-10">
                     <div className="absolute top-4 left-4">
                        <SidebarTrigger />
                    </div>
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3">
                            <Shield className="h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" />
                            <h1 className="text-4xl font-bold font-headline">{dictionary.staff.title}</h1>
                        </div>
                        <p className="text-muted-foreground mt-2">{dictionary.staff.description}</p>
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
                            <div className="lg:hidden">
                                <div className="flex justify-between items-center mb-4 px-2">
                                    <h2 className="text-xl font-semibold capitalize">{activeChat === 'staff' ? dictionary.staff.staffChat.title : dictionary.staff.adminChat.title}</h2>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreVertical className="h-5 w-5" />
                                                <span className="sr-only">{dictionary.staff.selectChat}</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onSelect={() => setActiveChat('staff')}>
                                                {dictionary.staff.staffChat.title}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onSelect={() => setActiveChat('admin')}>
                                                {dictionary.staff.adminChat.title}
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                {activeChat === 'staff' && <StaffChat />}
                                {activeChat === 'admin' && <AdminChat />}
                            </div>
                        </>
                    )}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
