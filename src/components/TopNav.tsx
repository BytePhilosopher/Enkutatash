"use client";

import dynamic from "next/dynamic";
import { Coffee, Flower2 } from "lucide-react";

// Reads window.location at render time — must never run during SSR.
const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"), { ssr: false });

const COFFEE_URL = "https://www.buymeacoffee.com/bytephilosopher";

export default function TopNav() {
  return (
    <nav
      aria-label="Site"
      className="sticky top-0 z-20 flex items-center justify-between gap-2 border-b border-black/5 bg-[color:var(--enku-bg)]/80 px-4 py-2 backdrop-blur dark:border-white/5"
    >
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black/40 dark:text-white/40">
        <Flower2 className="h-4 w-4" aria-hidden="true" />
        Enkutatash
      </span>

      <div className="flex items-center gap-2">
        <MusicPlayer />
        <a
          href={COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 items-center gap-1.5 rounded-full bg-[color:var(--enku-gold)] px-3 text-xs font-bold text-[color:var(--enku-ink)] transition hover:brightness-95 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <Coffee className="h-4 w-4" aria-hidden="true" />
          Buy me a coffee
        </a>
      </div>
    </nav>
  );
}
