import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { inter, karla } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Todoer",
  description: "Cross Platform Task Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`min-h-screen w-screen bg-background font-sans text-base text-fg antialiased ${inter.variable} ${karla.variable}`}
      >
        <Navbar />
        <main className="container h-full max-h-screen max-w-screen-lg overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
