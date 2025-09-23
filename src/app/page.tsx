"use client";

import React from 'react';
import { AppHeader } from '@/app/components/layout/app-header';
import { ModulesTable } from '@/app/components/dashboard/modules-table';
import { Hero } from '@/app/components/layout/hero';
import { useLanguage } from '@/contexts/language-context';

export default function Home() {
  const { dictionary } = useLanguage();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex-1">
        <Hero />
        <div className="p-4 md:p-10 space-y-8">
            <ModulesTable />
        </div>
      </main>
    </div>
  );
}
