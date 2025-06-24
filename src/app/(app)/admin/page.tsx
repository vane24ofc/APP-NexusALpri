import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
        <ShieldAlert className="h-8 w-8 text-primary" />
        Panel de Administración
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Aquí es donde los administradores pueden gestionar usuarios, asignar roles y ver analíticas completas de la plataforma.
          </p>
          <div className="mt-4 p-8 border-2 border-dashed rounded-lg flex items-center justify-center bg-card">
            <p className="text-lg font-semibold text-muted-foreground">
              Componente de Gestión de Usuarios Próximamente
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
