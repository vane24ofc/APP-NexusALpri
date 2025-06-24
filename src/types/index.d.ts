import type { LucideIcon } from "lucide-react";

export type UserRole = "admin" | "instructor" | "student";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
