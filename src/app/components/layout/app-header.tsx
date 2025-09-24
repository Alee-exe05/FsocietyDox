
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import { auth } from '@/lib/firebase/config';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { dictionary } = useLanguage();
  const { user, userProfile } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logout Successful",
        description: "You have been successfully logged out.",
      });
      router.push("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      toast({
        title: "Logout Failed",
        description: "An unexpected error occurred during logout.",
        variant: "destructive",
      });
    }
  };

  const navLinks = [
    { href: '/', label: dictionary.navigation.home },
    { href: '/add-paste', label: dictionary.navigation.addPaste },
    { href: '/users', label: dictionary.navigation.users },
    { href: '/info-users', label: "Info Users" },
    { href: '/support', label: dictionary.navigation.support },
  ];

  if (userProfile?.role === 'Super Admin' || userProfile?.role === 'Admin') {
    navLinks.push({ href: '/admin', label: dictionary.navigation.admin });
  }


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
             {user ? (
              <>
                <Button asChild variant="ghost">
                  <Link href="/profile" prefetch={true}>Profile</Link>
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login" prefetch={true}>Login</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/register" prefetch={true}>Register</Link>
                </Button>
              </>
            )}
          </div>
      </div>
    </header>
  );
}
