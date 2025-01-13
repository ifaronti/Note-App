import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Note App",
  description: "Create Notes On The Fly",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="h-screen overflow-y-scroll no-scrollbar w-full 2xl:w-[1440px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
