"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Boxes, Lightbulb } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";

export type DocsSection = "start" | "api" | "examples";

const NAV_ITEMS: { key: DocsSection; href: string; label: string; icon: typeof BookOpen }[] = [
  { key: "start", href: "/paperscript/docs", label: "Getting started", icon: BookOpen },
  { key: "api", href: "/paperscript/docs/api", label: "API reference", icon: Boxes },
  { key: "examples", href: "/paperscript/docs/examples", label: "Examples", icon: Lightbulb },
];

interface DocsShellProps {
  active: DocsSection;
  children: React.ReactNode;
}

export function DocsShell({ active, children }: DocsShellProps) {
  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#00040C] text-slate-200">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/paperscript"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PaperScript</span>
            <span className="sm:hidden font-semibold text-slate-100">PaperScript</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-bold tracking-wider text-slate-100">Docs</span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 flex gap-10">
        <aside className="hidden lg:block w-52 shrink-0">
          <nav className="sticky top-24 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-3">
              Documentation
            </p>
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-950/50 text-blue-300 border border-blue-900/50"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mt-6 mb-3">
              Links
            </p>
            <a
              href="https://github.com/DARKPIX404/PaperScript"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://github.com/DARKPIX404/PaperScript/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-colors"
            >
              Releases ↗
            </a>
            <a
              href="https://hangar.papermc.io/DARKPIX/PaperScript"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-colors"
            >
              Hangar ↗
            </a>
            <a
              href="https://www.npmjs.com/package/@paperscript/sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 transition-colors"
            >
              @paperscript/sdk ↗
            </a>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 max-w-3xl">
          {/* mobile nav */}
          <nav className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-800/50">
            {NAV_ITEMS.map((item) => {
              const isActive = item.key === active;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-950/50 text-blue-300 border border-blue-900/50"
                      : "text-slate-400 border border-slate-800 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {children}
        </div>
      </div>

      <footer className="border-t border-slate-800/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link href="/" className="text-sm font-semibold text-slate-300 tracking-wider hover:text-blue-400 transition-colors">
            DARKPIX.RU
          </Link>
          <p className="text-xs text-slate-600">PaperScript Docs · MIT · &copy; {new Date().getFullYear()} DARKPIX</p>
        </div>
      </footer>
    </main>
  );
}
