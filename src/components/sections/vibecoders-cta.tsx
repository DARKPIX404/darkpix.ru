"use client";

import { motion } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { ArrowRight } from "lucide-react";

const VIBECODERS_DISCORD = "https://discord.gg/vibecoders";

export function VibeCodersCTA() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="vibecoders-cta relative overflow-hidden rounded-xl bg-[#0f111a]/80 p-8 sm:p-10 text-center transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1249b6]/10 via-transparent to-[#6b21a8]/10 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/30 mb-5 mx-auto">
              <SiDiscord className="w-7 h-7 text-[#5865F2]" aria-hidden="true" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Присоединяйся к <span className="text-[#00d4ff]">VibeCoders</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-6">
              Сообщество разработчиков, AI-энтузиастов и DevOps. Челленджи, эксперименты с моделями и безумные проекты.
            </p>

            <a
              href={VIBECODERS_DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join VibeCoders Discord server"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(88,101,242,0.5)]"
              style={{ backgroundColor: "#5865F2" }}
            >
              <SiDiscord className="w-5 h-5" aria-hidden="true" />
              Join VibeCoders
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .vibecoders-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(135deg, #1249b6, #6b21a8, #00d4ff, #5865F2);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .vibecoders-cta:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
