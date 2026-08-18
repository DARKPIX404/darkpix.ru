"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  liveUrl: string | null;
  liveLabel?: string;
  githubUrl: string | null;
  stack: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "Personal Website",
    description: "My personal portfolio and landing page built with Next.js and Tailwind CSS.",
    image: "/portfolio-project.png",
    liveUrl: null,
    githubUrl: "https://github.com/DARKPIX404/darkpix.ru",
    stack: "Next.js,Tailwind,TypeScript",
  },
  {
    id: "2",
    title: "Supercell API Client",
    description: "TypeScript library for Supercell game APIs with caching, interceptors and rate limiting.",
    image: "/supercell-api-cover.svg",
    liveUrl: "https://darkpix404.github.io/supercell-api/",
    githubUrl: "https://github.com/DARKPIX404/supercell-api",
    stack: "TypeScript,Node.js,API",
  },
  {
    id: "3",
    title: "Password Generator",
    description: "Secure password generator with customizable options and copy to clipboard.",
    image: "/password-generator-cover.svg",
    liveUrl: "https://darkpix404.github.io/react-password-generator/",
    githubUrl: "https://github.com/DARKPIX404/react-password-generator",
    stack: "React,TypeScript,Tailwind",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Weather dashboard with current conditions, forecasts and interactive charts.",
    image: "/weather-dashboard-cover.svg",
    liveUrl: "https://darkpix404.github.io/nextjs-weather-dashboard/",
    githubUrl: "https://github.com/DARKPIX404/nextjs-weather-dashboard",
    stack: "Next.js,API,Charts",
  },
  {
    id: "5",
    title: "PaperScript",
    description: "Write Minecraft plugins in TypeScript/JavaScript. Runs on Paper 1.18–1.21 (GraalJS).",
    image: "/paperscript-cover.svg",
    liveUrl: "https://github.com/DARKPIX404/PaperScript",
    liveLabel: "Open",
    githubUrl: "https://github.com/DARKPIX404/PaperScript",
    stack: "Java,GraalJS,TypeScript,Paper",
    featured: true,
  },
];

function ProjectImage({ image, title }: { image: string | null; title: string }) {
  const [error, setError] = useState(false);
  const handleError = useCallback(() => setError(true), []);

  if (!image || error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-slate-500 text-2xl font-bold tracking-wider text-center px-4 break-words">
          {title}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      unoptimized
      onError={handleError}
    />
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      <div className="aspect-video bg-[#0a0a0f] relative overflow-hidden">
        <ProjectImage image={project.image} title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <CardContent className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-slate-400 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.split(",").map((tech) => (
            <Badge key={tech} className="text-xs">
              {tech.trim()}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              {project.liveLabel ?? "Live Demo"}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 mr-1" />
              GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Some of my recent work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
