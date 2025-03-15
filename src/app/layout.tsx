import "./globals.css";
import "highlight.js/styles/github-dark.css";

import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JuniYadi",
  description: "Personal Website of Juni Yadi",
  // Add stylesheet through metadata API instead of using next/head
  metadataBase: new URL("https://juniyadi.id"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* External stylesheet with attributes - this is the preferred way for external stylesheets with integrity */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css"
          integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
