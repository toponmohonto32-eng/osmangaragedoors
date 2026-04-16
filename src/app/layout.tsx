import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.osmangaragedoors.com'),
  title: "Osman Garage Doors | Residential Garage Door Repair & Installation in Long Beach & Orange County",
  description: "Trusted residential garage door repair and installation for Long Beach & Orange County homeowners. Same-day service, honest pricing, family-owned. Spring replacement, new doors, openers. Call (562) 335-6674.",
  keywords: ["residential garage door repair", "garage door installation", "Long Beach", "Orange County", "home garage door", "spring replacement", "garage door opener", "same-day service", "family-owned garage door"],
  authors: [{ name: "Osman Garage Doors" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Osman Garage Doors | Residential Garage Door Experts",
    description: "Trusted by Orange County homeowners for garage door repair and installation. Same-day service, honest pricing, quality work.",
    url: "https://www.osmangaragedoors.com",
    siteName: "Osman Garage Doors",
    type: "website",
    images: [
      {
        url: "/hero-residential.png",
        width: 1200,
        height: 630,
        alt: "Osman Garage Doors - Residential Garage Door Services for Your Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Garage Doors | Residential Garage Door Experts",
    description: "Trusted by Orange County homeowners for garage door repair and installation. Same-day service, honest pricing, quality work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
