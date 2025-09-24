
"use client";

import React, { useEffect } from 'react';
import { Hero } from '@/app/components/layout/hero';
import { useLanguage } from '@/contexts/language-context';
import { ModulesTable } from './components/dashboard/modules-table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/layout/app-sidebar";
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';

export default function Home() {
  const { dictionary } = useLanguage();
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

  return (
    <SidebarProvider>
      <Sidebar>
          <AppSidebar />
      </Sidebar>
      <SidebarInset>
          <main className="flex-1">
              <div className="absolute top-4 left-4">
                  <SidebarTrigger />
              </div>
              <Hero />
              <div className="px-4 md:px-10 pb-4 md:pb-10 space-y-8">
                <Card>
                      <CardHeader>
                          <CardTitle className="font-headline">{dictionary.modules.title}</CardTitle>
                          <CardDescription>{dictionary.modules.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <ModulesTable />
                      </CardContent>
                  </Card>
              </div>
          </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
