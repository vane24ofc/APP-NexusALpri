import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/helpers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  GraduationCap,
  PlusCircle,
  BarChart2,
  FileText,
} from "lucide-react";
import Link from "next/link";

const StatCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) => (
  <Card className="bg-card/50 backdrop-blur-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const AdminDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatCard title="Total Usuarios" value="150" icon={Users} />
      <StatCard title="Total Cursos" value="25" icon={BookOpen} />
      <StatCard title="Instructores Activos" value="12" icon={GraduationCap} />
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button>
          <Users className="mr-2 h-4 w-4" /> Gestionar Usuarios
        </Button>
        <Button variant="secondary">
          <PlusCircle className="mr-2 h-4 w-4" /> Crear Nuevo Curso
        </Button>
        <Button variant="secondary">
          <BarChart2 className="mr-2 h-4 w-4" /> Ver Reportes
        </Button>
      </CardContent>
    </Card>
  </div>
);

const InstructorDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatCard title="Mis Cursos" value="5" icon={BookOpen} />
      <StatCard title="Estudiantes Inscritos" value="78" icon={Users} />
      <StatCard title="Progreso Promedio" value="68%" icon={BarChart2} />
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/instructor/create-course">
            <PlusCircle className="mr-2 h-4 w-4" /> Crear Nuevo Curso
          </Link>
        </Button>
        <Button variant="secondary">
          <FileText className="mr-2 h-4 w-4" /> Ver Mis Cursos
        </Button>
      </CardContent>
    </Card>
  </div>
);

const StudentDashboard = () => (
  <div className="space-y-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatCard title="Cursos Inscritos" value="3" icon={GraduationCap} />
      <StatCard title="Cursos Completados" value="1" icon={BookOpen} />
      <StatCard title="Progreso General" value="45%" icon={BarChart2} />
    </div>
    <Card>
      <CardHeader>
        <CardTitle>Continuar Aprendiendo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
          <div>
            <h3 className="font-semibold">Introducción a React</h3>
            <p className="text-sm text-muted-foreground">Lección 5 de 12</p>
          </div>
          <Button asChild>
            <Link href="/courses/1">Continuar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const role = await getUserRole();

  const renderDashboard = () => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "instructor":
        return <InstructorDashboard />;
      case "student":
        return <StudentDashboard />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline text-foreground">
        Bienvenido de nuevo, {user.firstName || user.username}
      </h1>
      {renderDashboard()}
    </div>
  );
}
