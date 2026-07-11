import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Examples — PaperScript Docs | DARKPIX.RU",
  description:
    "Ready-to-run PaperScript plugins: a minimal hello world and a full Essentials-style command suite with MiniMessage chat.",
};

const HELLO = `ps.onEnable(() => {
  ps.logger.info('Hello from a TypeScript plugin!');

  ps.commands.register(
    'hello',
    (ctx) => {
      ctx.sender.sendMessage('Hello, ' + ctx.sender.name + '!');
    },
    'Say hello',
    '/hello'
  );

  ps.events.onPlayerJoin((event) => {
    event.player.sendMessage('Welcome, ' + event.player.name + '!');
  });
});

ps.onDisable(() => {
  ps.logger.info('Hello plugin disabled.');
});`;

const THEME = `// One chat theme for the whole plugin — MiniMessage.
const PREFIX = "<dark_gray>[<gradient:#ff7a18:#af52de>Essentials</gradient>]</dark_gray> ";

const ok   = (t: string) => \`<green>\${t}</green>\`;
const fail = (t: string) => \`<red>\${t}</red>\`;
const info = (t: string) => \`<gray>\${t}</gray>\`;
const hi   = (t: string) => \`<gold>\${t}</gold>\`;
const aqua = (t: string) => \`<aqua>\${t}</aqua>\`;

interface MessageTarget { sendMessage(msg: string): void; }

function tell(target: MessageTarget, text: string): void {
  target.sendMessage(PREFIX + text);
}

// Resolve the sender as a Player, or tell them why not.
function self(ctx: CommandContext): Player | null {
  if (!ctx.sender.player) {
    tell(ctx.sender, fail("Players only."));
    return null;
  }
  const p = ps.players.get(ctx.sender.name);
  if (!p) tell(ctx.sender, fail("Could not find your player."));
  return p;
}

// Find an online player by name, with a themed error if missing.
function findPlayer(name: string | null, ctx: CommandContext): Player | null {
  if (!name) { tell(ctx.sender, info("Specify a player name.")); return null; }
  const p = ps.players.get(name);
  if (!p) tell(ctx.sender, fail(\`Player \${hi(name)} is not online.\`));
  return p;
}

function needOp(ctx: CommandContext): boolean {
  if (!ctx.sender.op) { tell(ctx.sender, fail("Not enough permissions.")); return false; }
  return true;
}`;

const SPAWN = `ps.commands.register(
  "spawn",
  (ctx) => {
    const p = self(ctx);
    if (!p) return;
    const w = ps.worlds.get(p.location.world) ?? ps.worlds.all()[0];
    if (!w) { tell(ctx.sender, fail("World not found.")); return; }
    p.teleport(w.spawnLocation);
    tell(ctx.sender, ok("Teleported to spawn."));
  },
  "Teleport to spawn",
  "/spawn"
);`;

const TP = `ps.commands.register(
  "tp",
  (ctx) => {
    const a = ctx.arg(0);
    const b = ctx.arg(1);
    if (a && b) {
      // /tp <from> <to> — operators only
      if (!needOp(ctx)) return;
      const from = findPlayer(a, ctx);
      const to = findPlayer(b, ctx);
      if (!from || !to) return;
      from.teleport(to.location);
      tell(ctx.sender, ok(\`\${hi(from.name)} teleported to \${hi(to.name)}.\`));
    } else if (a) {
      // /tp <to> — self teleport
      const p = self(ctx);
      if (!p) return;
      const to = findPlayer(a, ctx);
      if (!to) return;
      p.teleport(to.location);
      tell(ctx.sender, ok(\`Teleported to \${hi(to.name)}.\`));
    } else {
      tell(ctx.sender, info("Usage: /tp <player> or /tp <a> <b>"));
    }
  },
  "Teleportation",
  "/tp <player>"
);`;

const TPA = `interface TpaRequest { from: string; task: number; }
const pending = new Map<string, TpaRequest>(); // key = target name

ps.commands.register("tpa", (ctx) => {
  const p = self(ctx);
  if (!p) return;
  const t = findPlayer(ctx.arg(0), ctx);
  if (!t) return;

  const prev = pending.get(t.name);
  if (prev) ps.scheduler.cancelTask(prev.task);
  // auto-expire after 60 seconds
  const task = ps.scheduler.runTaskLater(() => pending.delete(t.name), 20 * 60);
  pending.set(t.name, { from: p.name, task });

  tell(ctx.sender, ok(\`Teleport request sent to \${hi(t.name)}.\`));
  t.sendMessage(PREFIX + info(\`\${hi(p.name)} wants to teleport to you. \`)
    + aqua(\`/tpaccept \${p.name}\`) + info(" (60s)."));
}, "Request a teleport", "/tpa <player>");`;

const HOMES = `type HomeMap = Record<string, Location>;

function loadHomes(): HomeMap {
  const raw = ps.storage.get("homes");
  if (!raw) return {};
  try { return JSON.parse(raw) as HomeMap; } catch { return {}; }
}

function saveHomes(map: HomeMap): void {
  ps.storage.set("homes", JSON.stringify(map));
}

ps.commands.register("sethome", (ctx) => {
  const p = self(ctx);
  if (!p) return;
  const name = ctx.arg(0) ?? "home";
  const homes = loadHomes();
  homes[name] = p.location; // Location is a plain JSON-safe object
  saveHomes(homes);
  tell(ctx.sender, ok(\`Home \${aqua(name)} saved.\`));
}, "Save a home point", "/sethome [name]");

ps.commands.register("home", (ctx) => {
  const p = self(ctx);
  if (!p) return;
  const name = ctx.arg(0) ?? "home";
  const loc = loadHomes()[name];
  if (!loc) { tell(ctx.sender, fail(\`Home \${aqua(name)} not found.\`)); return; }
  p.teleport(loc);
  tell(ctx.sender, ok(\`Welcome home (\${aqua(name)}).\`));
}, "Teleport home", "/home [name]");`;

const LEGACY_JSON = `{
  "name": "essentials",
  "version": "1.0.0",
  "main": "dist/index.js",
  "apiVersion": "1",
  "target": "es2015"
}`;

export default function DocsExamplesPage() {
  return (
    <DocsShell active="examples">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Examples</h1>
        <p className="text-slate-400 leading-relaxed mb-10">
          Two ready-to-run plugins. Both live in the{" "}
          <a href="https://github.com/DARKPIX404/PaperScript/tree/main/examples" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            examples/
          </a>{" "}
          folder of the repo — copy, build, drop into <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">scripts/</code>, done.
        </p>

        <h2 id="hello" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          hello — the smallest plugin
        </h2>
        <p className="text-slate-400 leading-relaxed">
          One command, one join listener. This is exactly what{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">paperscript init</code> scaffolds:
        </p>
        <CodeBlock code={HELLO} filename="examples/hello/src/index.ts" />

        <h2 id="essentials" className="text-2xl font-bold text-white mt-16 mb-4 scroll-mt-24">
          essentials — a real command suite
        </h2>
        <p className="text-slate-400 leading-relaxed mb-2">
          A full Essentials-style plugin in ~370 lines of TypeScript:
        </p>
        <p className="text-slate-300 text-sm mb-4">
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/spawn</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/setspawn</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/tp</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/tpa</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/tpaccept</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/heal</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/feed</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/fly</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/gamemode</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/sethome</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/home</code>{" "}
          <code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/delhome</code>
        </p>

        <h3 className="text-lg font-semibold text-slate-200 mt-8 mb-3">Chat theme &amp; helpers</h3>
        <p className="text-slate-400 leading-relaxed text-sm mb-1">
          Every message goes through one gradient prefix and a few MiniMessage helpers,
          so the whole plugin looks consistent:
        </p>
        <CodeBlock code={THEME} filename="examples/essentials/src/index.ts" />

        <h3 className="text-lg font-semibold text-slate-200 mt-8 mb-3">/spawn</h3>
        <CodeBlock code={SPAWN} filename="examples/essentials/src/index.ts" />

        <h3 className="text-lg font-semibold text-slate-200 mt-8 mb-3">/tp — overloads &amp; op checks</h3>
        <CodeBlock code={TP} filename="examples/essentials/src/index.ts" />

        <h3 className="text-lg font-semibold text-slate-200 mt-8 mb-3">/tpa — scheduler for expiring requests</h3>
        <CodeBlock code={TPA} filename="examples/essentials/src/index.ts" />

        <h3 className="text-lg font-semibold text-slate-200 mt-8 mb-3">/sethome + /home — persistent storage</h3>
        <CodeBlock code={HOMES} filename="examples/essentials/src/index.ts" />

        <h2 id="legacy" className="text-2xl font-bold text-white mt-16 mb-4 scroll-mt-24">
          Bundling for legacy (1.12.2 / 1.16.5)
        </h2>
        <p className="text-slate-400 leading-relaxed">
          The same source runs on legacy hosts — the only change is the bundle target in{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">plugin.json</code>, so the SDK emits
          ES2015 for the Nashorn engine:
        </p>
        <CodeBlock code={LEGACY_JSON} filename="plugin.json" />
        <p className="text-slate-400 leading-relaxed text-sm">
          Replace MiniMessage strings with <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&amp;</code>-color codes
          (<code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&amp;a</code>, <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&amp;l</code>…)
          and deploy to <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">plugins/PaperScriptLegacy/scripts/</code> instead.
        </p>
      </article>
    </DocsShell>
  );
}
