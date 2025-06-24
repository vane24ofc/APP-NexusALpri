"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { UserRole, NavLink } from "@/types";
import { navLinks } from "@/lib/constants";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";

const Logo = () => (
    <div className="flex items-center gap-2 p-2">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L42.7846 14V34L24 44L5.21539 34V14L24 4Z" fill="hsl(var(--primary))"/>
            <path d="M24 4L5.21539 14V34L24 44L42.7846 34V14L24 4Z" stroke="hsl(var(--primary-foreground))" strokeWidth="2"/>
            <path d="M14.6077 19.5L24 24.5L33.3923 19.5" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.6077 29.5L24 34.5L33.3923 29.5" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-bold font-headline text-foreground">NexusAlpri</span>
    </div>
)


export default function AppSidebar({ userRole }: { userRole: UserRole }) {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const links = navLinks[userRole] || navLinks.student;

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          {links.map((link: NavLink) => (
            <SidebarMenuItem key={link.label}>
              <Link href={link.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  tooltip={link.label}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start gap-2" onClick={() => signOut({ redirectUrl: '/' })}>
          <LogOut />
          <span>Cerrar Sesión</span>
        </Button>
      </SidebarFooter>
    </>
  );
}
