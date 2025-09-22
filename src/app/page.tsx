"use client";

import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import { AppSidebar } from '@/app/components/layout/app-sidebar';
import { AppHeader } from '@/app/components/layout/app-header';
import { StatsCards } from '@/app/components/dashboard/stats-cards';
import { DashboardChart } from '@/app/components/dashboard/dashboard-chart';
import { ModulesTable } from '@/app/components/dashboard/modules-table';
import { UserList } from '@/app/components/dashboard/user-list';
import { ModerationTool } from '@/app/components/dashboard/moderation-tool';

export default function Home() {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-full flex-col">
          <AppHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="col-span-1 lg:col-span-12">
                <StatsCards />
              </div>

              <div className="col-span-1 lg:col-span-8">
                <ModulesTable />
              </div>

              <div className="col-span-1 lg:col-span-4">
                <UserList />
              </div>

              <div className="col-span-1 lg:col-span-7">
                <DashboardChart />
              </div>

              <div className="col-span-1 lg:col-span-5">
                <ModerationTool />
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
