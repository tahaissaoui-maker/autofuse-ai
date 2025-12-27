import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// --- OPEN GRAPH & METADATA CONFIGURATION ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.autofuseai.com'), // Fixes social image issues
  title: {
    default: "AutoFuse AI | 24/7 Voice Sales Agents",
    template: "%s | AutoFuse AI"
  },
  description: "Never miss a lead again. AI receptionists that qualify leads, book appointments, and sync with your CRM instantly.",
  
  // Social Media Card (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "AutoFuse AI | 24/7 Voice Sales Agents",
    description: "Replace your voicemail with an AI that sells. Book meetings and qualify leads automatically.",
    url: "https://www.autofuseai.com",
    siteName: "AutoFuse AI",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (X)
  twitter: {
    card: "summary_large_image",
    title: "AutoFuse AI | 24/7 Voice Sales Agents",
    description: "Never miss a lead again. AI receptionists that qualify leads, book appointments, and sync with your CRM instantly.",
    creator: "@autofuseai", // Change this if you have a company handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
