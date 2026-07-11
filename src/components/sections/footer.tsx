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
        <a
          href="https://discord.gg/vibecoders"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#5865F2] hover:text-[#00d4ff] transition-colors"
        >
          VibeCoders Community →
        </a>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Darkpix. {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
