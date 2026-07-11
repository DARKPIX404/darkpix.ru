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

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent" />

          {experiencesData.map((exp, i) => {
            const isLeft = i < 3;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-10 md:pl-0 ${
                  isLeft
                    ? "md:col-start-1 md:text-right md:pr-10"
                    : "md:col-start-2 md:pl-10"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#02040a] ${
                    isLeft
                      ? "left-[7px] md:left-auto md:right-[-6px]"
                      : "left-[7px] md:left-[-6px]"
                  }`}
                />

                <span className="inline-block text-blue-400 font-bold text-lg mb-1">
                  {exp.year}
                </span>
                <h3 className="text-white font-semibold mb-1">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(exp.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
