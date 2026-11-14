import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: portfolioData.meta.siteTitle,
  description: portfolioData.meta.siteDescription,
  metadataBase: new URL(`https://${portfolioData.meta.domain}`),
  openGraph: {
    title: portfolioData.meta.siteTitle,
    description: portfolioData.meta.siteDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-canvas text-ink-primary font-sans antialiased bg-grid-pattern selection:bg-accent/25 selection:text-ink-primary">
        {children}
      </body>
    </html>
  );
}
