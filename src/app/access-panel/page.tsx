import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AccessProject } from "@/components/sections/access-project";
import { LanguageSwitcher } from "@/components/language-switcher";

export const metadata: Metadata = {
  title: "Secure Access Orchestrator — SSH & VPN | DARKPIX.RU",
  description: "DevOps case study: a Gateway control plane, dynamic SSH authorization, Linux target agents and OpenVPN lifecycle orchestration.",
  alternates: { canonical: "/access-panel/" },
  openGraph: {
    title: "Secure Access Orchestrator — DARKPIX.RU",
    description: "Centralized SSH access & OpenVPN lifecycle management. A DevOps project by Vladislav Borodatyi.",
    url: "https://darkpix.ru/access-panel/",
    images: [{ url: "/access-panel-cover.svg", width: 1280, height: 420 }],
  },
};

export default function AccessPanelPage() {
  return <main className="min-h-screen bg-[#00040C]">
    <header className="border-b border-slate-800/70"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6"><Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-slate-200 transition hover:text-cyan-300"><ArrowLeft size={16} />DARKPIX.RU</Link><LanguageSwitcher /></div></header>
    <AccessProject standalone />
    <footer className="border-t border-slate-800 px-4 py-8 text-center text-xs text-slate-500">DevOps @v_darkpix — Владислав Бородатый</footer>
  </main>;
}
