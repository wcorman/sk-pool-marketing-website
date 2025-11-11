import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SK Pool - Canadian Made Swimming Pools",
  description: "SK Pool offers Canadian made swimming pools, fiberglass pools, and gunite pools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 to-white`}
      >
        <header className="sticky top-0 z-50 pt-4 pb-2 px-4 backdrop-blur-md bg-transparent">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
