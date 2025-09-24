
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
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { users as initialUsers, User, UserRole } from '@/lib/data/users';

const navLinks: { href: string; label: string; icon: React.ElementType; roles: UserRole[] }[] = [
    { href: '/admin', label: 'Dashboard', icon: Home, roles: ['Super Admin', 'Admin', 'Moderatore', 'Utente Staff'] },
    { href: '/admin/user-management', label: 'User Management', icon: Users, roles: ['Super Admin', 'Admin'] },
    { href: '/admin/roles', label: 'Roles & Permissions', icon: ShieldCheck, roles: ['Super Admin'] },
    { href: '/admin/chat', label: 'Staff Chat', icon: MessageSquare, roles: ['Super Admin', 'Admin', 'Moderatore', 'Utente Staff'] },
    { href: '/admin/admin-chat', label: 'Admin Chat', icon: MessageCircle, roles: ['Super Admin', 'Admin'] },
    { href: '/admin/moderation', label: 'Moderation', icon: Shield, roles: ['Super Admin', 'Admin', 'Moderatore'] },
    { href: '/admin/logs', label: 'System Logs', icon: FileText, roles: ['Super Admin'] },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        setUsers(initialUsers);
        // In a real app, you'd fetch the current logged-in user.
        // For this example, we'll try to find a default user or leave it undefined.
        setCurrentUser(initialUsers.find(u => u.name === 'Elliot Alderson'));
    }, []);

    const visibleLinks = useMemo(() => {
        if (!currentUser) return []; // Return no links if no user is logged in
        return navLinks.filter(link => link.roles.includes(currentUser.role));
    }, [currentUser]);

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
             {/* Show all links if no user is defined for development/showcase */}
             {!currentUser && navLinks.map(link => (
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
      {currentUser && (
        <>
          <SidebarSeparator />
          <SidebarFooter className="p-2">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarImage src={currentUser.avatar} data-ai-hint="hacker avatar" />
                    <AvatarFallback>{currentUser.name.substring(0,2)}</AvatarFallback>
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
      )}
    </>
  );
}
