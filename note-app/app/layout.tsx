import type { Metadata } from "next";
import "./globals.css";
import Notification from "@/components/notifications";
import { Suspense } from "react";
import { Circles } from "react-loader-spinner";

export const metadata: Metadata = {
  title: "Note App",
  description: "Create Notes On The Fly",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
  }) {
  
  const circles = (
    <Circles
      height="40"
      width="40"
      color="#355CFF"
      ariaLabel="circles-loading"
      wrapperClass=""
      visible={true}
    />
  )
  return (
    <html lang="en">
      <body>
        <Suspense fallback={circles}>
          <main className="h-screen overflow-y-scroll no-scrollbar w-full 2xl:w-[1440px] mx-auto">
            {children}
            <Notification />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
