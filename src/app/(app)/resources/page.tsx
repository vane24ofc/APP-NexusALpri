import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, Download, Search } from "lucide-react";

const resources = [
  {
    title: "Manual de Empleado 2024",
    category: "Políticas Internas",
    date: "2024-01-15",
  },
  {
    title: "Guía de Estilo de Marca",
    category: "Marketing",
    date: "2023-11-20",
  },
  {
    title: "Plantillas de Presentación",
    category: "Recursos de Diseño",
    date: "2023-10-01",
  },
  {
    title: "Reporte Anual 2023",
    category: "Finanzas",
    date: "2024-02-28",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">
        Biblioteca de Recursos
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Filtrar Recursos</CardTitle>
          <CardDescription>
            Encuentra rápidamente los documentos que necesitas.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nombre..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="md:w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="politicas">Políticas Internas</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="diseno">Recursos de Diseño</SelectItem>
              <SelectItem value="finanzas">Finanzas</SelectItem>
            </SelectContent>
          </Select>
          <Button>Buscar</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:border-primary/50 transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.category} - Publicado: {resource.date}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Download className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
