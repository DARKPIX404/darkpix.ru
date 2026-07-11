"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { Code2, Bot, Server, X, Users } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/vibecoders";

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

interface VibeCodersModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberCount: string;
}

export function VibeCodersModal({ isOpen, onClose, memberCount }: VibeCodersModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="VibeCoders Community"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="vibecoders-modal relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0a0a0f]/95 p-6 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              aria-label="Close VibeCoders modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h2 className="modal-glitch text-4xl sm:text-5xl font-black tracking-tighter text-white mb-3">
                VIBE CODERS
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-md mx-auto">
                Сообщество разработчиков, дата-инженеров и энтузиастов AI
              </p>

              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-slate-800 bg-[#0f111a]/60 text-slate-300 text-sm">
                <Users className="w-4 h-4 text-[#00d4ff]" aria-hidden="true" />
                <span>
                  <strong className="text-white">{memberCount}</strong> участников уже внутри
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="feature-card rounded-xl p-4 bg-[#0f111a]/70 transition-all duration-300 hover:-translate-y-1"
                    style={{ "--glow-color": feature.color } as React.CSSProperties}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-xs text-slate-400">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                aria-label="Join VibeCoders Discord server"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#5865F2",
                  boxShadow: "0 0 20px rgba(88, 101, 242, 0.4)",
                }}
              >
                <SiDiscord className="w-5 h-5" aria-hidden="true" />
                Join Discord
              </a>
            </div>

            <style jsx>{`
              .vibecoders-modal::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 12px;
                padding: 1px;
                background: linear-gradient(135deg, #1249b6, #6b21a8, #00d4ff, #5865f2);
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
              }
              .modal-glitch {
                position: relative;
                text-shadow: 0 0 20px rgba(18, 73, 182, 0.6), 0 0 40px rgba(18, 73, 182, 0.3);
              }
              .modal-glitch::before,
              .modal-glitch::after {
                content: "VIBE CODERS";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #0a0a0f;
              }
              .modal-glitch::before {
                color: #00d4ff;
                z-index: -1;
                animation: glitch-1 2.5s infinite linear alternate-reverse;
                clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
              }
              .modal-glitch::after {
                color: #6b21a8;
                z-index: -2;
                animation: glitch-2 3s infinite linear alternate-reverse;
                clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
              }
              @keyframes glitch-1 {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 1px); }
                40% { transform: translate(1px, -1px); }
                60% { transform: translate(-1px, 0); }
                80% { transform: translate(1px, 1px); }
                100% { transform: translate(0); }
              }
              @keyframes glitch-2 {
                0% { transform: translate(0); }
                20% { transform: translate(1px, -1px); }
                40% { transform: translate(-1px, 1px); }
                60% { transform: translate(1px, 0); }
                80% { transform: translate(-1px, -1px); }
                100% { transform: translate(0); }
              }
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
                opacity: 0.4;
                transition: opacity 0.3s;
                pointer-events: none;
              }
              .feature-card:hover::before {
                opacity: 0.8;
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
