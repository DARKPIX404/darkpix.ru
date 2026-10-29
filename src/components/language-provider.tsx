"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

let temporaryLanguage: Lang | null = null;

function readLanguage(): Lang {
  if (temporaryLanguage) return temporaryLanguage;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru") return saved;
  } catch {
    // Browser preferences still work when persistent storage is unavailable.
  }
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function subscribeLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-language", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-language", onChange);
  };
}

export function LanguageProvider({
  children,
  defaultLang,
}: {
  children: React.ReactNode;
  defaultLang: Lang;
}) {
  // The server snapshot is also used during hydration, before reading browser preferences.
  const lang = useSyncExternalStore(subscribeLanguage, readLanguage, () => defaultLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    temporaryLanguage = newLang;
    try {
      localStorage.setItem("lang", newLang);
      temporaryLanguage = null;
    } catch {
      // Keep the language choice usable for this visit even without persistent storage.
    }
    window.dispatchEvent(new Event("portfolio-language"));
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
