"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Server } from "lucide-react";

const FEATURES = [
  {
    icon: Code2,
    title: "Weekly Coding Challenges",
    desc: "Еженедельные челленджи с призами",
    color: "#00d4ff",
  },
  {
    icon: Bot,
    title: "AI Tools & Experiments",
    desc: "Тестируем новые модели и API",
    color: "#6b21a8",
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    desc: "Шаримся по серверам как по лесным тропинкам",
    color: "#1249b6",
  },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card group relative rounded-xl p-6 bg-[#0f111a]/70 transition-all duration-300 hover:-translate-y-1"
      style={{ "--glow-color": feature.color } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-shadow duration-300 group-hover:shadow-lg"
        style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
      >
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Что внутри</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Три столпа сообщества — код, AI и инфраструктура
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(135deg, #1249b6, #6b21a8, #00d4ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .feature-card:hover::before {
          opacity: 1;
        }
        .feature-card:hover {
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.3), 0 0 30px var(--glow-color, #1249b6) 20;
        }
      `}</style>
    </section>
  );
}
