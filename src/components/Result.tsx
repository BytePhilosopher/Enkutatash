"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import ResultCard, { CARD_HEIGHT, CARD_WIDTH } from "@/components/ResultCard";
import ShareButtons from "@/components/ShareButtons";
import CommunityStats from "@/components/CommunityStats";
import { PERSONALITIES } from "@/data/personalities";
import { PersonalityKey } from "@/types/quiz";

interface ResultProps {
  personality: PersonalityKey;
  onRestart: () => void;
}

const PREVIEW_MAX_WIDTH = 340;

export default function Result({ personality, onRestart }: ResultProps) {
  const p = PERSONALITIES[personality];
  const Icon = p.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(PREVIEW_MAX_WIDTH / CARD_WIDTH);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setScale(width / CARD_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-5 py-8 sm:py-12">
      <div className="flex animate-fade-in flex-col items-center text-center">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-[color:var(--enku-gold)]"
          aria-hidden="true"
        >
          <Icon className="h-12 w-12 text-[color:var(--enku-ink)]" strokeWidth={1.75} />
        </div>
        <h1 className="mt-3 text-2xl font-extrabold text-[color:var(--enku-ink)] sm:text-3xl">
          {p.name}
        </h1>
        <p className="mt-2 text-base font-medium text-black/60 dark:text-white/60">
          {p.tagline}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/70 dark:text-white/70">
          {p.description}
        </p>
      </div>

      <div className="w-full rounded-3xl bg-white/60 p-5 dark:bg-white/5">
        <h2 className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-black/50 dark:text-white/50">
          Your 2019 predictions
        </h2>
        <ul className="flex flex-col gap-2.5">
          {p.predictions.map((pred, i) => {
            const PredIcon = pred.icon;
            return (
              <li
                key={pred.text}
                className="flex animate-fade-in-up items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-[color:var(--enku-ink)] opacity-0 shadow-sm dark:bg-white/10"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <PredIcon
                  className="h-5 w-5 shrink-0 text-[color:var(--enku-gold-dark)]"
                  aria-hidden="true"
                />
                <span>{pred.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Shareable card: scaled down for preview, always captured at full 1080x1350 */}
      <div
        ref={wrapperRef}
        className="w-full max-w-[340px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5"
        style={{ aspectRatio: `${CARD_WIDTH} / ${CARD_HEIGHT}` }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}>
          <ResultCard ref={cardRef} personality={p} />
        </div>
      </div>

      <ShareButtons personality={p} getCardNode={() => cardRef.current} />

      <CommunityStats highlight={personality} />

      <button
        type="button"
        onClick={onRestart}
        className="mt-2 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-black/50 underline decoration-dotted underline-offset-4 transition hover:text-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 dark:text-white/50 dark:hover:text-white/80"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Restart the quiz
      </button>
    </div>
  );
}
