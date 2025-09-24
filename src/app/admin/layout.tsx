
"use client";

import React from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/app/components/admin/admin-sidebar';
import { useLanguage } from '@/contexts/language-context';
import { useRouter } from 'next/navigation';
import { users } from '@/lib/data/users';
import { AppHeader } from '../components/layout/app-header';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Temporary check for authorization. 
  // In a real app, this would be based on the actual logged-in user's session.
  const currentUser = users.find(u => u.role === 'Super Admin' || u.role === 'Admin');

  React.useEffect(() => {
    if (!currentUser) {
      router.replace('/');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <AppHeader />
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Access Denied</h1>
                    <p className="text-muted-foreground">Redirecting...</p>
                </div>
            </main>
        </div>
    );
  }

  return (
    <SidebarProvider>
        <Sidebar>
            <AdminSidebar />
        </Sidebar>
        <SidebarInset>
            {children}
        </SidebarInset>
    </SidebarProvider>
  );
}
