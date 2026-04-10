import "./globals.css";
import NewVersionPrompt from "./components/NewServerPromt";
import type { Viewport } from "next";
import SWRegister from "./components/SWRegister";
import SWCleanupClient from "./components/SWCleanupClient";

// Metadata
export const metadata = {
  title: "UITS CSE 58",
  description: "Batch 58 from notunbazar",
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">

        {/* ✅ THIS is safe */}
        <SWCleanupClient />

        <SWRegister />

        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <NewVersionPrompt />
        </div>

        <main className="flex-grow border-b-2 border-white">
          {children}
        </main>

        <footer className="p-4 bg-white/20 backdrop-blur-sm text-center">
          <p>&copy; CSE | Mr_Rabbit</p>
        </footer>

      </body>
    </html>
  );
}