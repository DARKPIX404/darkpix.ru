"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

const experiencesData: ExperienceItem[] = [
  { id: "1", year: "2017", title: "JavaScript & VK Bots", description: "Started learning JavaScript. Got into writing bots and scripts for the VK platform." },
  { id: "2", year: "2018", title: "First Website & HTML/CSS", description: "Decided to build a website and began learning HTML and CSS." },
  { id: "3", year: "2020", title: "Node.js & Backend", description: "Explored backend development with Node.js and built simple APIs." },
  { id: "4", year: "2022", title: "React & Next.js", description: "Discovered React and Next.js. Dived deep into the modern frontend ecosystem." },
  { id: "5", year: "2024", title: "TypeScript & Modern Stack", description: "Mastered TypeScript, Tailwind CSS and advanced React patterns." },
  { id: "6", year: "2026", title: "Fullstack & Own Project", description: "Decided to become a fullstack developer. Started building my own project." },
];

export function Experience() {
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
            Experience & Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My path as a developer
          </h2>
        </motion.div>

        {/* Desktop lg: horizontal timeline with 6 columns */}
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
                  <h3 className="text-white font-semibold mb-1 text-sm leading-tight">{exp.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet md: horizontal timeline with 3 columns, 2 rows */}
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
                  <h3 className="text-white font-semibold mb-1">{exp.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
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
                  <h3 className="text-white font-semibold mt-0.5">{exp.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
