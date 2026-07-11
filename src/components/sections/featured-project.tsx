"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Download, Code2, Zap, RefreshCw, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

const GITHUB_URL = "https://github.com/DARKPIX404/PaperScript";
const RELEASES_URL = "https://github.com/DARKPIX404/PaperScript/releases";

const featureIcons = [Code2, Zap, RefreshCw, MessageSquare];
const featureKeys = [
  { title: "psFeat1Title", desc: "psFeat1Desc" },
  { title: "psFeat2Title", desc: "psFeat2Desc" },
  { title: "psFeat3Title", desc: "psFeat3Desc" },
  { title: "psFeat4Title", desc: "psFeat4Desc" },
] as const;

export function FeaturedProject() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="featured" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            {t("projectsTitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            PaperScript
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl border border-slate-800 bg-[#0a0a0f] overflow-hidden"
          >
            <Image
              src="/paperscript-cover.svg"
              alt="PaperScript"
              fill
              className="object-contain p-6"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="mb-4 bg-blue-950/60 text-blue-300 border border-blue-900/60">
              {t("psBadge")}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("psHeroTitle")}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t("psHeroDesc")}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {featureKeys.map((feat, i) => {
                const Icon = featureIcons[i];
                return (
                  <Card
                    key={feat.title}
                    className="bg-[#0f111a] border-slate-800 hover:border-blue-500/30 transition-colors"
                  >
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {t(feat.title)}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                          {t(feat.desc)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
