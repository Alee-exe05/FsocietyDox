"use client";

import Link from 'next/link';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <FsocietyLogo />
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Home
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Add Paste
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Users
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Upgrades
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
          Support
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
                <Link href="#">Login</Link>
            </Button>
            <Button asChild>
                <Link href="#">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
