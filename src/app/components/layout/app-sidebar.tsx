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
} from 'lucide-react';
import { FsocietyLogo } from '@/app/components/FsocietyLogo';
import { LanguageSwitcher } from './language-switcher';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AppSidebar() {
  return (
    <>
      <SidebarHeader>
        <FsocietyLogo />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Dashboard" isActive>
              <Home />
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" tooltip="Analytics">
              <BarChart />
              Analytics
            </SidebarMenuButton>
          </SidebarMenuItem>
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
        <LanguageSwitcher />
      </SidebarFooter>
    </>
  );
}
