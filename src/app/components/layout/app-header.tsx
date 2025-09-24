
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '@/contexts/language-context';

export function AppHeader() {
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: '/', label: dictionary.navigation.home },
    { href: '/add-paste', label: dictionary.navigation.addPaste },
    { href: '/users', label: dictionary.navigation.users },
    { href: '/info-users', label: "Info Users" },
    { href: '/support', label: dictionary.navigation.support },
    { href: '/profile', label: 'Profile' },
    { href: '/admin', label: dictionary.navigation.admin },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            prefetch={true}
            className={cn(
              "transition-colors hover:text-foreground",
              pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-foreground" : "text-muted-foreground"
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
            <Button asChild variant="ghost">
                <Link href="/login" prefetch={true}>Login</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="/register" prefetch={true}>Register</Link>
            </Button>
          </div>
      </div>
    </header>
  );
}
