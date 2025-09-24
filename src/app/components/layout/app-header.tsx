
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { FsocietyLogo } from '../FsocietyLogo';

export function AppHeader() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: '/', label: dictionary.navigation.home },
    { href: '/add-paste', label: dictionary.navigation.addPaste },
    { href: '/support', label: dictionary.navigation.support },
    { href: '/dashboard', label: dictionary.navigation.dashboard },
    { href: '/staff', label: dictionary.navigation.staff },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
       <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <FsocietyLogo />
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            prefetch={true}
            className={cn(
              "transition-colors hover:text-foreground",
              pathname === link.href ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
       <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
             <FsocietyLogo />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "transition-colors hover:text-foreground",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex items-center gap-2">
            <div className="w-[180px]">
                <LanguageSwitcher />
            </div>
        </div>
      </div>
    </header>
  );
}
