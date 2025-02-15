import type { Metadata } from "next";
import "./globals.css";
import Notification from "@/components/notifications";
import { Suspense } from "react";

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
      <Suspense fallback={<div>Loading...</div>}>
          <main className="h-screen overflow-y-scroll no-scrollbar w-full 2xl:w-[1440px] mx-auto">
              {children}
              <Notification />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
