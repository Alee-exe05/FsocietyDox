"use client";

import React from 'react';
import { AppHeader } from '@/app/components/layout/app-header';
import { ModulesTable } from '@/app/components/dashboard/modules-table';
import { ModerationTool } from '@/app/components/dashboard/moderation-tool';
import { Hero } from '@/app/components/layout/hero';
import { StatsCards } from './components/dashboard/stats-cards';
import { useLanguage } from '@/contexts/language-context';

export default function Home() {
  const { dictionary } = useLanguage();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex-1">
        <Hero />
        <div className="p-4 md:p-10 space-y-8">
            <StatsCards />
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <ModerationTool />
                </div>
                <div>
                    
                </div>
            </div>
            <ModulesTable />
        </div>
      </main>
    </div>
  );
}
