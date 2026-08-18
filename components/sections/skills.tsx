"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  Layers,
  Zap,
  Workflow,
  Monitor,
  Code,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  icon: string;
  glowColor: string;
  category: "frontend" | "backend" | "tools";
}

const skillsData: Skill[] = [
  { id: "react", name: "React", icon: "SiReact", glowColor: "#61DAFB", category: "frontend" },
  { id: "next", name: "Next.js", icon: "SiNextdotjs", glowColor: "#ffffff", category: "frontend" },
  { id: "ts", name: "TypeScript", icon: "SiTypescript", glowColor: "#3178C6", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", icon: "SiTailwindcss", glowColor: "#06B6D4", category: "frontend" },
  { id: "js", name: "JavaScript", icon: "SiJavascript", glowColor: "#F7DF1E", category: "frontend" },
  { id: "astro", name: "Astro", icon: "SiAstro", glowColor: "#FF5D01", category: "frontend" },
  { id: "vite", name: "Vite", icon: "SiVite", glowColor: "#646CFF", category: "frontend" },
  { id: "shadcn", name: "shadcn/ui", icon: "Layers", glowColor: "#3b82f6", category: "frontend" },

  { id: "node", name: "Node.js", icon: "SiNodedotjs", glowColor: "#339933", category: "backend" },
  { id: "python", name: "Python", icon: "SiPython", glowColor: "#3776AB", category: "backend" },
  { id: "postgres", name: "PostgreSQL", icon: "SiPostgresql", glowColor: "#4169E1", category: "backend" },
  { id: "mongo", name: "MongoDB", icon: "SiMongodb", glowColor: "#47A248", category: "backend" },
  { id: "redis", name: "Redis", icon: "SiRedis", glowColor: "#DC382D", category: "backend" },
  { id: "prisma", name: "Prisma", icon: "SiPrisma", glowColor: "#2D3748", category: "backend" },
  { id: "graphql", name: "GraphQL", icon: "SiGraphql", glowColor: "#E10098", category: "backend" },
  { id: "trpc", name: "tRPC", icon: "Zap", glowColor: "#2596BE", category: "backend" },
  { id: "fastapi", name: "FastAPI", icon: "SiFastapi", glowColor: "#009688", category: "backend" },
  { id: "express", name: "Express", icon: "SiExpress", glowColor: "#ffffff", category: "backend" },

  { id: "git", name: "Git", icon: "SiGit", glowColor: "#F05032", category: "tools" },
  { id: "github", name: "GitHub", icon: "SiGithub", glowColor: "#ffffff", category: "tools" },
  { id: "actions", name: "GitHub Actions", icon: "SiGithubactions", glowColor: "#2088FF", category: "tools" },
  { id: "docker", name: "Docker", icon: "SiDocker", glowColor: "#2496ED", category: "tools" },
  { id: "nginx", name: "Nginx", icon: "SiNginx", glowColor: "#009639", category: "tools" },
  { id: "ubuntu", name: "Ubuntu", icon: "SiUbuntu", glowColor: "#E95420", category: "tools" },
  { id: "proxmox", name: "Proxmox", icon: "SiProxmox", glowColor: "#E57000", category: "tools" },
  { id: "zabbix", name: "Zabbix", icon: "Activity", glowColor: "#CC0000", category: "tools" },
  { id: "windows", name: "Windows Server", icon: "Monitor", glowColor: "#00A4EF", category: "tools" },
  { id: "cicd", name: "CI/CD", icon: "Workflow", glowColor: "#3b82f6", category: "tools" },
];

const categories: { key: Skill["category"]; label: string; description: string }[] = [
  { key: "frontend", label: "Frontend", description: "Interfaces, interactions and design systems" },
  { key: "backend", label: "Backend & Database", description: "APIs, data layers and business logic" },
  { key: "tools", label: "DevOps & Infrastructure", description: "Shipping, scaling and keeping systems healthy" },
];

const lucideIconMap: Record<string, React.ElementType> = {
  Activity,
  Monitor,
  Layers,
  Zap,
  Workflow,
  Code,
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  const color = skill.glowColor || "#3b82f6";
  const glow = `${color}66`;
  const IconComp = skill.icon.startsWith("Si")
    ? (SiIcons as Record<string, React.ElementType>)[skill.icon]
    : lucideIconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-200 text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
      style={{ boxShadow: `0 0 0px ${glow}` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 16px ${glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0px ${glow}`;
      }}
    >
      {IconComp && <IconComp className="w-4 h-4 shrink-0" style={{ color }} />}
      <span>{skill.name}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technologies I work with
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {categories.map((category) => {
            const categorySkills = skillsData.filter((s) => s.category === category.key);
            return (
              <motion.div key={category.key} variants={cardItem}>
                <Card className="h-full">
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{category.label}</h3>
                      <p className="text-sm text-slate-400">{category.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill, i) => (
                        <SkillPill key={skill.id} skill={skill} index={i} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
