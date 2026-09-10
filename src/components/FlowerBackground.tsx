const FLOWERS = [
  { left: "4%", size: 34, duration: 11, delay: 0 },
  { left: "16%", size: 22, duration: 14, delay: 2 },
  { left: "30%", size: 40, duration: 9, delay: 1 },
  { left: "45%", size: 20, duration: 16, delay: 4 },
  { left: "58%", size: 30, duration: 12, delay: 0.5 },
  { left: "70%", size: 24, duration: 15, delay: 3 },
  { left: "83%", size: 36, duration: 10, delay: 2.5 },
  { left: "92%", size: 18, duration: 13, delay: 1.5 },
];

function Daisy({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="9"
          rx="5"
          ry="9"
          fill="#FFC72C"
          opacity={0.85}
          transform={`rotate(${i * 45} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="6" fill="#7A4A1F" />
    </svg>
  );
}

/**
 * Purely decorative, fixed set of floating Adey Abeba (Meskel daisy) flowers.
 * Positions/timings are hard-coded (not random) so server and client markup
 * always match — no hydration mismatch, no JS needed to compute layout.
 */
export default function FlowerBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[color:var(--enku-bg)]" />
      {FLOWERS.map((f, i) => (
        <div
          key={i}
          className="absolute top-full animate-float-up opacity-0"
          style={{
            left: f.left,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <Daisy size={f.size} />
        </div>
      ))}
    </div>
  );
}
