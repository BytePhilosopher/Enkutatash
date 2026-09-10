"use client";

import { useState } from "react";
import { downloadDataUrl, nodeToPngDataUrl } from "@/lib/cardGenerator";
import { buildShareText, buildTelegramShareUrl, copyToClipboard, getSiteUrl } from "@/lib/share";
import { CARD_HEIGHT, CARD_WIDTH } from "@/components/ResultCard";
import { Personality } from "@/types/quiz";

interface ShareButtonsProps {
  personality: Personality;
  getCardNode: () => HTMLElement | null;
}

export default function ShareButtons({ personality, getCardNode }: ShareButtonsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    const node = getCardNode();
    if (!node || isDownloading) return;

    setError(null);
    setIsDownloading(true);
    try {
      const dataUrl = await nodeToPngDataUrl(node, {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      });
      downloadDataUrl(dataUrl, `enkutatash-${personality.key}.png`);
    } catch {
      setError("Couldn't generate the image — try again?");
    } finally {
      setIsDownloading(false);
    }
  }

  function handleTelegramShare() {
    const url = buildTelegramShareUrl(buildShareText(personality), getSiteUrl());
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function handleCopyLink() {
    const ok = await copyToClipboard(getSiteUrl());
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--enku-ink)] px-6 py-3.5 text-base font-bold text-white shadow-lg transition active:scale-[0.98] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
      >
        {isDownloading ? "Generating..." : "📥 Download My Result"}
      </button>

      <button
        type="button"
        onClick={handleTelegramShare}
        className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-[#229ED9] px-6 py-3.5 text-base font-bold text-white shadow-md transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#229ED9]"
      >
        📤 Share to Telegram
      </button>

      <button
        type="button"
        onClick={handleCopyLink}
        aria-live="polite"
        className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl border-2 border-black/10 bg-white/70 px-6 py-3.5 text-base font-bold text-[color:var(--enku-ink)] transition active:scale-[0.98] dark:border-white/15 dark:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
      >
        {copied ? "✅ Link Copied!" : "🔗 Copy Link"}
      </button>

      {error && (
        <p role="alert" className="text-center text-sm font-medium text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}
