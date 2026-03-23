import "./globals.css";
import NewVersionPrompt from "./components/NewServerPromt";
import type { Viewport } from "next";
import SWRegister from "./components/SWRegister";

// Metadata
export const metadata = {
  title: "UITS CSE 58",
  description: "Kazi Rabit Jahir's, batch 58 journal, Next.js",
};

// Viewport + theme color
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>

      <body className="min-h-screen flex flex-col">
        {/* New version update prompt */}
        <SWRegister />
        <NewVersionPrompt />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="p-4 bg-black/20 backdrop-blur-sm text-center">
          <p>
            &copy; CSE | <span className="rabbitGlow">Mr_Rabbit</span> |{" "}
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
