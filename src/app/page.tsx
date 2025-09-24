"use client";

import React from 'react';
import { AppHeader } from '@/app/components/layout/app-header';
import { Hero } from '@/app/components/layout/hero';
import { useLanguage } from '@/contexts/language-context';
import { ModulesTable } from './components/dashboard/modules-table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function Home() {
  const { dictionary } = useLanguage();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <main className="flex-1">
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
    </div>
  );
}
