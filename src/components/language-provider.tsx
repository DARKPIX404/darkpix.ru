"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

function detectBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const browserLang = navigator.language || "en";
  if (browserLang.toLowerCase().startsWith("ru")) return "ru";
  return "en";
}

export function LanguageProvider({
  children,
  defaultLang,
}: {
  children: React.ReactNode;
  defaultLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return defaultLang;
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && (saved === "en" || saved === "ru")) {
      return saved;
    }
    return detectBrowserLang();
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
