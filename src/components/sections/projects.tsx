"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { getTranslation, type TranslationKey } from "@/lib/i18n";

interface Project {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  image: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  stack: string;
}

export function Projects() {
  const { lang } = useLanguage();
  const t = getTranslation(lang);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectsData: Project[] = [
    {
      id: "1",
      titleKey: "project1Title",
      descKey: "project1Desc",
      image: "/portfolio-project.png",
      liveUrl: "https://darkpix.ru",
      githubUrl: "https://github.com/DARKPIX404/darkpix.ru",
      stack: "Next.js,Tailwind,TypeScript",
    },
    {
      id: "2",
      titleKey: "project2Title",
      descKey: "project2Desc",
      image: null,
      liveUrl: "https://darkpix404.github.io/supercell-api/",
      githubUrl: "https://github.com/DARKPIX404/supercell-api",
      stack: "TypeScript,Node.js,API",
    },
    {
      id: "3",
      titleKey: "project3Title",
      descKey: "project3Desc",
      image: null,
      liveUrl: "https://darkpix404.github.io/react-password-generator/",
      githubUrl: "https://github.com/DARKPIX404/react-password-generator",
      stack: "React,TypeScript,Tailwind",
    },
    {
      id: "4",
      titleKey: "project4Title",
      descKey: "project4Desc",
      image: null,
      liveUrl: "https://darkpix404.github.io/nextjs-weather-dashboard/",
      githubUrl: "https://github.com/DARKPIX404/nextjs-weather-dashboard",
      stack: "Next.js,API,Charts",
    },
  ];

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const canScrollLeft = el.scrollLeft > 0;
    const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && (canScrollLeft || canScrollRight)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const useCarousel = projectsData.length > 3;

  return (
    <section id="projects" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
              {t("projectsTitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t("projectsHeading")}
            </h2>
          </div>
          {useCarousel && (
            <div className="hidden md:flex shrink-0 ml-6 gap-3">
              <button
                onClick={() => scrollBy(-320)}
                className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy(320)}
                className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>

        {useCarousel ? (
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-start shrink-0 w-72 sm:w-80"
              >
                <ProjectCard project={project} lang={lang} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard project={project} lang={lang} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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

function ProjectCard({ project, lang }: { project: Project; lang: string }) {
  const t = getTranslation(lang as "en" | "ru");
  const title = t(project.titleKey);
  const description = t(project.descKey);

  return (
    <Card className="bg-[#0f111a] border-slate-800 overflow-hidden hover:border-blue-500/30 transition-all group h-full flex flex-col">
      <div className="aspect-video bg-[#0a0a0f] relative overflow-hidden">
        <ProjectImage image={project.image} title={title} />
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
      </div>

      <CardContent className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.split(",").map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-blue-950/50 text-blue-300 border border-blue-900/50 text-xs"
            >
              {tech.trim()}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              {t("projectLiveDemo")}
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
              {t("projectGitHub")}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
