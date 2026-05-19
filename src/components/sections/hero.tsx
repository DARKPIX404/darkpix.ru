"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/darkpix-logo.png";
import heroBg from "../../../public/hero-background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full-section background image */}
      <div className="absolute inset-0 top-14">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="hidden object-cover object-center lg:object-right lg:block"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center text-center lg:text-left py-12"
          >
            <p className="text-blue-400 text-lg mb-2">Hi, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 glow-text">
              DARKPIX
            </h1>
            <p className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-6">
              Frontend Developer
            </p>
            <p className="text-slate-300 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build fast, modern and responsive web applications using React, Next.js
              and other cool technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="#projects">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base glow-blue">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="border-slate-600/50 text-slate-200 hover:bg-slate-800/50 hover:text-white px-6 py-5 text-base backdrop-blur-sm bg-slate-900/20">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Mobile: logo */}
          <div className="lg:hidden relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <Image
              src={logo}
              alt="Darkpix Logo"
              fill
              className="object-contain"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-slate-400" />
      </motion.div>
    </section>
  );
}
