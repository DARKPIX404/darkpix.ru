"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  lang?: string;
}

export function CodeBlock({ code, filename, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <div className="rounded-xl border border-slate-800 bg-[#070b16] overflow-hidden max-w-full my-5">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800/70">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-amber-500/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
        {filename && (
          <span className="ml-3 text-xs text-slate-500 font-mono">{filename}</span>
        )}
        {lang && !filename && (
          <span className="ml-3 text-xs text-slate-600 font-mono">{lang}</span>
        )}
        <button
          type="button"
          onClick={copy}
          className="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto max-w-full text-sm leading-relaxed font-mono text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
