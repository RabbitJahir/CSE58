"use client";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./components/footer.module.css";
import NewVersionPrompt from "./components/NewServerPromt";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cleanup old React/Vite caches and service workers
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((regs) =>
        regs.forEach((reg) => reg.unregister())
      );
    }
    window.caches.keys().then((names) =>
      names.forEach((name) => caches.delete(name))
    );
  }, []);

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "UITS CSE 58",
  description: "Kazi Rabit Jahir's, batch 58 journal, Next.js",
  manifest: "/manifest.json",
};

// Viewport + theme color
export const generateViewport = () => ({
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#000000",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />

        {/* Apple PWA */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-touch-icon-76x76.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* New version update prompt */}
        <NewVersionPrompt />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-black/20 backdrop-blur-sm text-center">
          <p>
            &copy; CSE | <span className={styles.rabbitGlow}>Mr_Rabbit</span> |{" "}
            <a
              href="https://github.com/RabbitJahir"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </p>
          <p>
            <span
              className="
                relative
                bg-gradient-to-r 
                from-white via-[#FFD700] via-[#FFEC7D] via-[#FFD700] to-white
                bg-[length:220%_100%] 
                bg-clip-text 
                text-transparent 
                animate-[shine_2s_linear_infinite]
                drop-shadow-[0_0_5px_#FFD700]
              "
            >
              inspirators: BitRanger, Zirconium001, greyscale021, LulzSec6824,
              HelloTeam
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
