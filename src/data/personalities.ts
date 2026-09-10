import { CommunityStat, Personality, PersonalityKey } from "@/types/quiz";

/**
 * Tie-break order when two+ personalities are scored equally.
 * Also doubles as the "how common is this" ordering shown in the community section.
 */
export const PERSONALITY_PRIORITY: PersonalityKey[] = [
  "procrastinator",
  "academic",
  "millionaire",
  "leaving",
  "survivor",
];

export const PERSONALITIES: Record<PersonalityKey, Personality> = {
  procrastinator: {
    key: "procrastinator",
    emoji: "🛌",
    name: "The Professional Procrastinator",
    tagline: "Master of “tomorrow, I promise.”",
    description:
      "You've got the vision, the spreadsheet template, and the perfect playlist for it. What you don't have is a start date. Every Enkutatash you promise this is the year — and every year, “this year” quietly becomes “next Enkutatash.” Respect the consistency, honestly.",
    predictions: [
      "📚 You will start 4 new things.",
      "❌ You will finish 1.",
      "⏰ You'll set 3 alarms and snooze all of them.",
      "📅 You will postpone it until Monday.",
      "🍗 You will still spend money on food.",
    ],
    cardStats: [
      { label: "Procrastination", value: "91%" },
      { label: "“I'll start tomorrow”", value: "87%" },
      { label: "Ethiopian 🇪🇹", value: "100%" },
    ],
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    accent: "#f59e0b",
  },
  academic: {
    key: "academic",
    emoji: "📚",
    name: "The Academic Weapon",
    tagline: "GPA on lock. Sleep schedule, less so.",
    description:
      "You made the spreadsheet before Enkutatash even started. Color-coded, deadlines attached, back-up plan included. You will absolutely wake up at 5am on January 1st (well — Meskerem 1st) to prove a point. We're proud of you. Please also sleep.",
    predictions: [
      "📖 You will read 6 books and finish all of them.",
      "⏰ You will wake up at 5am. On purpose.",
      "💻 You will start a new course before Tikimt ends.",
      "😅 You will still procrastinate on ONE thing (we all have one).",
      "🍗 You will still spend money on food.",
    ],
    cardStats: [
      { label: "Discipline", value: "95%" },
      { label: "Caffeine", value: "80%" },
      { label: "Ethiopian 🇪🇹", value: "100%" },
    ],
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    accent: "#10b981",
  },
  millionaire: {
    key: "millionaire",
    emoji: "💰",
    name: "The Future Millionaire",
    tagline: "The vision is clear. The bank statement, less so.",
    description:
      "You've already picked out the car. The business plan lives in your Notes app next to 47 other business plans. Somewhere between “I need to save money” and habesha food being undefeated, the empire will have to wait one more month. It's coming, though. You can feel it.",
    predictions: [
      "💼 You will start a side hustle.",
      "📉 You will quietly abandon said side hustle by Hidar.",
      "💰 You will say “I need to save money.”",
      "🍕 You will still spend money on food.",
    ],
    cardStats: [
      { label: "Ambition", value: "89%" },
      { label: "“Trust the process”", value: "72%" },
      { label: "Ethiopian 🇪🇹", value: "100%" },
    ],
    gradient: "from-yellow-300 via-amber-400 to-orange-500",
    accent: "#eab308",
  },
  leaving: {
    key: "leaving",
    emoji: "✈️",
    name: "The One Who's Leaving",
    tagline: "Bags packed. Visa pending. Vibes: elsewhere.",
    description:
      "You didn't come here to set resolutions, you came here to check the visa portal for the 41st time. Your group chat has seen 3 screenshots of embassy appointment pages this month alone. Wherever you end up, please still come back for Enkutatash.",
    predictions: [
      "🛂 You will refresh the visa portal at least 40 times.",
      "📄 You will restart “the process” (again).",
      "💸 You will say “I need to save money” — for the ticket.",
      "🍗 You will still spend money on food (habesha food hits different).",
    ],
    cardStats: [
      { label: "Manifesting abroad", value: "93%" },
      { label: "Group chat screenshots", value: "85%" },
      { label: "Ethiopian 🇪🇹", value: "100%" },
    ],
    gradient: "from-sky-400 via-cyan-400 to-blue-500",
    accent: "#0ea5e9",
  },
  survivor: {
    key: "survivor",
    emoji: "😭",
    name: "The Survivor",
    tagline: "Not thriving. Just here. And that's valid.",
    description:
      "No 47-tab spreadsheet, no visa portal, no five-year plan. Just you, making it from one Enkutatash to the next, one day at a time. Honestly? Bold strategy. Lowest expectations, highest chance of a pleasant surprise.",
    predictions: [
      "🏋️ You will start exercising. (Narrator: they did not.)",
      "😭 You will finish 1 out of 10 goals and call it growth.",
      "🫠 You will say “this is my year” unironically.",
      "🍗 You will still spend money on food.",
    ],
    cardStats: [
      { label: "Just vibing", value: "100%" },
      { label: "Emotional damage", value: "76%" },
      { label: "Ethiopian 🇪🇹", value: "100%" },
    ],
    gradient: "from-fuchsia-400 via-pink-400 to-rose-400",
    accent: "#ec4899",
  },
};

/** Mock community distribution — local data only, no backend. Always sums to 100. */
export const COMMUNITY_STATS: CommunityStat[] = [
  { key: "procrastinator", percent: 31 },
  { key: "academic", percent: 21 },
  { key: "millionaire", percent: 18 },
  { key: "leaving", percent: 15 },
  { key: "survivor", percent: 15 },
];
