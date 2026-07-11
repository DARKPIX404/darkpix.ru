export interface DiscordInviteData {
  code: string;
  memberCount: number;
  presenceCount: number;
  guildName: string;
  guildDescription: string | null;
  iconUrl: string | null;
}

export async function getDiscordInvite(inviteCode: string): Promise<DiscordInviteData | null> {
  try {
    const res = await fetch(`https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Discord invite API error:", res.status, await res.text());
      return null;
    }

    const data = await res.json();

    const iconUrl = data.guild?.icon
      ? `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png?size=256`
      : null;

    return {
      code: data.code,
      memberCount: data.approximate_member_count ?? 0,
      presenceCount: data.approximate_presence_count ?? 0,
      guildName: data.guild?.name ?? "VibeCoders",
      guildDescription: data.guild?.description ?? null,
      iconUrl,
    };
  } catch (error) {
    console.error("Failed to fetch Discord invite:", error);
    return null;
  }
}

export function formatMemberCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K+`;
  }
  return `${count}+`;
}
