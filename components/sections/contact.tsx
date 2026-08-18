"use client";

import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactsData = [
  { id: "1", platform: "GitHub", url: "https://github.com/DARKPIX404", icon: "SiGithub" },
  { id: "2", platform: "VK", url: "https://vk.com/v_darkpix", icon: "SiVk" },
  { id: "3", platform: "Discord", url: "https://discord.gg/dYkUJQaU6y", icon: "SiDiscord" },
];

function renderIcon(iconName: string | null, className?: string) {
  if (!iconName) return null;
  const Icon = (SiIcons as Record<string, React.ElementType>)[iconName];
  if (!Icon) return null;
  return React.createElement(Icon, { className });
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            I&apos;m open to new opportunities, freelance projects and interesting collaborations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://t.me/v_darkpix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto px-8 py-4 text-base">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </a>
            <a
              href="mailto:hello@darkpix.dev"
              className="w-full sm:w-auto"
            >
              <Button variant="glass" className="w-full px-8 py-4 text-base">
                <Mail className="w-4 h-4 mr-2" />
                hello@darkpix.dev
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            {contactsData.map((contact) => (
              <a
                key={contact.id}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-slate-400 hover:text-white hover:bg-white/10 transition-all"
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
