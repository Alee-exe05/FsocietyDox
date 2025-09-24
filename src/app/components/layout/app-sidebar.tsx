
"use client";

import Link from 'next/link';
import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  Home,
  Shield,
  Settings,
  LogOut,
  BarChart,
  FilePlus,
  LifeBuoy,
  Users
} from 'lucide-react';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { LanguageSwitcher } from './language-switcher';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, useUser } from '@/firebase';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/language-context';

export function AppSidebar() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const pathname = usePathname();
  const { dictionary } = useLanguage();

  const navLinks = [
    { href: '/', label: dictionary.navigation.home, icon: Home },
    { href: '/dashboard', label: dictionary.navigation.dashboard, icon: BarChart },
    { href: '/add-paste', label: dictionary.navigation.addPaste, icon: FilePlus },
    { href: '/staff', label: dictionary.navigation.staff, icon: Users },
    { href: '/support', label: dictionary.navigation.support, icon: LifeBuoy },
  ];

  return (
    <>
      <SidebarHeader>
        <FsocietyLogo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navLinks.map((link) => (
             <SidebarMenuItem key={link.href}>
                <SidebarMenuButton href={link.href} tooltip={link.label} isActive={pathname === link.href}>
                  <link.icon />
                  {link.label}
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Moderation">
              <Shield />
              Moderation
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Settings">
              <Settings />
              Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="p-2">
        {user && (
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary">
                    {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName || 'User'} data-ai-hint="user avatar" />}
                    <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                    <p className="truncate font-semibold">{user.displayName || 'Anonymous'}</p>
                    <p className="truncate text-sm text-muted-foreground">{user.email}</p>
                </div>
                <SidebarMenuButton asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => signOut()}>
                    <Link href="#" aria-label="Log Out">
                        <LogOut />
                    </Link>
                </SidebarMenuButton>
            </div>
        )}
        <LanguageSwitcher />
      </SidebarFooter>
    </>
  );
}
