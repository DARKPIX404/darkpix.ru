"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCheck, Target, Timer, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const productUrl = "https://veylo.darkpix.ru/";

export function FeaturedProject() {
  const { lang } = useLanguage();
  const ru = lang === "ru";
  const features = ru ? [
    { icon: CheckCheck, title: "Задачи и привычки", text: "Ежедневные дела, повторяющиеся действия и личные ритуалы." },
    { icon: Target, title: "Цели и прогресс", text: "Долгосрочные ориентиры и движение к ним в одном пространстве." },
    { icon: Timer, title: "Фокус", text: "Отдельное пространство для сосредоточенной работы." },
    { icon: BookOpen, title: "Личный дневник", text: "Записи, мысли и наблюдения, к которым можно вернуться." },
  ] : [
    { icon: CheckCheck, title: "Tasks & habits", text: "Daily tasks, recurring actions and personal routines." },
    { icon: Target, title: "Goals & progress", text: "Long-term goals and the steps towards them in one place." },
    { icon: Timer, title: "Focus", text: "A dedicated space for distraction-free work." },
    { icon: BookOpen, title: "Personal journal", text: "Notes, thoughts and reflections worth returning to." },
  ];
  return (
    <section id="featured" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.22em] text-blue-400">{ru ? "Избранный проект" : "Featured project"}</p>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#101e3a] via-[#0b1326] to-[#17102c] p-10 sm:min-h-[410px]">
            <div aria-hidden="true" className="absolute h-64 w-64 rounded-full border border-blue-400/10" />
            <div aria-hidden="true" className="absolute h-96 w-96 rounded-full border border-violet-400/10" />
            <Image src="/veylo-logo.png" alt="VEYLO" width={96} height={96} className="relative mb-5 rounded-3xl" />
            <p className="relative text-5xl font-semibold tracking-[0.12em] text-white sm:text-6xl">VEYLO</p>
            <p className="relative mt-4 text-sm text-blue-200/60">{ru ? "Ваш день. Ваш ритм. Ваше пространство." : "Your day. Your rhythm. Your space."}</p>
            <span className="absolute bottom-5 font-mono text-[11px] text-blue-200/40">veylo.darkpix.ru</span>
          </div>
          <div>
            <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">{ru ? "Личный продукт · продуктивность" : "Personal product · productivity"}</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">{ru ? "Меньше разрозненных инструментов. Больше движения вперёд." : "Fewer scattered tools. More room to move forward."}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">{ru ? "VEYLO объединяет задачи, привычки, цели, фокус и дневник. Разрабатываю интерфейс и серверную часть как единый продукт для повседневной работы над собой." : "VEYLO brings tasks, habits, goals, focus and journaling together. I build its interface and backend as one product for everyday personal growth."}</p>
            <div className="mt-6 flex flex-wrap gap-2">{["React", "TypeScript", "PocketBase", "SQLite"].map(tech => <span key={tech} className="rounded-md border border-slate-800 px-2 py-1 font-mono text-xs text-slate-400">{tech}</span>)}</div>
            <a href={productUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">{ru ? "Открыть VEYLO" : "Open VEYLO"}<ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{features.map(({icon: Icon, title, text}) => <article key={title} className="rounded-xl border border-slate-800/70 bg-slate-900/20 p-5"><Icon size={20} className="mb-4 text-blue-300" /><h3 className="mb-2 text-sm font-medium text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-500">{text}</p></article>)}</div>
      </div>
    </section>
  );
}
