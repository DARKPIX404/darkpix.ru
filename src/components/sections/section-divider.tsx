"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-2">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.05) 10%, rgba(59,130,246,0.3) 30%, rgba(59,130,246,0.15) 50%, transparent 55%, transparent 60%, rgba(59,130,246,0.15) 65%, rgba(59,130,246,0.3) 80%, rgba(59,130,246,0.05) 90%, transparent 100%)",
          boxShadow: "0 0 12px rgba(59,130,246,0.15), 0 0 4px rgba(59,130,246,0.1)",
        }}
      />
    </div>
  );
}
