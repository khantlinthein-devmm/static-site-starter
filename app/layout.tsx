import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import siteConfig from "@/lib/siteConfig";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
