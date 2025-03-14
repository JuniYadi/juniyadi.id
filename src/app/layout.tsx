import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

// set default runtime to edge
export const runtime = "edge";
const font = Roboto_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JuniYadi Site",
  description: "Get the latest news in technology and programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
