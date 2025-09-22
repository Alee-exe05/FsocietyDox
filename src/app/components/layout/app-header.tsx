"use client";

import { SidebarTrigger } from '@/components/ui/sidebar';
import { useLanguage } from '@/contexts/language-context';

export function AppHeader() {
  const { dictionary } = useLanguage();
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm lg:h-[60px] lg:px-6">
      <SidebarTrigger className="md:hidden" />
      <h1 className="text-xl font-semibold md:text-2xl font-headline">
        {dictionary.page.title}
      </h1>
    </header>
  );
}
