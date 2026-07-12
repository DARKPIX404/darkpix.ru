"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <footer className="border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm font-semibold text-slate-300 tracking-wider">
          DARKPIX.RU
        </Link>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Darkpix. {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
