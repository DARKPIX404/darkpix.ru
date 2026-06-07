"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { getTranslation, type TranslationKey } from "@/lib/i18n";

interface ExperienceItem {
  id: string;
  year: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const experiencesData: ExperienceItem[] = [
  { id: "1", year: "2017", titleKey: "exp2017Title", descKey: "exp2017Desc" },
  { id: "2", year: "2018", titleKey: "exp2018Title", descKey: "exp2018Desc" },
  { id: "3", year: "2020", titleKey: "exp2020Title", descKey: "exp2020Desc" },
  { id: "4", year: "2022", titleKey: "exp2022Title", descKey: "exp2022Desc" },
  { id: "5", year: "2024", titleKey: "exp2024Title", descKey: "exp2024Desc" },
  { id: "6", year: "2026", titleKey: "exp2026Title", descKey: "exp2026Desc" },
];

export function Experience() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="experience" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            {t("expTitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t("expHeading")}
          </h2>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-[14px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="grid grid-cols-6 gap-4 relative">
            {experiencesData.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pt-8"
              >
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#02040a]" />
                <div className="text-center">
                  <span className="inline-block text-blue-400 font-bold text-lg mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-white font-semibold mb-1 text-sm leading-tight">{t(exp.titleKey)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(exp.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid lg:hidden relative">
          <div className="absolute top-[14px] left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute top-[calc(50%+14px)] left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="grid grid-cols-3 gap-8 relative">
            {experiencesData.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pt-8 ${i >= 3 ? "mt-8" : ""}`}
              >
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#02040a]" />
                <div className="text-center">
                  <span className="inline-block text-blue-400 font-bold text-lg mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-white font-semibold mb-1">{t(exp.titleKey)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(exp.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent" />
          <div className="space-y-8">
            {experiencesData.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-10"
              >
                <div className="absolute left-[7px] top-1.5 w-2 h-2 rounded-full bg-blue-500 ring-4 ring-[#02040a]" />
                <div>
                  <span className="text-blue-400 font-bold text-sm">{exp.year}</span>
                  <h3 className="text-white font-semibold mt-0.5">{t(exp.titleKey)}</h3>
                  <p className="text-slate-400 text-sm mt-1">{t(exp.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
