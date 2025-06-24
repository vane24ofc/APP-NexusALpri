import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center space-y-6">
        <div className="inline-block p-4 bg-primary/20 rounded-full animate-pulse">
          <Rocket className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          NexusAlpri
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Tu plataforma e-learning corporativa. Optimizada para la eficiencia y una experiencia de usuario fluida y moderna.
        </p>
      </div>
      <div className="mt-10">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105">
          <Link href="/dashboard">Acceder al Panel</Link>
        </Button>
      </div>
      <footer className="absolute bottom-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} NexusAlpri. Todos los derechos reservados.
      </footer>
    </div>
  );
}
