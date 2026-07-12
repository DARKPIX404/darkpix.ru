"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Download,
  Code2,
  Zap,
  RefreshCw,
  MessageSquare,
  Database,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

const GITHUB_URL = "https://github.com/DARKPIX404/PaperScript";
const RELEASES_URL = "https://github.com/DARKPIX404/PaperScript/releases";

const CODE = `ps.onEnable(() => {
  ps.logger.info("hello.ts loaded");

  ps.commands.register("spawn", (ctx) => {
    if (!ctx.sender.player) {
      ctx.sender.sendMessage("<red>Players only.</red>");
      return;
    }
    const player = ps.players.get(ctx.sender.name);
    const world = player && ps.worlds.get(player.location.world);
    if (player && world) {
      player.teleport(world.spawnLocation);
      player.sendMessage("<green>✦ Teleported to spawn!</green>");
    }
  });

  ps.events.onPlayerJoin((event) => {
    ps.server.broadcast(
      "<gradient:#3b82f6:#93c5fd>☄ \${event.player.name} joined!</gradient>"
    );
  });
});`;

const featureIcons = [Code2, Zap, RefreshCw, MessageSquare, Database, Layers];

export function PaperScriptPage() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  const features = [
    { title: t("psFeat1Title"), desc: t("psFeat1Desc") },
    { title: t("psFeat2Title"), desc: t("psFeat2Desc") },
    { title: t("psFeat3Title"), desc: t("psFeat3Desc") },
    { title: t("psFeat4Title"), desc: t("psFeat4Desc") },
    { title: t("psFeat5Title"), desc: t("psFeat5Desc") },
    { title: t("psFeat6Title"), desc: t("psFeat6Desc") },
  ];

  const install = [t("psInstall1"), t("psInstall2"), t("psInstall3")];

  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#00040C] text-slate-200">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t("psBackHome")}</span>
            <span className="sm:hidden font-semibold text-slate-100">DARKPIX.RU</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-sm font-bold tracking-wider text-slate-100">PaperScript</span>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(59,130,246,0.25),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge className="mb-5 bg-blue-950/60 text-blue-300 border border-blue-900/60">
              {t("psBadge")}
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 glow-text leading-tight">
              {t("psHeroTitle")}
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {t("psHeroDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base glow-blue">
                  <Github className="w-4 h-4 mr-2" />
                  {t("psCtaGithub")}
                </Button>
              </a>
              <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-slate-600/50 text-slate-200 hover:bg-slate-800/50 hover:text-white px-6 py-5 text-base bg-slate-900/20"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t("psCtaDownload")}
                </Button>
              </a>
              <Link href="/paperscript/docs">
                <Button
                  variant="outline"
                  className="border-slate-600/50 text-slate-200 hover:bg-slate-800/50 hover:text-white px-6 py-5 text-base bg-slate-900/20"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  {t("psCtaDocs")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t("psWhatTitle")}</h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">{t("psWhatText")}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{t("psFeaturesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Card className="bg-[#0f111a] border-slate-800 hover:border-blue-500/30 transition-colors h-full">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-1.5">{f.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t("psCodeTitle")}</h2>
          <div className="rounded-xl border border-slate-800 bg-[#070b16] overflow-hidden max-w-full">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800/70">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs text-slate-500 font-mono">scripts/hello.ts</span>
            </div>
            <pre className="p-5 overflow-x-auto max-w-full text-sm leading-relaxed font-mono text-slate-300">
              <code>{CODE}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <Card className="bg-[#0f111a] border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-5">{t("psInstallTitle")}</h2>
              <ol className="space-y-4">
                {install.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-300 text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-[#0f111a] border-slate-800">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-5">{t("psMatrixTitle")}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-blue-900/50 bg-blue-950/30 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold">{t("psMatrixModern")}</span>
                    <Badge className="bg-blue-950/60 text-blue-300 border border-blue-900/60 text-xs">
                      v0.2
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400">{t("psMatrixModernDesc")}</p>
                </div>
                <div className="rounded-lg border border-blue-900/50 bg-blue-950/30 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold">{t("psMatrixLegacy")}</span>
                    <Badge className="bg-blue-950/60 text-blue-300 border border-blue-900/60 text-xs">
                      v0.2
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-400">{t("psMatrixLegacyDesc")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t("psCtaTitle")}</h2>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-5 text-base glow-blue">
              <Github className="w-4 h-4 mr-2" />
              {t("psCtaGithub")}
            </Button>
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link href="/" className="text-sm font-semibold text-slate-300 tracking-wider hover:text-blue-400 transition-colors">
            DARKPIX.RU
          </Link>
          <p className="text-xs text-slate-600">PaperScript · MIT · &copy; {new Date().getFullYear()} DARKPIX</p>
        </div>
      </footer>
    </main>
  );
}
