import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkpix.ru"),
  title: "DARKPIX.RU | Fullstack Developer",
  description:
    "Portfolio of DARKPIX (Vladislav Borodatyi) — fullstack developer building fast, modern web apps with React, Next.js, Node.js and Python.",
  openGraph: {
    title: "DARKPIX.RU | Fullstack Developer",
    description:
      "Portfolio of DARKPIX (Vladislav Borodatyi) — fullstack developer building fast, modern web apps with React, Next.js, Node.js and Python.",
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
    title: "DARKPIX.RU | Fullstack Developer",
    description:
      "Portfolio of DARKPIX (Vladislav Borodatyi) — fullstack developer building fast, modern web apps with React, Next.js, Node.js and Python.",
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
        className={`${inter.variable} font-sans antialiased bg-[#030712] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
