import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { ConditionalHeader } from "@/components/layout/ConditionalHeader";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { CookieBanner } from "@/components/ui/cookie-banner";

export const metadata: Metadata = {
  title: "Organization",
  description: "Let's Grow Together. Welcome to Organization — the world of wonders with technology and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0B0912] text-white relative">
        {/* Global Background Orb */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(185,108,255,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <ConditionalHeader />
          <main className="flex-1 relative">
            {children}
          </main>
          <ConditionalFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
