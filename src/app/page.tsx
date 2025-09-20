
// (Optional in Next.js 13+, but add if errors persist)
// import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Logo</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <h1 className="text-2xl font-bold p-4">Hello, world!</h1>
      </main>
      <footer className="border-t p-4 text-center">
        © 2025 My App
      </footer>
    </div>
  );
}
