import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Outfit, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
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
    <html lang="en" className={cn(outfit.variable, spaceGrotesk.variable, "dark scroll-smooth")} suppressHydrationWarning>
      <body className={cn("font-sans bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}