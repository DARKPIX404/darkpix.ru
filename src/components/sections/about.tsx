"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, FolderGit2, Target, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  years: <Clock className="w-6 h-6 text-blue-400" />,
  projects: <FolderGit2 className="w-6 h-6 text-blue-400" />,
  specialization: <Target className="w-6 h-6 text-blue-400" />,
  status: <Zap className="w-6 h-6 text-blue-400" />,
};

const aboutData = [
  { key: "years", value: "8+", label: "Years Learning" },
  { key: "projects", value: "10+", label: "Projects" },
  { key: "specialization", value: "Frontend", label: "Specialization" },
  { key: "status", value: "Always", label: "Learning" },
];

export function About() {
  return (
    <section id="about" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              I build things for the web
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m a self-taught developer with a strong passion for frontend development
              and clean code. Currently focused on building modern web apps with Next.js
              and improving my DevOps skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.map((item) => (
              <Card
                key={item.key}
                className="bg-[#0f111a] border-slate-800 hover:border-blue-500/30 transition-colors"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="mt-1">{iconMap[item.key] || <Zap className="w-6 h-6 text-blue-400" />}</div>
                  <div>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
