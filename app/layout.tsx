import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using a Google Font instead of local files
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Load the font automatically from Google
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoFuse AI | Voice Automation Agents",
  description: "Never miss a lead again. 24/7 Voice AI Receptionists for your business.",
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