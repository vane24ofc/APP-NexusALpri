import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Megaphone } from "lucide-react";

const announcements = [
  {
    title: "Actualización de Políticas de Vacaciones",
    author: "Admin",
    date: "2024-07-15",
    content: "Hemos actualizado nuestras políticas de vacaciones para el próximo año fiscal. Por favor, revisen el documento en la biblioteca de recursos.",
    category: "Importante",
  },
  {
    title: "Nuevo Curso Disponible: Ciberseguridad Básica",
    author: "Instructor",
    date: "2024-07-10",
    content: "¡Ya está disponible el nuevo curso de ciberseguridad para todo el personal! La inscripción es obligatoria y debe completarse antes de fin de mes.",
    category: "Cursos",
  },
  {
    title: "Mantenimiento Programado de la Plataforma",
    author: "Admin",
    date: "2024-07-05",
    content: "La plataforma estará en mantenimiento este sábado de 2:00 a 4:00 AM. El acceso no estará disponible durante este tiempo.",
    category: "Sistema",
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
        <Megaphone className="h-8 w-8" />
        Anuncios
      </h1>

      <div className="space-y-6">
        {announcements.map((ann, index) => (
          <Card key={index} className="transition-all hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{ann.title}</CardTitle>
                <Badge variant={ann.category === 'Importante' ? 'destructive' : 'secondary'}>{ann.category}</Badge>
              </div>
              <CardDescription>
                <div className="flex items-center gap-2 text-xs">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={`https://placehold.co/32x32`} data-ai-hint="person portrait" />
                    <AvatarFallback>{ann.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>Publicado por {ann.author} el {ann.date}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{ann.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
