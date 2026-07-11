"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    id: "paperscript",
    title: "PaperScript",
    image: "/paperscript-cover.svg",
    status: "В разработке",
    stack: ["Java", "GraalJS", "TypeScript"],
    github: "https://github.com/DARKPIX404/PaperScript",
  },
  {
    id: "darkpix",
    title: "darkpix.ru",
    image: "/portfolio-project.png",
    status: "Завершён",
    stack: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/DARKPIX404/darkpix.ru",
  },
  {
    id: "pix-radio",
    title: "Pix Radio",
    image: "/vibecoders/project-placeholder.svg",
    status: "Завершён",
    stack: ["Bun", "Discord.js", "TypeScript"],
    github: "https://github.com/DARKPIX404/code-radio-discordjs-bot",
  },
  {
    id: "supercell-api",
    title: "Supercell API",
    image: "/supercell-api-cover.svg",
    status: "Завершён",
    stack: ["TypeScript", "Node.js"],
    github: "https://github.com/DARKPIX404/supercell-api",
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card group shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden bg-[#0f111a]/80 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-video bg-[#0a0a0f] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              project.status === "Завершён"
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-[#00d4ff] hover:text-white transition-colors group/link"
        >
          <Github className="w-4 h-4 mr-1.5" aria-hidden="true" />
          GitHub
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}

export function TeamProjects() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Проекты команды</h2>
          <p className="text-slate-400 max-w-xl">
            Реальные штуки, которые делают участники сервера
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          box-shadow: inset 0 0 0 1px rgba(30, 41, 59, 0.8);
        }
        .project-card:hover {
          box-shadow:
            inset 0 0 0 1px rgba(0, 212, 255, 0.3),
            0 0 30px rgba(18, 73, 182, 0.2);
        }
      `}</style>
    </section>
  );
}
