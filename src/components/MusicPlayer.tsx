"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "EmJx17EMz48";

/**
 * Background music, on every page load. Browsers block autoplay-with-sound
 * outright, so the only honest way to satisfy "always plays" is: start
 * autoplaying muted immediately (allowed everywhere), then let one tap
 * unmute it — that tap is what turns the sound on.
 *
 * Loaded via next/dynamic(..., { ssr: false }) in TopNav, so this never
 * renders during SSR — safe to read `window` directly at render time.
 */
export default function MusicPlayer() {
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function postCommand(func: string) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "https://www.youtube.com"
    );
  }

  function toggle() {
    if (muted) {
      postCommand("unMute");
      postCommand("playVideo");
      setMuted(false);
    } else {
      postCommand("mute");
      setMuted(true);
    }
  }

  const origin = window.location.origin;
  const src =
    `https://www.youtube.com/embed/${VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
    `&controls=0&modestbranding=1&playsinline=1&enablejsapi=1` +
    `&origin=${encodeURIComponent(origin)}`;

  return (
    <>
      <iframe
        ref={iframeRef}
        src={src}
        title="Enkutatash background music"
        aria-hidden="true"
        tabIndex={-1}
        allow="autoplay; encrypted-media"
        style={{
          position: "fixed",
          width: 1,
          height: 1,
          bottom: 0,
          right: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Turn music on" : "Turn music off"}
        aria-pressed={!muted}
        title={muted ? "Turn music on" : "Turn music off"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[color:var(--enku-ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 active:scale-95 dark:border-white/10 dark:bg-white/10"
      >
        {muted ? (
          <VolumeX className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
