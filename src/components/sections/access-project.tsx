"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Github, KeyRound, Network, Server, ShieldCheck, Terminal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const repository = "https://github.com/DARKPIX404/secure-access-orchestrator";

export function AccessProject({ standalone = false }: { standalone?: boolean }) {
  const { lang } = useLanguage();
  const ru = lang === "ru";
  const Heading = standalone ? "h1" : "h2";
  const features = ru ? [
    ["Доступ как правило", "Пользователь, ключ, сервер и срок действия. Выдача и отзыв через единую панель."],
    ["Gateway ≠ номер VM", "Управляющий узел разворачивается независимо от гипервизора. Target на нём — по выбору."],
    ["SSH + VPN", "Динамические SSH-ключи и отдельный CA для выпуска и отзыва OpenVPN-профилей."],
  ] : [
    ["Access as a rule", "A person, a key, a server and an expiry. Grant and revoke access from one control plane."],
    ["Gateway ≠ VM number", "Deploy independently of a hypervisor. Running a target agent on the gateway is optional."],
    ["SSH + VPN", "Dynamic SSH keys and a separate CA for issuing and revoking OpenVPN profiles."],
  ];
  return (
    <section id="access-panel" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-96 w-[750px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em]">
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-cyan-300">DevOps case study · 01</span>
          <span className="text-slate-500">Linux / Identity / Automation</span>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Heading className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Secure Access<br /><span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">Orchestrator.</span>
            </Heading>
            <p className="mt-4 font-mono text-sm text-cyan-200/70">Access Panel / SSH & OpenVPN</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {ru ? "От кнопки в панели — до реального доступа к Linux. Единая система правил, динамические SSH-ключи, учётные записи и VPN-профили с проверяемым поведением при сбоях." : "From a control-panel action to real Linux access. One system for access rules, dynamic SSH keys, user accounts and VPN profiles, with tested failure behavior."}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["FastAPI", "React", "PostgreSQL", "Docker", "OpenSSH", "OpenVPN"].map((tech) => <span key={tech} className="rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1 font-mono text-xs text-slate-300">{tech}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><Github size={18} />GitHub<ArrowUpRight size={16} /></a>
              {!standalone && <Link href="/access-panel/" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200">{ru ? "Разобрать проект" : "Explore the project"}<ArrowRight size={16} /></Link>}
              {standalone && <a href={`${repository}/blob/main/docs/GATEWAY_SETUP.md`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:text-cyan-200">{ru ? "Документация" : "Documentation"}<ArrowUpRight size={16} /></a>}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700/60 bg-[#080e19] p-5 shadow-2xl sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-slate-800 pb-4 font-mono text-[11px] text-slate-500"><span>CONTROL PLANE / ACCESS MODEL</span><Network size={16} className="text-cyan-400" /></div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/[0.05] p-5">
              <div className="flex items-center gap-3"><ShieldCheck className="text-cyan-300" size={26} /><div><p className="font-semibold text-white">Gateway</p><p className="mt-1 text-xs text-slate-400">Access Panel · API · PostgreSQL</p></div></div>
              <div className="mt-4 flex gap-2 border-t border-cyan-400/10 pt-3 text-xs text-cyan-200/70"><KeyRound size={14} />{ru ? "Правила, ключи, аудит" : "Rules, keys, audit"}</div>
            </div>
            <div className="flex items-center gap-3 py-5 font-mono text-[10px] text-slate-500"><div className="h-px flex-1 bg-slate-800" /><span>HTTPS / SCOPED MACHINE TOKEN</span><div className="h-px flex-1 bg-slate-800" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-violet-400/25 bg-violet-400/[0.04] p-4"><Server className="mb-3 text-violet-300" size={22} /><p className="text-sm font-medium text-white">Target agent</p><p className="mt-2 text-xs leading-relaxed text-slate-400">sshd · heartbeat<br />account provisioning</p></div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4"><KeyRound className="mb-3 text-cyan-200" size={22} /><p className="text-sm font-medium text-white">VPN CA</p><p className="mt-2 text-xs leading-relaxed text-slate-400">OpenVPN profiles<br />issue / revoke</p></div>
            </div>
            <p className="mt-5 border-t border-slate-800 pt-4 text-xs leading-relaxed text-slate-500">{ru ? "Target можно установить и на Gateway. Независимый emergency-доступ настраивается отдельно." : "The Gateway can also host a target agent. Independent emergency access is configured separately."}</p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-800/80 bg-slate-900/20 p-6"><span className="mb-4 block font-mono text-xs text-cyan-400/60">0{index + 1}</span><h3 className="mb-2 text-base font-medium text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-400">{text}</p></article>)}
        </div>
        {standalone && <div className="mt-14 grid gap-8 border-t border-slate-800 pt-12 lg:grid-cols-2">
          <div><h3 className="mb-5 text-2xl font-semibold text-white">{ru ? "Проверено на настоящей VM" : "Tested on a real VM"}</h3>
            <div className="mb-6 flex flex-wrap gap-3">{["1 vCPU", "256 MB RAM", "Debian / KVM"].map(x => <span key={x} className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sm text-violet-200">{x}</span>)}</div>
            <ul className="space-y-3 text-sm text-slate-400">{(ru ? ["Создание Linux-пользователя по активному правилу", "SSH-вход без локального authorized_keys", "Отзыв доступа после истечения cache TTL", "Отказ динамического входа при недоступной панели", "Независимый emergency-вход во время сбоя"] : ["Linux account provisioning from active access rules", "SSH login without a local authorized_keys file", "Access revocation after cache TTL expires", "Dynamic login denied when authority and fresh cache are unavailable", "Independent emergency login during an outage"]).map(x => <li key={x} className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-cyan-300" />{x}</li>)}</ul>
            <p className="mt-6 text-xs text-slate-500">{ru ? "Локальная проверка 29.10.2026: 486 backend-тестов и 33 frontend-теста. Это результаты проверки, не SLA." : "Local verification, Oct 29, 2026: 486 backend tests and 33 frontend tests. Verification results, not an SLA."}</p>
          </div>
          <div><h3 className="mb-5 text-2xl font-semibold text-white">{ru ? "Одна команда для Gateway" : "One command for the Gateway"}</h3><div className="rounded-xl border border-slate-700 bg-black/40 p-5"><div className="mb-4 flex items-center gap-2 text-xs text-slate-500"><Terminal size={14} />gateway / terminal</div><pre className="overflow-x-auto font-mono text-sm leading-7 text-cyan-200"><code>{"./sao up\n./sao status\n./sao down"}</code></pre></div><p className="mt-4 text-sm leading-relaxed text-slate-400">{ru ? "Секреты, миграции, начальный Gateway и HTTPS. Агент устанавливается отдельной командой на выбранный Linux-сервер. Для реального VPN endpoint требуется отдельная сетевая настройка." : "Secrets, migrations, initial Gateway and HTTPS. Install the agent separately on the Linux host you choose. A real VPN endpoint requires additional network configuration."}</p><p className="mt-5 text-xs leading-relaxed text-slate-500">© 2026 {ru ? "Владислав Бородатый. Все права защищены. Использование кода — с письменного разрешения автора." : "Vladislav Borodatyi. All rights reserved. Code use requires the author's written permission."}</p></div>
        </div>}
      </div>
    </section>
  );
}
