import { VibeCodersPage } from "@/components/sections/vibecoders/vibecoders-page";
import { getDiscordInvite, formatMemberCount } from "@/lib/discord-invite";

export default async function Page() {
  const invite = await getDiscordInvite("vibecoders");
  const memberCount = invite ? formatMemberCount(invite.memberCount) : "1,500+";

  return <VibeCodersPage memberCount={memberCount} />;
}
