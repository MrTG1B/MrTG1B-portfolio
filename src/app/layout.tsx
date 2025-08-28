import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Orbitron, Share_Tech_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  title: 'MrTG1B | Tirthankar Dasgupta',
  description: "Tirthankar Dasgupta's personal portfolio. A full-stack web developer specializing in creating modern and innovative web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(orbitron.variable, shareTechMono.variable, "dark scroll-smooth")} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body", "antialiased")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
