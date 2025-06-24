"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from 'next/link';

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 4L42.7846 14V34L24 44L5.21539 34V14L24 4Z" fill="hsl(var(--primary))"/>
      <path d="M24 4L5.21539 14V34L24 44L42.7846 34V14L24 4Z" stroke="hsl(var(--primary-foreground))" strokeWidth="2"/>
      <path d="M14.6077 19.5L24 24.5L33.3923 19.5" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6077 29.5L24 34.5L33.3923 29.5" stroke="hsl(var(--primary-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <Link href="/dashboard" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold font-headline text-foreground hidden sm:inline-block">NexusAlpri</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-9 w-9",
            },
          }}
        />
      </div>
    </header>
  );
}
