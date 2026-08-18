"use client";

import { motion } from "framer-motion";

const experiencesData = [
  { year: "2017", title: "JavaScript & VK Bots", desc: "Started learning JavaScript. Got into writing bots and scripts for the VK platform." },
  { year: "2018", title: "First Website & HTML/CSS", desc: "Decided to build a website and began learning HTML and CSS." },
  { year: "2020", title: "Node.js & Backend", desc: "Explored backend development with Node.js and built simple APIs." },
  { year: "2022", title: "React & Next.js", desc: "Discovered React and Next.js. Dived deep into the modern frontend ecosystem." },
  { year: "2024", title: "TypeScript & Modern Stack", desc: "Mastered TypeScript, Tailwind CSS and advanced React patterns." },
  { year: "2026", title: "DevSecOps Engineer", desc: "Got a job as a DevSecOps engineer. Combining development, security and infrastructure skills." },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Experience & Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">My path as a developer</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          {experiencesData.map((exp, i) => {
            const isLeft = i < 3;

            return (
              <motion.div
                key={exp.year}
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
                <div
                  className={`absolute top-2 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 ring-4 ring-[#030712] ${
                    isLeft
                      ? "left-[7px] md:left-auto md:right-[-6px]"
                      : "left-[7px] md:left-[-6px]"
                  }`}
                />

                <div className="glass rounded-2xl p-5 hover:bg-white/[0.07] transition-colors">
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-bold text-lg mb-1">
                    {exp.year}
                  </span>
                  <h3 className="text-white font-semibold mb-1">{exp.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
