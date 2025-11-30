import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description: "SK Pool offers Canadian made swimming pools. We are a family owned and operated business that has been in the swimming pool industry for over 20 years.",
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/images/android-chrome-192x192.png",
      },
    ],
  },
  openGraph: {
    title: "SK Pool - Canadian Made Swimming Pools",
    description: "SK Pool offers Canadian made swimming pools. We are a family owned and operated business that has been in the swimming pool industry for over 20 years.",
    images: [
      {
        url: "/images/featured.png",
        width: 1200,
        height: 630,
        alt: "SK Pool - Canadian Made Swimming Pools",
      },
    ],
    type: "website",
  },
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WBT3099S0K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WBT3099S0K');
          `}
        </Script>
        <header className="sticky top-0 z-50 pt-4 pb-2 px-4 backdrop-blur-md bg-transparent">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
