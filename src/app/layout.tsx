import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { esES } from "@clerk/localizations";
import { dark } from '@clerk/themes';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexusAlpri',
  description: 'Plataforma e-learning corporativa para microempresas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={esES}
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#9400D3',
          colorBackground: '#17151A',
          colorText: '#fcfcfd',
          colorInputBackground: '#26232a',
          colorInputText: '#fcfcfd',
        },
        layout: {
          socialButtonsVariant: 'iconButton',
          logoImageUrl: '/logo.svg'
        }
      }}
    >
      <html lang="es" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body className="font-body antialiased">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
