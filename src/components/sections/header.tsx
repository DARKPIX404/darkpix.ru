"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  const navLinks = [
    { href: "#about", label: t("navAbout") },
    { href: "#skills", label: t("navSkills") },
    { href: "#projects", label: t("navProjects") },
    { href: "#experience", label: t("navExperience") },
    { href: "#contact", label: t("navContact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-800/50 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-wider text-slate-100">
          DARKPIX.RU
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="p-2 text-slate-400 hover:text-blue-400 cursor-pointer md:hidden">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0f111a] border-slate-800 w-64 px-6">
              <div className="flex flex-col gap-2 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-300 hover:text-blue-400 transition-colors py-2 px-2 rounded-md hover:bg-slate-800/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
