"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-sm font-bold gradient-text tracking-wider">
          DARKPIX
        </Link>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Darkpix. All rights reserved
        </p>
      </div>
    </footer>
  );
}
