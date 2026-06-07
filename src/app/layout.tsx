import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { getTranslation, type Lang } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

function detectLang(acceptLang: string | null): Lang {
  if (!acceptLang) return "en";
  const primary = acceptLang.split(",")[0].trim().toLowerCase();
  if (primary.startsWith("ru")) return "ru";
  return "en";
}

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const lang = detectLang(h.get("accept-language"));
  const t = getTranslation(lang);
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const lang = detectLang(h.get("accept-language"));

  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#02040a] text-slate-200`}
      >
        <LanguageProvider defaultLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
