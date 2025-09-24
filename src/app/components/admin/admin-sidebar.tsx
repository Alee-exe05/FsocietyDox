
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
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Shield,
  MessageCircle,
} from 'lucide-react';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { users } from '@/lib/data/users';
import { useMemo } from 'react';

const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: Home, roles: ['Admin', 'CEO'] },
    { href: '/admin/user-management', label: 'User Management', icon: Users, roles: ['Admin', 'CEO'] },
    { href: '/admin/chat', label: 'Staff Chat', icon: MessageSquare, roles: ['Admin', 'CEO', 'VIP'] },
    { href: '/admin/admin-chat', label: 'Admin Chat', icon: MessageCircle, roles: ['Admin', 'CEO'] },
    { href: '/admin/moderation', label: 'Moderation', icon: Shield, roles: ['Admin', 'CEO', 'VIP'] },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const currentUser = useMemo(() => users.find(u => u.name === 'Elliot Alderson'), []);

    const visibleLinks = useMemo(() => {
        if (!currentUser) return [];
        return navLinks.filter(link => link.roles.includes(currentUser.role));
    }, [currentUser]);


    if (!currentUser) return null;

  return (
    <>
      <SidebarHeader>
        <FsocietyLogo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
            {visibleLinks.map(link => (
                <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton 
                        asChild
                        isActive={pathname === link.href}
                    >
                        <Link href={link.href}>
                            <link.icon />
                            {link.label}
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="p-2">
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src="https://picsum.photos/seed/fsociety/100/100" data-ai-hint="hacker avatar" />
                <AvatarFallback>EA</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="truncate font-semibold">{currentUser.name}</p>
                <p className="truncate text-sm text-muted-foreground">{currentUser.email}</p>
            </div>
            <SidebarMenuButton asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Link href="#" aria-label="Log Out">
                    <LogOut />
                </Link>
            </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </>
  );
}
