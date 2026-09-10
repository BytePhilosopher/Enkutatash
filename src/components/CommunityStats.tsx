import { COMMUNITY_STATS, PERSONALITIES } from "@/data/personalities";
import { PersonalityKey } from "@/types/quiz";

interface CommunityStatsProps {
  highlight: PersonalityKey;
}

export default function CommunityStats({ highlight }: CommunityStatsProps) {
  return (
    <section className="w-full max-w-md" aria-label="Community results">
      <h3 className="mb-1 text-center text-lg font-bold text-[color:var(--enku-ink)]">
        You are not alone 😂
      </h3>
      <p className="mb-5 text-center text-sm text-black/50 dark:text-white/50">
        Here&apos;s how everyone else answered (so far).
      </p>

      <ul className="flex flex-col gap-3">
        {COMMUNITY_STATS.map((stat) => {
          const p = PERSONALITIES[stat.key];
          const isYou = stat.key === highlight;
          return (
            <li key={stat.key}>
              <div className="mb-1 flex items-center justify-between text-sm font-semibold text-[color:var(--enku-ink)]">
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">{p.emoji}</span>
                  {p.name.replace("The ", "")}
                  {isYou && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] font-bold text-white">
                      YOU
                    </span>
                  )}
                </span>
                <span className="text-black/60 dark:text-white/60">{stat.percent}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{ width: `${stat.percent}%`, backgroundColor: p.accent }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
