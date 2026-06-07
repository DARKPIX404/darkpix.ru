import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "DARKPIX.RU | Frontend Developer",
  description: "I build fast, modern and responsive web applications using React, Next.js and other cool technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#02040a] text-slate-200`}
      >
        <LanguageProvider defaultLang="en">{children}</LanguageProvider>
      </body>
    </html>
  );
}
