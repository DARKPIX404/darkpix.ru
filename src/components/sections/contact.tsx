"use client";

import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as LucideIcons from "lucide-react";

interface ContactItem {
  id: string;
  platform: string;
  url: string;
  icon: string | null;
}

const contactsData: ContactItem[] = [
  { id: "1", platform: "GitHub", url: "https://github.com/DARKPIX404", icon: "SiGithub" },
  { id: "2", platform: "VK", url: "https://vk.com/v_darkpix", icon: "SiVk" },
  { id: "3", platform: "Telegram", url: "https://t.me/v_darkpix", icon: "SiTelegram" },
  { id: "4", platform: "Discord", url: "https://discord.gg/xBvRgsJEZV", icon: "SiDiscord" },
];

function getIcon(iconName: string | null) {
  if (!iconName) return null;
  const si = (SiIcons as Record<string, React.ElementType>)[iconName];
  if (si) return si;
  const lucide = (LucideIcons as unknown as Record<string, React.ElementType>)[iconName];
  if (lucide) return lucide;
  return null;
}

function renderIcon(iconName: string | null, className?: string) {
  const icon = getIcon(iconName);
  if (!icon) return null;
  return React.createElement(icon, { className });
}

export function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in touch
          </h2>
          <p className="text-slate-400">
            I&apos;m open to new opportunities and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Glowing border button */}
          <a href="mailto:vlad.borodaty228032qw@gmail.com" className="group relative">
            <span className="absolute inset-0 rounded-lg bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#06071d] text-slate-200 text-sm font-medium transition-colors duration-300 group-hover:text-blue-300 font-mono tracking-wide">
              <span
                className="absolute top-0 left-[10%] right-[10%] h-px opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 25%, rgba(59,130,246,0.6) 50%, rgba(59,130,246,0.4) 75%, transparent 100%)",
                  boxShadow: "0 0 8px rgba(59,130,246,0.3)",
                }}
              />
              <span
                className="absolute bottom-0 left-[20%] right-[30%] h-px opacity-40 group-hover:opacity-80 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 30%, rgba(59,130,246,0.5) 55%, rgba(59,130,246,0.3) 80%, transparent 100%)",
                  boxShadow: "0 0 6px rgba(59,130,246,0.2)",
                }}
              />
              <span
                className="absolute left-0 top-[25%] bottom-[35%] w-px opacity-30 group-hover:opacity-70 transition-opacity"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.35) 30%, rgba(59,130,246,0.5) 60%, transparent 100%)",
                  boxShadow: "0 0 6px rgba(59,130,246,0.2)",
                }}
              />
              <span
                className="absolute right-0 top-[15%] bottom-[25%] w-px opacity-20 group-hover:opacity-60 transition-opacity"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.25) 40%, rgba(59,130,246,0.4) 70%, transparent 100%)",
                  boxShadow: "0 0 5px rgba(59,130,246,0.15)",
                }}
              />

              {renderIcon("Mail", "w-4 h-4")}
              Contact Me
            </span>
          </a>

          <div className="flex items-center gap-4">
            {contactsData.map((contact) => (
              <a
                key={contact.id}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#0f111a] border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                title={contact.platform}
              >
                {renderIcon(contact.icon, "w-5 h-5")}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
