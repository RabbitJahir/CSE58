// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./components/footer.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UITS CSE 58",
  description: "Kazi Rabit Jahir's, batch 58 journal, nextjs",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-black/20 backdrop-blur-sm text-center">
          <p>
            &copy; CSE | <span className={styles.rabbitGlow}>Mr_Rabbit</span> |
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
