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
  title: "Osman Garage Doors | Professional Garage Door Repair & Installation in Long Beach, CA",
  description: "Professional garage door repair, installation, and maintenance services in Long Beach, CA. 24/7 emergency service, expert technicians, and guaranteed satisfaction. Call (562) 335-6674 for a free estimate.",
  keywords: ["garage door repair", "garage door installation", "Long Beach", "California", "garage door opener", "spring replacement", "emergency garage door", "24/7 service"],
  authors: [{ name: "Osman Garage Doors" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Osman Garage Doors | Long Beach Garage Door Experts",
    description: "Professional garage door repair and installation services in Long Beach, CA. Fast response, quality work, fair prices.",
    url: "https://www.osmangaragedoors.com",
    siteName: "Osman Garage Doors",
    type: "website",
    images: [
      {
        url: "/hero-garage.png",
        width: 1200,
        height: 630,
        alt: "Osman Garage Doors - Professional Garage Door Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osman Garage Doors | Long Beach Garage Door Experts",
    description: "Professional garage door repair and installation services in Long Beach, CA. Fast response, quality work, fair prices.",
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
