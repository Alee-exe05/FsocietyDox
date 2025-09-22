"use client";

import React from 'react';
import { AppHeader } from '@/app/components/layout/app-header';
import { StatsCards } from '@/app/components/dashboard/stats-cards';
import { DashboardChart } from '@/app/components/dashboard/dashboard-chart';
import { ModulesTable } from '@/app/components/dashboard/modules-table';
import { UserList } from '@/app/components/dashboard/user-list';
import { ModerationTool } from '@/app/components/dashboard/moderation-tool';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-background p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatsCards />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-2">
                <ModulesTable />
            </div>
            <div>
                <UserList />
            </div>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-2">
                <DashboardChart />
            </div>
            <div>
                <ModerationTool />
            </div>
        </div>
      </main>
    </div>
  );
}
