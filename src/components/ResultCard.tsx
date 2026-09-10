import { forwardRef } from "react";
import { Flower2 } from "lucide-react";
import EthiopianFlagIcon from "@/components/EthiopianFlagIcon";
import { Personality } from "@/types/quiz";

interface ResultCardProps {
  personality: Personality;
}

export const CARD_WIDTH = 1080;
export const CARD_HEIGHT = 1350;

const GOLD = "#F5B700";
const GOLD_DARK = "#B8850A";
const INK = "#26140a";

/**
 * The fixed 1080x1350 shareable card. Always rendered at its native size —
 * any on-screen scaling is applied by a *wrapper* (see Result.tsx), never on
 * this node itself, so html-to-image always captures full, crisp resolution.
 *
 * Solid Ethiopian New Year gold theme throughout — deliberately no gradients.
 */
const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(function ResultCard(
  { personality },
  ref
) {
  const Icon = personality.icon;

  return (
    <div
      ref={ref}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-baloo), sans-serif",
        color: INK,
        background: GOLD,
      }}
    >
      {/* decorative daisies + a solid frame border for a "print" feel */}
      <CornerDaisies />
      <div
        style={{
          position: "absolute",
          inset: 24,
          border: `4px solid ${GOLD_DARK}`,
          borderRadius: 28,
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "72px 64px 56px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          <Flower2 size={40} color={INK} strokeWidth={2} />
          NEW YEAR, NEW ME… AGAIN?
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 30,
            fontWeight: 600,
            color: "#3f2410",
            opacity: 0.75,
          }}
        >
          2019 E.C.
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.55)",
            border: `6px solid ${GOLD_DARK}`,
          }}
        >
          <Icon size={120} color={INK} strokeWidth={1.5} />
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: 880,
          }}
        >
          {personality.name}
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            fontWeight: 500,
            color: "#3f2410",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          {personality.tagline}
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
            maxWidth: 720,
          }}
        >
          {personality.cardStats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.55)",
                borderRadius: 20,
                padding: "18px 32px",
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              <span>{stat.value}</span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontWeight: 600,
                  fontSize: 28,
                }}
              >
                {stat.label}
                {stat.isFlag && <EthiopianFlagIcon size={30} />}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 36,
            fontWeight: 700,
            fontStyle: "italic",
          }}
        >
          “This is literally me.”
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            fontWeight: 700,
            color: "#3f2410",
            opacity: 0.8,
          }}
        >
          #NewYearDev
        </div>
      </div>
    </div>
  );
});

export default ResultCard;

function Petal({ style }: { style?: React.CSSProperties }) {
  return (
    <svg width={220} height={220} viewBox="0 0 40 40" style={style}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="9"
          rx="5"
          ry="9"
          fill={GOLD_DARK}
          opacity={0.25}
          transform={`rotate(${i * 45} 20 20)`}
        />
      ))}
    </svg>
  );
}

function CornerDaisies() {
  return (
    <>
      <Petal style={{ position: "absolute", top: -60, left: -60 }} />
      <Petal style={{ position: "absolute", bottom: -70, right: -70 }} />
    </>
  );
}
