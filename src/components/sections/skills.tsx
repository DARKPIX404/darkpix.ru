"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { Activity, Monitor } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getTranslation } from "@/lib/i18n";

interface Skill {
  id: string;
  name: string;
  icon: string;
  glowColor: string;
  category: "frontend" | "tools" | "devops" | "other";
}

const skillsData: Skill[] = [
  { id: "1", name: "React", icon: "SiReact", glowColor: "#61DAFB", category: "frontend" },
  { id: "2", name: "Next.js", icon: "SiNextdotjs", glowColor: "#ffffff", category: "frontend" },
  { id: "3", name: "TypeScript", icon: "SiTypescript", glowColor: "#3178C6", category: "frontend" },
  { id: "4", name: "Tailwind CSS", icon: "SiTailwindcss", glowColor: "#06B6D4", category: "frontend" },
  { id: "5", name: "JavaScript", icon: "SiJavascript", glowColor: "#F7DF1E", category: "frontend" },
  { id: "6", name: "Git", icon: "SiGit", glowColor: "#F05032", category: "tools" },
  { id: "7", name: "GitHub", icon: "SiGithub", glowColor: "#ffffff", category: "tools" },
  { id: "8", name: "GitHub Actions", icon: "SiGithubactions", glowColor: "#2088FF", category: "tools" },
  { id: "9", name: "Docker", icon: "SiDocker", glowColor: "#2496ED", category: "devops" },
  { id: "10", name: "Nginx", icon: "SiNginx", glowColor: "#009639", category: "devops" },
  { id: "11", name: "PostgreSQL", icon: "SiPostgresql", glowColor: "#4169E1", category: "devops" },
  { id: "12", name: "Proxmox", icon: "SiProxmox", glowColor: "#E57000", category: "devops" },
  { id: "13", name: "Ubuntu", icon: "SiUbuntu", glowColor: "#E95420", category: "devops" },
  { id: "14", name: "Zabbix", icon: "Activity", glowColor: "#CC0000", category: "devops" },
  { id: "15", name: "Windows Server", icon: "Monitor", glowColor: "#00A4EF", category: "devops" },
  { id: "16", name: "Node.js", icon: "SiNodedotjs", glowColor: "#339933", category: "other" },
];

const categories: { key: "frontend" | "tools" | "devops" | "other"; labelKey: "skillsFrontend" | "skillsTools" | "skillsDevops" | "skillsOther" }[] = [
  { key: "frontend", labelKey: "skillsFrontend" },
  { key: "tools", labelKey: "skillsTools" },
  { key: "devops", labelKey: "skillsDevops" },
  { key: "other", labelKey: "skillsOther" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const color = skill.glowColor || "#3b82f6";
  const glow = `${color}66`;
  const IconComp = skill.icon.startsWith("Si")
    ? (SiIcons as Record<string, React.ElementType>)[skill.icon]
    : ({ Activity, Monitor } as Record<string, React.ElementType>)[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800 bg-[#0f111a]/80 text-slate-200 select-none cursor-default transition-all duration-300 hover:scale-105 hover:border-slate-700"
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
        {IconComp && <IconComp className="w-6 h-6 shrink-0" style={{ color }} />}
        <span className="text-sm font-medium">{skill.name}</span>
      </div>
    </motion.div>
  );
}

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
          className="mb-10"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            {t("skillsTitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t("skillsHeading")}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category) => {
            const categorySkills = skillsData.filter((s) => s.category === category.key);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {t(category.labelKey)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, i) => (
                    <SkillCard key={skill.id} skill={skill} index={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
