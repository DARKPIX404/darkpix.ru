import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "API reference — PaperScript Docs | DARKPIX.RU",
  description:
    "The complete ps.* facade: logger, events, commands, scheduler, players, worlds, server, locations and persistent storage.",
};

function Sig({ children }: { children: string }) {
  return (
    <code className="block font-mono text-xs text-blue-300 bg-[#070b16] border border-slate-800 rounded-lg px-3 py-2 overflow-x-auto">
      {children}
    </code>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 id={id} className="text-2xl font-bold text-white mb-4 scroll-mt-24">
        {title}
      </h2>
      {children}
    </section>
  );
}

const CMD_EXAMPLE = `ps.commands.register(
  "spawn",
  (ctx) => {
    if (!ctx.sender.player) {
      ctx.sender.sendMessage("<red>Players only.</red>");
      return;
    }
    const p = ps.players.get(ctx.sender.name);
    const w = p && ps.worlds.get(p.location.world);
    if (p && w) {
      p.teleport(w.spawnLocation);
      ctx.sender.sendMessage("<green>Teleported to spawn.</green>");
    }
  },
  "Teleport to spawn",   // description
  "/spawn"               // usage shown in /help
);`;

const SCHED_EXAMPLE = `// once, next tick
ps.scheduler.runTask(() => ps.logger.info("tick"));

// after 5 seconds (20 ticks = 1s)
const id = ps.scheduler.runTaskLater(() => {
  ps.server.broadcast("<gray>5 seconds passed</gray>");
}, 20 * 5);

// repeating: start after 20t, then every 100t
const timer = ps.scheduler.runTaskTimer(
  () => ps.server.broadcast("<aqua>Still running</aqua>"),
  20,
  100
);

ps.scheduler.cancelTask(timer);`;

const STORAGE_EXAMPLE = `// values are JSON strings — serialize yourself
ps.storage.set("kills", JSON.stringify({ Steve: 3 }));

const raw = ps.storage.get("kills");
const kills = raw ? JSON.parse(raw) : {};
kills.Steve = (kills.Steve ?? 0) + 1;
ps.storage.set("kills", JSON.stringify(kills));

ps.storage.remove("kills");
ps.storage.save(); // force flush (auto-saved on disable anyway)`;

const PLAYER_EXAMPLE = `const p = ps.players.get("Steve"); // null if offline
if (p) {
  p.sendMessage("<gold>Hi, " + p.name + "</gold>");
  p.heal();
  p.feed();
  p.allowFlight = true;
  p.flying = true;
  p.setGameMode("creative"); // false if the mode name is unknown

  const here = p.location;       // { world, x, y, z, yaw, pitch }
  p.teleport(ps.loc.create(here.world, here.x, here.y + 10, here.z));
}

for (const online of ps.players.online()) {
  ps.logger.info(online.name + " @ " + online.location.world);
}`;

export default function DocsApiPage() {
  return (
    <DocsShell active="api">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">API reference</h1>
        <p className="text-slate-400 leading-relaxed mb-4">
          Every script gets one global: <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ps</code>.
          It is the only bridge between your code and the server. Types ship with{" "}
          <a href="https://www.npmjs.com/package/@paperscript/sdk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            @paperscript/sdk
          </a>{" "}
          — with them installed your editor autocompletes everything on this page.
        </p>
        <p className="text-slate-400 leading-relaxed mb-2">
          <strong className="text-slate-200">Chat strings.</strong> Every{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">sendMessage</code> /{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">broadcast</code> accepts{" "}
          <strong className="text-slate-200">MiniMessage</strong> on the modern line
          (<code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&lt;red&gt;</code>,{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&lt;gradient:#a:#b&gt;</code>, hover/click)
          and legacy <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&amp;</code>-codes on legacy hosts.
        </p>

        <Section id="lifecycle" title="Lifecycle">
          <div className="space-y-3">
            <Sig>ps.onEnable(fn: () =&gt; void): void</Sig>
            <Sig>ps.onDisable(fn: () =&gt; void): void</Sig>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4 text-sm">
            <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">onEnable</code> runs after the script
            is evaluated — register commands and listeners here. <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">onDisable</code> runs
            on <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps reload</code> or server stop — cancel
            your timers and flush state there.
          </p>
        </Section>

        <Section id="logger" title="ps.logger">
          <div className="space-y-3">
            <Sig>ps.logger.info(message: string): void</Sig>
            <Sig>ps.logger.warn(message: string): void</Sig>
            <Sig>ps.logger.error(message: string): void</Sig>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4 text-sm">
            Writes to the server console, prefixed with your script name.
          </p>
        </Section>

        <Section id="events" title="ps.events">
          <div className="space-y-3">
            <Sig>{"ps.events.onPlayerJoin(handler: (event: { player: Player }) => void): void"}</Sig>
            <Sig>{"ps.events.onPlayerQuit(handler: (event: { player: Player }) => void): void"}</Sig>
          </div>
          <CodeBlock
            code={`ps.events.onPlayerJoin((event) => {
  event.player.sendMessage("<gold>Welcome, " + event.player.name + "!</gold>");
  ps.server.broadcast("<gray>" + event.player.name + " joined</gray>");
});`}
            filename="src/index.ts"
          />
        </Section>

        <Section id="commands" title="ps.commands">
          <Sig>ps.commands.register(name, handler, description?, usage?): void</Sig>
          <p className="text-slate-400 leading-relaxed my-4 text-sm">
            The handler receives a <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">CommandContext</code>:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0f111a] text-slate-300">
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Member</th>
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Type</th>
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.sender.name</td><td className="px-4 py-2.5 font-mono text-xs">string</td><td className="px-4 py-2.5">Player name, or &quot;CONSOLE&quot;</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.sender.op</td><td className="px-4 py-2.5 font-mono text-xs">boolean</td><td className="px-4 py-2.5">Server operator?</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.sender.player</td><td className="px-4 py-2.5 font-mono text-xs">boolean</td><td className="px-4 py-2.5">Is an in-game player (not console)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.sender.sendMessage(msg)</td><td className="px-4 py-2.5 font-mono text-xs">void</td><td className="px-4 py-2.5">Reply to the sender</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.label</td><td className="px-4 py-2.5 font-mono text-xs">string</td><td className="px-4 py-2.5">Command label as typed</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.args</td><td className="px-4 py-2.5 font-mono text-xs">string[]</td><td className="px-4 py-2.5">All arguments</td></tr>
                <tr><td className="px-4 py-2.5 font-mono text-xs text-slate-300">ctx.arg(i)</td><td className="px-4 py-2.5 font-mono text-xs">string | null</td><td className="px-4 py-2.5">Argument at index, or null</td></tr>
              </tbody>
            </table>
          </div>
          <CodeBlock code={CMD_EXAMPLE} filename="src/index.ts" />
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong className="text-slate-400">Legacy caveat:</strong> on Nashorn hosts <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ctx.args</code> is
            a Java array — index access and <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">.length</code> work, but prefer{" "}
            <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ctx.arg(i)</code> for portability.
          </p>
        </Section>

        <Section id="scheduler" title="ps.scheduler">
          <div className="space-y-3">
            <Sig>ps.scheduler.runTask(fn: () =&gt; void): number</Sig>
            <Sig>ps.scheduler.runTaskLater(fn: () =&gt; void, delayTicks: number): number</Sig>
            <Sig>ps.scheduler.runTaskTimer(fn: () =&gt; void, delayTicks: number, periodTicks: number): number</Sig>
            <Sig>ps.scheduler.cancelTask(taskId: number): void</Sig>
          </div>
          <p className="text-slate-400 leading-relaxed my-4 text-sm">
            All tasks run on the server main thread — never touch Bukkit state from anything else.
            20 ticks = 1 second. Every call returns a task id for cancellation.
          </p>
          <CodeBlock code={SCHED_EXAMPLE} filename="src/index.ts" />
        </Section>

        <Section id="players" title="ps.players &amp; Player">
          <div className="space-y-3 mb-4">
            <Sig>ps.players.online(): Player[]</Sig>
            <Sig>ps.players.get(name: string): Player | null</Sig>
          </div>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0f111a] text-slate-300">
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Member</th>
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Type</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">name, uniqueId, online</td><td className="px-4 py-2.5 font-mono text-xs">string, string, boolean (readonly)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">health, foodLevel</td><td className="px-4 py-2.5 font-mono text-xs">number (read/write)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">location</td><td className="px-4 py-2.5 font-mono text-xs">Location (readonly snapshot)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">teleport(loc)</td><td className="px-4 py-2.5 font-mono text-xs">boolean — false if the teleport failed</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">heal() / feed()</td><td className="px-4 py-2.5 font-mono text-xs">void — full health / full hunger</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">allowFlight, flying</td><td className="px-4 py-2.5 font-mono text-xs">boolean (read/write)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">gameMode</td><td className="px-4 py-2.5 font-mono text-xs">string (readonly)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">setGameMode(mode)</td><td className="px-4 py-2.5 font-mono text-xs">boolean — false for an unknown mode name</td></tr>
                <tr><td className="px-4 py-2.5 font-mono text-xs text-slate-300">sendMessage(msg)</td><td className="px-4 py-2.5 font-mono text-xs">void</td></tr>
              </tbody>
            </table>
          </div>
          <CodeBlock code={PLAYER_EXAMPLE} filename="src/index.ts" />
        </Section>

        <Section id="worlds" title="ps.worlds &amp; World">
          <div className="space-y-3 mb-4">
            <Sig>ps.worlds.all(): World[]</Sig>
            <Sig>ps.worlds.get(name: string): World | null</Sig>
          </div>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0f111a] text-slate-300">
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Member</th>
                  <th className="text-left font-semibold px-4 py-2.5 border-b border-slate-800">Type</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">name</td><td className="px-4 py-2.5 font-mono text-xs">string (readonly)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">time</td><td className="px-4 py-2.5 font-mono text-xs">number (read/write, ticks 0–24000)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">playerCount</td><td className="px-4 py-2.5 font-mono text-xs">number (readonly)</td></tr>
                <tr className="border-b border-slate-800/60"><td className="px-4 py-2.5 font-mono text-xs text-slate-300">spawnLocation</td><td className="px-4 py-2.5 font-mono text-xs">Location (readonly)</td></tr>
                <tr><td className="px-4 py-2.5 font-mono text-xs text-slate-300">setSpawnLocation(loc)</td><td className="px-4 py-2.5 font-mono text-xs">void</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="loc" title="ps.loc">
          <div className="space-y-3">
            <Sig>ps.loc.create(world: string, x, y, z): Location</Sig>
            <Sig>ps.loc.create(world: string, x, y, z, yaw, pitch): Location</Sig>
          </div>
          <p className="text-slate-400 leading-relaxed mt-4 text-sm">
            A <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">Location</code> is a plain immutable object:{" "}
            <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">{"{ world, x, y, z, yaw, pitch }"}</code> — safe
            to JSON-serialize into storage and pass back to <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">teleport</code>.
          </p>
        </Section>

        <Section id="server" title="ps.server">
          <div className="space-y-3">
            <Sig>ps.server.version: string          // server implementation version</Sig>
            <Sig>{"ps.server.minecraftVersion: string // e.g. \"1.21.1\""}</Sig>
            <Sig>ps.server.onlineCount: number</Sig>
            <Sig>ps.server.maxPlayers: number</Sig>
            <Sig>ps.server.broadcast(message: string): void</Sig>
          </div>
        </Section>

        <Section id="storage" title="ps.storage">
          <div className="space-y-3">
            <Sig>ps.storage.get(key: string): string | null</Sig>
            <Sig>ps.storage.set(key: string, jsonValue: string): void</Sig>
            <Sig>ps.storage.remove(key: string): void</Sig>
            <Sig>ps.storage.save(): void</Sig>
          </div>
          <p className="text-slate-400 leading-relaxed my-4 text-sm">
            Per-script persistent key-value store. Values are JSON strings — serialize with{" "}
            <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">JSON.stringify</code>. Flushed automatically
            when the script is disabled; <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">save()</code> forces an early flush.
          </p>
          <CodeBlock code={STORAGE_EXAMPLE} filename="src/index.ts" />
        </Section>
      </article>
    </DocsShell>
  );
}
