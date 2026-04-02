import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presswayy | Fast & Modern Platform",
  description: "Ultra-fast, modern and responsive service-based website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning যুক্ত করা হয়েছে */}
      <body
        className={`${inter.className} bg-white text-gray-900`}
        suppressHydrationWarning
      >
        {/* Navbar added here so it appears on all pages */}
        <Navbar />

        {/* Main page content will be rendered here */}
        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
