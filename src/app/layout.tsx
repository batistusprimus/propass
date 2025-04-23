import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import HeaderSection from "@/components/HeaderSection";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Système de Prospection Passive | Bootcamp",
  description: "Un système de prospection passive disponible sous 30 jours, construit gratuitement pour vous.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://fast.wistia.com/embed/medias/YOUR_VIDEO_ID.jsonp"
          async
        />
        <Script
          src="https://fast.wistia.net/assets/external/E-v1.js"
          async
        />
      </head>
      <body className={inter.className}>
        <HeaderSection />
        <div className="pt-32">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
