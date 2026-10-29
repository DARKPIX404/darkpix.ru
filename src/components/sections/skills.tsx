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
  category: "frontend" | "backend" | "data" | "devops" | "tools" | "mobile";
}

const skillsData: Skill[] = [
  // Frontend
  { id: "1", name: "React", icon: "SiReact", glowColor: "#61DAFB", category: "frontend" },
  { id: "2", name: "Next.js", icon: "SiNextdotjs", glowColor: "#ffffff", category: "frontend" },
  { id: "3", name: "TypeScript", icon: "SiTypescript", glowColor: "#3178C6", category: "frontend" },
  { id: "4", name: "JavaScript", icon: "SiJavascript", glowColor: "#F7DF1E", category: "frontend" },
  { id: "5", name: "Tailwind CSS", icon: "SiTailwindcss", glowColor: "#06B6D4", category: "frontend" },
  { id: "6", name: "Astro", icon: "SiAstro", glowColor: "#FF5A03", category: "frontend" },
  { id: "7", name: "Vite", icon: "SiVite", glowColor: "#646CFF", category: "frontend" },
  { id: "8", name: "Redux", icon: "SiRedux", glowColor: "#764ABC", category: "frontend" },
  { id: "9", name: "HTML5", icon: "SiHtml5", glowColor: "#E34F26", category: "frontend" },
  { id: "10", name: "CSS", icon: "SiCss", glowColor: "#663399", category: "frontend" },
  { id: "11", name: "Sass", icon: "SiSass", glowColor: "#CC6699", category: "frontend" },
  { id: "12", name: "Framer Motion", icon: "SiFramer", glowColor: "#0055FF", category: "frontend" },
  { id: "13", name: "Storybook", icon: "SiStorybook", glowColor: "#FF4785", category: "frontend" },
  // Backend
  { id: "14", name: "Node.js", icon: "SiNodedotjs", glowColor: "#339933", category: "backend" },
  { id: "15", name: "Express", icon: "SiExpress", glowColor: "#ffffff", category: "backend" },
  { id: "16", name: "NestJS", icon: "SiNestjs", glowColor: "#E0234E", category: "backend" },
  { id: "17", name: "FastAPI", icon: "SiFastapi", glowColor: "#009688", category: "backend" },
  { id: "18", name: "Python", icon: "SiPython", glowColor: "#3776AB", category: "backend" },
  { id: "19", name: "GraphQL", icon: "SiGraphql", glowColor: "#E10098", category: "backend" },
  { id: "20", name: "Socket.io", icon: "SiSocketdotio", glowColor: "#ffffff", category: "backend" },
  { id: "21", name: "Swagger", icon: "SiSwagger", glowColor: "#85EA2D", category: "backend" },
  { id: "22", name: "JWT", icon: "SiJsonwebtokens", glowColor: "#ffffff", category: "backend" },
  // Databases
  { id: "23", name: "PostgreSQL", icon: "SiPostgresql", glowColor: "#4169E1", category: "data" },
  { id: "24", name: "Redis", icon: "SiRedis", glowColor: "#FF4438", category: "data" },
  { id: "25", name: "MongoDB", icon: "SiMongodb", glowColor: "#47A248", category: "data" },
  { id: "26", name: "MySQL", icon: "SiMysql", glowColor: "#4479A1", category: "data" },
  { id: "27", name: "SQLite", icon: "SiSqlite", glowColor: "#003B57", category: "data" },
  { id: "28", name: "Prisma", icon: "SiPrisma", glowColor: "#ffffff", category: "data" },
  { id: "29", name: "Elasticsearch", icon: "SiElasticsearch", glowColor: "#005571", category: "data" },
  { id: "30", name: "Kafka", icon: "SiApachekafka", glowColor: "#ffffff", category: "data" },
  // DevOps & Infrastructure
  { id: "31", name: "Docker", icon: "SiDocker", glowColor: "#2496ED", category: "devops" },
  { id: "32", name: "Kubernetes", icon: "SiKubernetes", glowColor: "#326CE5", category: "devops" },
  { id: "33", name: "Nginx", icon: "SiNginx", glowColor: "#009639", category: "devops" },
  { id: "34", name: "Terraform", icon: "SiTerraform", glowColor: "#844FBA", category: "devops" },
  { id: "35", name: "Ansible", icon: "SiAnsible", glowColor: "#EE0000", category: "devops" },
  { id: "36", name: "GitHub Actions", icon: "SiGithubactions", glowColor: "#2088FF", category: "devops" },
  { id: "37", name: "GitLab CI", icon: "SiGitlab", glowColor: "#FC6D26", category: "devops" },
  { id: "38", name: "Jenkins", icon: "SiJenkins", glowColor: "#D24939", category: "devops" },
  { id: "39", name: "Prometheus", icon: "SiPrometheus", glowColor: "#E6522C", category: "devops" },
  { id: "40", name: "Grafana", icon: "SiGrafana", glowColor: "#F46800", category: "devops" },
  { id: "41", name: "Sentry", icon: "SiSentry", glowColor: "#362D59", category: "devops" },
  { id: "42", name: "OpenTelemetry", icon: "SiOpentelemetry", glowColor: "#ffffff", category: "devops" },
  { id: "43", name: "Helm", icon: "SiHelm", glowColor: "#0F1689", category: "devops" },
  { id: "44", name: "Proxmox", icon: "SiProxmox", glowColor: "#E57000", category: "devops" },
  { id: "45", name: "Ubuntu", icon: "SiUbuntu", glowColor: "#E95420", category: "devops" },
  { id: "46", name: "Zabbix", icon: "Activity", glowColor: "#CC0000", category: "devops" },
  { id: "47", name: "Windows Server", icon: "Monitor", glowColor: "#00A4EF", category: "devops" },
  { id: "48", name: "Cloudflare", icon: "SiCloudflare", glowColor: "#F38020", category: "devops" },
  { id: "49", name: "Vercel", icon: "SiVercel", glowColor: "#ffffff", category: "devops" },
  // Tools
  { id: "50", name: "Git", icon: "SiGit", glowColor: "#F05032", category: "tools" },
  { id: "51", name: "GitHub", icon: "SiGithub", glowColor: "#ffffff", category: "tools" },
  { id: "52", name: "npm", icon: "SiNpm", glowColor: "#CB3837", category: "tools" },
  { id: "53", name: "pnpm", icon: "SiPnpm", glowColor: "#F69220", category: "tools" },
  { id: "54", name: "Bun", icon: "SiBun", glowColor: "#FBF0DF", category: "tools" },
  { id: "55", name: "ESLint", icon: "SiEslint", glowColor: "#4B32C3", category: "tools" },
  { id: "56", name: "Prettier", icon: "SiPrettier", glowColor: "#F7B93E", category: "tools" },
  { id: "57", name: "Vitest", icon: "SiVitest", glowColor: "#6E9F18", category: "tools" },
  { id: "58", name: "Cypress", icon: "SiCypress", glowColor: "#69D3A7", category: "tools" },
  { id: "59", name: "Postman", icon: "SiPostman", glowColor: "#FF6C37", category: "tools" },
  { id: "60", name: "Figma", icon: "SiFigma", glowColor: "#F24E1E", category: "tools" },
  { id: "61", name: "Neovim", icon: "SiNeovim", glowColor: "#57A143", category: "tools" },
  // Mobile
  { id: "62", name: "Kotlin", icon: "SiKotlin", glowColor: "#7F52FF", category: "mobile" },
  { id: "63", name: "Android", icon: "SiAndroid", glowColor: "#3DDC84", category: "mobile" },
  { id: "64", name: "Gradle", icon: "SiGradle", glowColor: "#ffffff", category: "mobile" },
];

const categories: { key: "frontend" | "backend" | "data" | "devops" | "tools" | "mobile"; labelKey: "skillsFrontend" | "skillsBackend" | "skillsData" | "skillsDevops" | "skillsTools" | "skillsMobile" }[] = [
  { key: "devops", labelKey: "skillsDevops" },
  { key: "frontend", labelKey: "skillsFrontend" },
  { key: "backend", labelKey: "skillsBackend" },
  { key: "data", labelKey: "skillsData" },
  { key: "tools", labelKey: "skillsTools" },
  { key: "mobile", labelKey: "skillsMobile" },
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
