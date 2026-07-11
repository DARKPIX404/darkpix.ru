"use client";

import { motion } from "framer-motion";

const TAGS = ["AI/ML", "Open Source", "Vibe Coding", "DevOps"];
const ROLES = [
  { name: "Core Team", color: "#5865F2" },
  { name: "Contributors", color: "#00d4ff" },
  { name: "Mentors", color: "#6b21a8" },
];

function ServerIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-28 h-28 sm:w-36 sm:h-36" aria-hidden="true">
      <defs>
        <radialGradient id="energy" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1249b6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#energy)" />
      <path
        d="M100 40 C70 40 55 65 55 90 C55 115 70 130 85 140 L85 165 L100 150 L115 165 L115 140 C130 130 145 115 145 90 C145 65 130 40 100 40 Z"
        fill="#0f111a"
        stroke="#00d4ff"
        strokeWidth="3"
      />
      <path
        d="M85 90 Q100 70 115 90"
        fill="none"
        stroke="#00d4ff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="85" cy="95" r="4" fill="#00d4ff" />
      <circle cx="115" cy="95" r="4" fill="#00d4ff" />
      <path
        d="M90 115 Q100 120 110 115"
        fill="none"
        stroke="#6b21a8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ServerPreview() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border rounded-xl p-6 sm:p-8 bg-[#0f111a]/80 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#00d4ff]/10 blur-xl" />
              <ServerIcon />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">VibeCoders | Community</h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Онлайн
                </span>
              </div>

              <p className="text-slate-400 mb-4">
                Открытое сообщество vibe-кодеров: AI-first разработка, open source, DevOps и еженедельные челленджи.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-5">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {ROLES.map((role) => (
                  <div
                    key={role.name}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: role.color }}
                      aria-hidden="true"
                    />
                    {role.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(135deg, #1249b6, #6b21a8, #00d4ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
