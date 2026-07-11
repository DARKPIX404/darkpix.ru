import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { SectionDivider } from "@/components/sections/section-divider";
import { getDiscordInvite, formatMemberCount } from "@/lib/discord-invite";

export default async function Home() {
  const invite = await getDiscordInvite("vibecoders");
  const memberCount = invite ? formatMemberCount(invite.memberCount) : "1,500+";

  return (
    <main className="min-h-screen bg-[#00040C]">
      <Header memberCount={memberCount} />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <FeaturedProject />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
