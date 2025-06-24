import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlusCircle, Upload } from "lucide-react";

export default function CreateCoursePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
        <PlusCircle className="h-8 w-8 text-primary" />
        Crear Nuevo Curso
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Detalles del Curso</CardTitle>
          <CardDescription>
            Completa la información básica para tu nuevo curso.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título del Curso</Label>
            <Input id="title" placeholder="Ej: Introducción al Marketing Digital" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea id="description" placeholder="Describe de qué trata el curso..." />
          </div>
           <div className="space-y-2">
            <Label>Imagen de Portada</Label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-muted-foreground"/>
                      <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
                      <p className="text-xs text-muted-foreground">SVG, PNG, JPG (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div> 
          </div>
          <div className="flex justify-end">
            <Button>Guardar y Continuar</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
