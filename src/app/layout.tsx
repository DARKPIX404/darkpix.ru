import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkpix.ru"),
  title: "DARKPIX.RU | Frontend Developer",
  description: "I build fast, modern and responsive web applications using React, Next.js and other cool technologies.",
  openGraph: {
    title: "DARKPIX.RU | Frontend Developer",
    description: "I build fast, modern and responsive web applications using React, Next.js and other cool technologies.",
    url: "https://darkpix.ru",
    siteName: "DARKPIX.RU",
    images: [
      {
        url: "/darkpix-logo.png",
        width: 512,
        height: 512,
        alt: "DARKPIX.RU",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARKPIX.RU | Frontend Developer",
    description: "I build fast, modern and responsive web applications using React, Next.js and other cool technologies.",
    images: ["/darkpix-logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
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
        className={`${inter.variable} font-sans antialiased bg-[#02040a] text-slate-200`}
      >
        <LanguageProvider defaultLang="en">{children}</LanguageProvider>
      </body>
    </html>
  );
}
