"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FolderGit2, Target, Zap } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

const iconMap: Record<string, React.ReactNode> = {
  years: <Clock className="w-6 h-6 text-blue-400 shrink-0" />,
  projects: <FolderGit2 className="w-6 h-6 text-blue-400 shrink-0" />,
  specialization: <Target className="w-6 h-6 text-blue-400 shrink-0" />,
  status: <Zap className="w-6 h-6 text-blue-400 shrink-0" />,
};

export function About() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  const aboutData = [
    { key: "years", value: t("aboutYearsValue"), label: t("aboutYearsLabel") },
    { key: "projects", value: t("aboutProjectsValue"), label: t("aboutProjectsLabel") },
    { key: "specialization", value: t("aboutSpecValue"), label: t("aboutSpecLabel") },
    { key: "status", value: t("aboutStatusValue"), label: t("aboutStatusLabel") },
  ];

  return (
    <section id="about" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
              {t("aboutTitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("aboutHeading")}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {t("aboutText")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.map((item) => (
              <Card
                key={item.key}
                className="bg-[#0f111a] border-slate-800 hover:border-blue-500/30 transition-colors h-full"
              >
                <CardContent className="p-5 flex items-start gap-3 min-w-0">
                  <div className="mt-1">{iconMap[item.key]}</div>
                  <div className="min-w-0">
                    <p className="text-2xl font-bold text-white break-words">{item.value}</p>
                    <p className="text-sm text-slate-400 break-words">{item.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
