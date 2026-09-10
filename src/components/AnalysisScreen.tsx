"use client";

import { useEffect, useState } from "react";
import { Flower2 } from "lucide-react";

const MESSAGES = [
  "Analyzing your procrastination levels...",
  "Cross-referencing with 2018's unfinished resolutions...",
  "Calculating how many you'll actually keep...",
  "Consulting the Adey Abeba oracle...",
  "Checking your bank app avoidance score...",
  "Judging you softly, with love...",
  "Almost done. Please don't refresh, we know what you're planning.",
];

const STEP_MS = 650;
const TOTAL_MS = MESSAGES.length * STEP_MS + 400;

interface AnalysisScreenProps {
  onDone: () => void;
}

export default function AnalysisScreen({ onDone }: AnalysisScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((i) => Math.min(i + 1, MESSAGES.length - 1));
    }, STEP_MS);

    const timeout = window.setTimeout(onDone, TOTAL_MS);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-spin-slow rounded-full border-4 border-[color:var(--enku-gold-light)] border-t-[color:var(--enku-gold)]" />
        <Flower2
          className="h-10 w-10 animate-bounce-soft text-[color:var(--enku-gold-dark)]"
          aria-hidden="true"
        />
      </div>

      <h2 className="text-xl font-bold text-[color:var(--enku-ink)] sm:text-2xl">
        Figuring out who you really are...
      </h2>

      <p
        key={messageIndex}
        className="min-h-12 max-w-xs animate-fade-in text-base text-black/60 dark:text-white/60"
      >
        {MESSAGES[messageIndex]}
      </p>

      <div className="h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-[color:var(--enku-gold)] transition-[width] ease-linear"
          style={{
            width: `${((messageIndex + 1) / MESSAGES.length) * 100}%`,
            transitionDuration: `${STEP_MS}ms`,
          }}
        />
      </div>
    </div>
  );
}
