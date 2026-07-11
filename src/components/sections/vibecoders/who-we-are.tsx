"use client";

import { motion } from "framer-motion";

const MEMBERS = [
  {
    name: "DARKPIX",
    role: "Founder",
    tagline: "Собирает людей вокруг кода и AI",
    color: "#00d4ff",
    initials: "DP",
  },
  {
    name: "Core Dev",
    role: "Core Team",
    tagline: "Пишет фичи, которые работают с первого раза",
    color: "#5865F2",
    initials: "CD",
  },
  {
    name: "OpsWizard",
    role: "DevOps",
    tagline: "Держит сервера в рабочем состоянии 24/7",
    color: "#6b21a8",
    initials: "OW",
  },
  {
    name: "Neural",
    role: "AI Researcher",
    tagline: "Тестирует модели раньше, чем они выходят в релиз",
    color: "#1249b6",
    initials: "NL",
  },
];

function MemberCard({ member, index }: { member: typeof MEMBERS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div
        className="relative w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-black text-white"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${member.color}30, #0f111a 70%)`,
          boxShadow: `0 0 0 2px ${member.color}40, 0 0 30px ${member.color}30`,
        }}
      >
        {member.initials}
      </div>
      <h3 className="text-lg font-bold text-white">{member.name}</h3>
      <p className="text-sm font-medium mb-1" style={{ color: member.color }}>
        {member.role}
      </p>
      <p className="text-sm text-slate-400 max-w-[200px] mx-auto">{member.tagline}</p>
    </motion.div>
  );
}

export function WhoWeAre() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Кто мы</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Люди, которые создают атмосферу сервера
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
