"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FolderGit2, Target, Zap } from "lucide-react";

const aboutData = [
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "5+", label: "Featured Projects", icon: FolderGit2 },
  { value: "Fullstack", label: "Specialization", icon: Target },
  { value: "Always", label: "Learning", icon: Zap },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            I build things for the web
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.div variants={item} className="md:col-span-2 md:row-span-2">
            <Card className="h-full">
              <CardContent className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vladislav Borodatyi
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  I&apos;m a self-taught developer with a strong passion for clean
                  code, modern UI and reliable infrastructure. Currently focused
                  on building fullstack web apps with Next.js, React, Node.js and
                  Python — from database design to production deployment.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {aboutData.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={item}>
                <Card className="h-full">
                  <CardContent className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
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
