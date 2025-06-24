import type { NavLink } from "@/types";
import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  Megaphone,
  ShieldAlert,
  GraduationCap,
  PlusCircle,
  Users,
} from "lucide-react";

export const navLinks = {
  student: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Mis Cursos", href: "/courses", icon: GraduationCap },
    { label: "Recursos", href: "/resources", icon: FolderKanban },
    { label: "Anuncios", href: "/announcements", icon: Megaphone },
  ],
  instructor: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Gestionar Cursos", href: "/courses", icon: BookOpen },
    { label: "Crear Curso", href: "/instructor/create-course", icon: PlusCircle },
    { label: "Recursos", href: "/resources", icon: FolderKanban },
    { label: "Anuncios", icon: Megaphone, href: "/announcements" },
  ],
  admin: [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Gestionar Cursos", href: "/courses", icon: BookOpen },
    { label: "Gestionar Usuarios", href: "/admin", icon: Users },
    { label: "Recursos", href: "/resources", icon: FolderKanban },
    { label: "Anuncios", href: "/announcements", icon: Megaphone },
    { label: "Admin Panel", href: "/admin", icon: ShieldAlert },
  ],
} satisfies Record<string, NavLink[]>;
