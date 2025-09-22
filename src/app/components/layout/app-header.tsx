"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          Home
        </Link>
        <Link href="/add-paste" className="text-muted-foreground transition-colors hover:text-foreground">
          Add Paste
        </Link>
        <Link href="/users" className="text-muted-foreground transition-colors hover:text-foreground">
          Users
        </Link>
        <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
          Terms
        </Link>
        <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
          Privacy
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
