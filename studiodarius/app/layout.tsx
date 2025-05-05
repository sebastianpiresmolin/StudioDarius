import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import "./globals.css";
import Webfooter from "@/components/ui/webfooter";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Darius",
  description: "Webbutveckling och Fotografi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen max-w-[100vw] bg-white">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased min-h-screen bg-white m-auto`}
      >
        <Navbar />
        {children}
        <Webfooter />
      </body>
    </html>
  );
}
