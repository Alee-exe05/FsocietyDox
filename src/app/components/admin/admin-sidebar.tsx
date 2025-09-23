
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
} from 'lucide-react';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/user-management', label: 'User Management', icon: Users },
    { href: '/admin/chat', label: 'Staff Chat', icon: MessageSquare },
    { href: '/admin/moderation', label: 'Moderation', icon: Shield },
];

export function AdminSidebar() {
    const pathname = usePathname();
  return (
    <>
      <SidebarHeader>
        <FsocietyLogo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
            {navLinks.map(link => (
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
                <p className="truncate font-semibold">Elliot Alderson</p>
                <p className="truncate text-sm text-muted-foreground">elliot@fsociety.com</p>
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
