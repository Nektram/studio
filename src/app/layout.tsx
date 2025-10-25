import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Go Delivery',
  description: 'Diseño Web y Delivery para Restaurantes en SLP',
  icons: {
    icon: [
      { url: '/icon.png?v=2', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png?v=2', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icon.png?v=2', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased bg-background text-foreground')} suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
