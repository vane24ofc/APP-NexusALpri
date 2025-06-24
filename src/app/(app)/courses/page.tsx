import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Desarrollo Web Moderno con Next.js",
    category: "Tecnología",
    instructor: "Admin",
    image: "https://placehold.co/600x400",
    dataAiHint: "modern web development",
  },
  {
    id: 2,
    title: "Gestión de Proyectos con Agile",
    category: "Negocios",
    instructor: "Instructor",
    image: "https://placehold.co/600x400",
    dataAiHint: "project management",
  },
  {
    id: 3,
    title: "Principios de Diseño UI/UX",
    category: "Diseño",
    instructor: "Instructor",
    image: "https://placehold.co/600x400",
    dataAiHint: "ui ux design",
  },
  {
    id: 4,
    title: "Marketing Digital para Principiantes",
    category: "Marketing",
    instructor: "Admin",
    image: "https://placehold.co/600x400",
    dataAiHint: "digital marketing",
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold font-headline">Catálogo de Cursos</h1>
        <Button>
          <BookOpen className="mr-2 h-4 w-4" />
          Explorar Cursos
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden flex flex-col hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader className="p-0">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={course.dataAiHint}
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <Badge variant="secondary" className="mb-2">{course.category}</Badge>
              <CardTitle className="text-lg font-semibold line-clamp-2">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Por: {course.instructor}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link href={`/courses/${course.id}`}>Ver Curso</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
