"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';

export function AppHeader() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/add-paste', label: 'Add Paste' },
    { href: '/users', label: 'Users' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
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
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex items-center gap-2">
            <div className="w-[180px]">
                <LanguageSwitcher />
            </div>
            <Button asChild variant="ghost" disabled>
                <Link href="#">Login</Link>
            </Button>
            <Button asChild disabled>
                <Link href="#">Register</Link>
            </Button>
          </div>
      </div>
    </header>
  );
}
