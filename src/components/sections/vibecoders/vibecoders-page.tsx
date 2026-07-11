import { Hero } from "./hero";
import { ServerPreview } from "./server-preview";
import { Features } from "./features";
import { TeamProjects } from "./team-projects";
import { WhoWeAre } from "./who-we-are";
import { Footer } from "./footer";
import { MatrixBackground } from "./matrix-background";
import { PixelFairy } from "./pixel-fairy";

interface VibeCodersPageProps {
  memberCount: string;
}

export function VibeCodersPage({ memberCount }: VibeCodersPageProps) {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-slate-200 overflow-x-hidden">
      <MatrixBackground />
      <Hero memberCount={memberCount} />
      <ServerPreview />
      <Features />
      <TeamProjects />
      <WhoWeAre />
      <Footer />
      <PixelFairy />
    </main>
  );
}
