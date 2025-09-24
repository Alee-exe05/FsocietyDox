
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FsocietyLogo } from '../FsocietyLogo';

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);


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
       <div className="flex-1 md:hidden">
         <FsocietyLogo />
       </div>
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
       <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex items-center gap-2">
            <div className="w-[180px] hidden md:block">
                <LanguageSwitcher />
            </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <HamburgerIcon />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Main navigation links for the application.</SheetDescription>
            </SheetHeader>
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
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
