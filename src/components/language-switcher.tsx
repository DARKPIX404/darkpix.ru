"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ru" : "en")}
      className="ml-2 px-2 py-1 rounded-md border border-slate-700 text-xs text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-colors cursor-pointer"
      aria-label="Switch language"
    >
      {lang === "en" ? "RU" : "EN"}
    </button>
  );
}
