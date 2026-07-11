import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { CodeBlock } from "@/components/docs/code-block";

export const metadata: Metadata = {
  title: "Getting started — PaperScript Docs | DARKPIX.RU",
  description:
    "Install PaperScript on Paper 1.18–1.21 or legacy 1.12.2/1.16.5 servers and write your first Minecraft plugin in TypeScript.",
};

const PLUGIN_JSON = `{
  "name": "hello",
  "version": "0.1.0",
  "main": "dist/index.js",
  "apiVersion": "1",
  "authors": ["you"],
  "target": "es2022"
}`;

const INIT = `npm i -D @paperscript/sdk
npx paperscript init my-plugin
cd my-plugin
npm install
npm run build   # -> dist/index.js`;

const HELLO = `ps.onEnable(() => {
  ps.logger.info("Hello from TypeScript!");
  ps.commands.register("hello", (ctx) => {
    ctx.sender.sendMessage("<green>Hello, " + ctx.sender.name + "!</green>");
  });
  ps.events.onPlayerJoin((e) =>
    e.player.sendMessage("<gold>Welcome to the server!</gold>")
  );
});`;

const LAYOUT = `plugins/
  PaperScript/
    scripts/
      my-plugin/
        plugin.json
        dist/
          index.js`;

const LAYOUT_LEGACY = `plugins/
  PaperScriptLegacy/
    scripts/
      my-plugin/
        plugin.json      # "target": "es2015"
        dist/
          index.js`;

export default function DocsStartPage() {
  return (
    <DocsShell active="start">
      <article>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Getting started</h1>
        <p className="text-slate-400 leading-relaxed mb-10">
          PaperScript is a Paper plugin that embeds a JavaScript engine and loads your
          plugins from a folder. You write TypeScript, bundle it to plain JS, drop it
          into the scripts directory, and hot-reload — no Java code required.
        </p>

        <h2 id="requirements" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          Requirements
        </h2>
        <p className="text-slate-400 leading-relaxed mb-5">
          PaperScript ships as two separate jars. Pick the one that matches your server.
        </p>
        <div className="overflow-x-auto my-5">
          <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#0f111a] text-slate-300">
                <th className="text-left font-semibold px-4 py-3 border-b border-slate-800">Line</th>
                <th className="text-left font-semibold px-4 py-3 border-b border-slate-800">Minecraft</th>
                <th className="text-left font-semibold px-4 py-3 border-b border-slate-800">Java</th>
                <th className="text-left font-semibold px-4 py-3 border-b border-slate-800">Engine</th>
                <th className="text-left font-semibold px-4 py-3 border-b border-slate-800">Jar</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr className="border-b border-slate-800/60">
                <td className="px-4 py-3 text-blue-300 font-medium">Modern</td>
                <td className="px-4 py-3">Paper 1.18 – 1.21</td>
                <td className="px-4 py-3">17 / 21</td>
                <td className="px-4 py-3">GraalJS</td>
                <td className="px-4 py-3 font-mono text-xs">paperscript-host-*.jar</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-200 font-medium">Legacy</td>
                <td className="px-4 py-3">Paper 1.12.2 / 1.16.5</td>
                <td className="px-4 py-3">8 / 11</td>
                <td className="px-4 py-3">Nashorn</td>
                <td className="px-4 py-3 font-mono text-xs">paperscript-legacy-*.jar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          Both lines expose the same <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ps.*</code> API.
          The legacy line exists because GraalJS requires Java 17+, while 1.12.2/1.16.5
          servers run on Java 8/11 where Nashorn is bundled.
        </p>

        <h2 id="install" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          1. Install the host
        </h2>
        <ol className="space-y-3 text-slate-400 leading-relaxed list-none">
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-300 text-xs font-semibold flex items-center justify-center">1</span>
            <span>
              Download <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">paperscript-host-0.2.0.jar</code> (or{" "}
              <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">paperscript-legacy-0.2.0.jar</code>) from{" "}
              <a href="https://github.com/DARKPIX404/PaperScript/releases" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                GitHub Releases
              </a>{" "}
              and drop it into your server&apos;s <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">plugins/</code> folder.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-300 text-xs font-semibold flex items-center justify-center">2</span>
            <span>Start the server once. PaperScript creates its scripts folder automatically.</span>
          </li>
          <li className="flex gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-blue-950/60 border border-blue-900/50 text-blue-300 text-xs font-semibold flex items-center justify-center">3</span>
            <span>
              Verify in console or in-game: <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps list</code> (permission{" "}
              <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">paperscript.admin</code>, default: op).
            </span>
          </li>
        </ol>

        <h2 id="sdk" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          2. Set up the SDK
        </h2>
        <p className="text-slate-400 leading-relaxed">
          The SDK gives you typed autocompletion for the whole <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ps</code> API
          and a CLI that scaffolds and bundles plugins:
        </p>
        <CodeBlock code={INIT} lang="bash" />
        <p className="text-slate-400 leading-relaxed">
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">paperscript init</code> creates a project with
          TypeScript config and the <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">@paperscript/sdk</code> types wired in
          (<code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">types: [&quot;@paperscript/sdk&quot;]</code>).{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">npm run dev</code> watches and rebuilds on save.
        </p>

        <h2 id="plugin-json" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          3. plugin.json
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Every script is a folder with a manifest. The <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">target</code> field
          tells the bundler which JS dialect to emit — use{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">es2015</code> for legacy (Nashorn) hosts:
        </p>
        <CodeBlock code={PLUGIN_JSON} filename="plugin.json" />

        <h2 id="first-script" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          4. Your first script
        </h2>
        <CodeBlock code={HELLO} filename="src/index.ts" />
        <p className="text-slate-400 leading-relaxed">
          On the modern line every message string is parsed as{" "}
          <strong className="text-slate-200">MiniMessage</strong> (<code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&lt;green&gt;</code>,{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&lt;gradient:#a:#b&gt;</code>, hover/click events).
          On legacy hosts, use <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">&amp;</code>-color codes instead.
        </p>

        <h2 id="deploy" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          5. Deploy &amp; reload
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Copy the plugin folder (manifest + bundled output) into the scripts directory:
        </p>
        <CodeBlock code={LAYOUT} filename="modern (paperscript-host)" />
        <CodeBlock code={LAYOUT_LEGACY} filename="legacy (paperscript-legacy)" />
        <p className="text-slate-400 leading-relaxed">
          Then manage scripts in-game or from console:
        </p>
        <ul className="space-y-2 my-5 text-slate-400 text-sm">
          <li><code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps list</code> — show loaded scripts and their status</li>
          <li><code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps reload &lt;name&gt;</code> — hot-reload a script without restarting the server</li>
          <li><code className="text-blue-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps info</code> — engine and host version info</li>
        </ul>

        <h2 id="sandbox" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          Sandbox
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Scripts run in a locked-down context: no <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">Java.type</code>,
          no host IO, no native access, no threads. Only the curated{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ps</code> facade is exposed, guarded by a statement
          limit (modern line). The host touches script contexts only from the server main thread,
          so scripts are safe by construction.
        </p>
        <p className="text-slate-400 leading-relaxed mt-4">
          Errors thrown by a script are caught and logged with the script name — a broken
          script never takes the server down. Fix the file and{" "}
          <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">/ps reload</code>.
        </p>

        <h2 id="next" className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-24">
          What&apos;s next
        </h2>
        <ul className="space-y-2 text-slate-400">
          <li>
            →{" "}
            <a href="/paperscript/docs/api" className="text-blue-400 hover:text-blue-300">
              API reference
            </a>{" "}
            — every <code className="text-slate-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">ps.*</code> member with signatures.
          </li>
          <li>
            →{" "}
            <a href="/paperscript/docs/examples" className="text-blue-400 hover:text-blue-300">
              Examples
            </a>{" "}
            — hello world and a full Essentials-style command suite.
          </li>
        </ul>
      </article>
    </DocsShell>
  );
}
