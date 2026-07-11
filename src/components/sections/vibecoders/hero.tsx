"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/vibecoders";

interface HeroProps {
  memberCount: string;
}

export function Hero({ memberCount }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="glitch text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6">
          VIBE CODERS
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Сообщество разработчиков, дата-инженеров и энтузиастов AI
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join VibeCoders Discord server"
            className="discord-pulse group relative inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white text-lg transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: "#5865F2" }}
          >
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10" />
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Discord
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-[#0f111a]/60 text-slate-300 text-sm">
          <Users className="w-4 h-4 text-[#00d4ff]" aria-hidden="true" />
          <span>
            <strong className="text-white">{memberCount}</strong> участников уже внутри
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
        </div>
      </motion.div>

      <style jsx>{`
        .glitch {
          position: relative;
          text-shadow:
            0 0 20px rgba(18, 73, 182, 0.6),
            0 0 40px rgba(18, 73, 182, 0.3);
        }
        .glitch::before,
        .glitch::after {
          content: "VIBE CODERS";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0a0f;
        }
        .glitch::before {
          color: #00d4ff;
          z-index: -1;
          animation: glitch-1 2.5s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        }
        .glitch::after {
          color: #6b21a8;
          z-index: -2;
          animation: glitch-2 3s infinite linear alternate-reverse;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        }
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 0); }
          80% { transform: translate(1px, 1px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, -1px); }
          40% { transform: translate(-2px, 2px); }
          60% { transform: translate(1px, 0); }
          80% { transform: translate(-1px, -1px); }
          100% { transform: translate(0); }
        }
        .discord-pulse {
          box-shadow: 0 0 0 0 rgba(88, 101, 242, 0.7);
          animation: pulse-discord 2s infinite;
        }
        .discord-pulse:hover {
          animation: none;
          box-shadow: 0 0 30px rgba(88, 101, 242, 0.6);
        }
        @keyframes pulse-discord {
          0% { box-shadow: 0 0 0 0 rgba(88, 101, 242, 0.7); }
          70% { box-shadow: 0 0 0 16px rgba(88, 101, 242, 0); }
          100% { box-shadow: 0 0 0 0 rgba(88, 101, 242, 0); }
        }
      `}</style>
    </section>
  );
}
