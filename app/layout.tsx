import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const googlesans = localFont({
  src: [
    {
      path: "./fonts/GoogleSans_17pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans_17pt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GoogleSans_17pt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-googlesans",
});

export const metadata: Metadata = {
  title: "Presswayy | Your business inbox empowered",
  description: "Ultra-fast, modern and responsive service-based website.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(geist.variable, inter.variable, googlesans.variable)}
    >
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NPBBD33T');
        `}
      </Script>

      <body className="bg-white text-gray-900" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPBBD33T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
