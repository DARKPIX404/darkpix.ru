import type { Metadata } from "next";
import { PaperScriptPage } from "@/components/sections/paperscript-page";

export const metadata: Metadata = {
  title: "PaperScript — Minecraft plugins in TypeScript | DARKPIX.RU",
  description:
    "Write Paper/Spigot plugins in TypeScript and JavaScript. GraalJS runtime, typed SDK, hot reload, MiniMessage chat. Paper 1.18–1.21 today, 1.12.2 legacy on the roadmap.",
};

export default function Page() {
  return <PaperScriptPage />;
}
