import "./globals.css";
import NewVersionPrompt from "./components/NewServerPromt";
import ServiceWorkerUpdater from "./components/ServiceWorkerUpdate";
import type { Viewport } from "next";

export const metadata = {
  title: "UITS CSE 58",
  description: "Batch 58 from notunbazar",
};

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
      <head>
        {/* Apple PWA */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CSE58" />
      </head>

      <body className="min-h-screen flex flex-col">

        {/* 🔥 THIS HANDLES SW LOGIC */}
        <ServiceWorkerUpdater />

        <main className="flex-grow border-b-2 border-white">{children}</main>

        <footer className="p-4 bg-white/20 backdrop-blur-sm text-center">
          <p>
            &copy; CSE | <span className="rabbitGlow">Mr_Rabbit</span> |{" "}
            <a href="https://github.com/RabbitJahir" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}