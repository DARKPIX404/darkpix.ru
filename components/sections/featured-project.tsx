"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ArrowRight, Code2, Zap, RefreshCw, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GITHUB_URL = "https://github.com/DARKPIX404/PaperScript";

const features = [
  { title: "TypeScript first", desc: "Typed SDK with autocompletion for the whole server API.", icon: Code2 },
  { title: "GraalJS runtime", desc: "Modern ECMAScript on the JVM — fast and safe.", icon: Zap },
  { title: "Hot reload", desc: "Edit a script and reload without restarting the server.", icon: RefreshCw },
  { title: "MiniMessage chat", desc: "Rich, gradient, hoverable messages out of the box.", icon: MessageSquare },
];

export function FeaturedProject() {
  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2">
            Featured Project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">PaperScript</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[280px] rounded-3xl overflow-hidden glass gradient-border"
          >
            <Image
              src="/paperscript-cover.svg"
              alt="PaperScript"
              fill
              className="object-contain p-8"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="h-full flex flex-col">
                <Badge className="mb-4 w-fit">Open source · MIT</Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Minecraft plugins in TypeScript
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  PaperScript lets you author Paper/Spigot plugins in modern JavaScript
                  and TypeScript — hot-reloaded, with a typed SDK and MiniMessage chat —
                  and ships them as a normal .jar.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={feat.title}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm">{feat.title}</h4>
                          <p className="text-slate-400 text-xs leading-relaxed mt-0.5">{feat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="px-6 py-5 text-base">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="glass" className="px-6 py-5 text-base">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Open
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
