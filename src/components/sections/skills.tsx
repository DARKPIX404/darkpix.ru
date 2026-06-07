"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

const skillsData = [
  { id: "1", name: "React", icon: "SiReact", glowColor: "#61DAFB", category: "frontend" },
  { id: "2", name: "Next.js", icon: "SiNextdotjs", glowColor: "#ffffff", category: "frontend" },
  { id: "3", name: "TypeScript", icon: "SiTypescript", glowColor: "#3178C6", category: "frontend" },
  { id: "4", name: "Tailwind CSS", icon: "SiTailwindcss", glowColor: "#06B6D4", category: "frontend" },
  { id: "5", name: "JavaScript", icon: "SiJavascript", glowColor: "#F7DF1E", category: "frontend" },
  { id: "6", name: "Git", icon: "SiGit", glowColor: "#F05032", category: "tools" },
];

export function Skills() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);

  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            {t("skillsTitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t("skillsHeading")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          {skillsData.map((skill, i) => {
            const color = skill.glowColor || "#3b82f6";
            const glow = `${color}66`;
            const IconComp = skill.icon
              ? (SiIcons as Record<string, React.ElementType>)[skill.icon]
              : undefined;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div
                  className="flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-800 bg-[#0f111a]/80 text-slate-200 select-none cursor-default transition-all duration-300 hover:scale-105 hover:border-slate-700"
                  style={{ boxShadow: `0 0 0px ${glow}` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${glow}`;
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${glow}`;
                    e.currentTarget.style.borderColor = "rgb(30 41 59)";
                  }}
                >
                  {IconComp && <IconComp className="w-7 h-7 shrink-0" style={{ color }} />}
                  <span className="text-base font-medium">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
