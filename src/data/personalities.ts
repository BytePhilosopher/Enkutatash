import {
  BedDouble,
  BookOpen,
  Wallet,
  Plane,
  Frown,
  Sparkles,
  XCircle,
  AlarmClock,
  CalendarClock,
  UtensilsCrossed,
  Sunrise,
  GraduationCap,
  Hourglass,
  Briefcase,
  TrendingDown,
  PiggyBank,
  RefreshCw,
  FileText,
  Dumbbell,
  Sprout,
} from "lucide-react";
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
    icon: BedDouble,
    name: "The Professional Procrastinator",
    tagline: "Master of “tomorrow, I promise.”",
    description:
      "You've got the vision, the spreadsheet template, and the perfect playlist for it. What you don't have is a start date. Every Enkutatash you promise this is the year — and every year, “this year” quietly becomes “next Enkutatash.” Respect the consistency, honestly.",
    predictions: [
      { icon: Sparkles, text: "You will start 4 new things." },
      { icon: XCircle, text: "You will finish 1." },
      { icon: AlarmClock, text: "You'll set 3 alarms and snooze all of them." },
      { icon: CalendarClock, text: "You will postpone it until Monday." },
      { icon: UtensilsCrossed, text: "You will still spend money on food." },
    ],
    cardStats: [
      { label: "Procrastination", value: "91%" },
      { label: "“I'll start tomorrow”", value: "87%" },
      { label: "Ethiopian", value: "100%", isFlag: true },
    ],
    accent: "#f59e0b",
  },
  academic: {
    key: "academic",
    icon: BookOpen,
    name: "The Academic Weapon",
    tagline: "GPA on lock. Sleep schedule, less so.",
    description:
      "You made the spreadsheet before Enkutatash even started. Color-coded, deadlines attached, back-up plan included. You will absolutely wake up at 5am on January 1st (well — Meskerem 1st) to prove a point. We're proud of you. Please also sleep.",
    predictions: [
      { icon: BookOpen, text: "You will read 6 books and finish all of them." },
      { icon: Sunrise, text: "You will wake up at 5am. On purpose." },
      { icon: GraduationCap, text: "You will start a new course before Tikimt ends." },
      { icon: Hourglass, text: "You will still procrastinate on ONE thing (we all have one)." },
      { icon: UtensilsCrossed, text: "You will still spend money on food." },
    ],
    cardStats: [
      { label: "Discipline", value: "95%" },
      { label: "Caffeine", value: "80%" },
      { label: "Ethiopian", value: "100%", isFlag: true },
    ],
    accent: "#10b981",
  },
  millionaire: {
    key: "millionaire",
    icon: Wallet,
    name: "The Future Millionaire",
    tagline: "The vision is clear. The bank statement, less so.",
    description:
      "You've already picked out the car. The business plan lives in your Notes app next to 47 other business plans. Somewhere between “I need to save money” and habesha food being undefeated, the empire will have to wait one more month. It's coming, though. You can feel it.",
    predictions: [
      { icon: Briefcase, text: "You will start a side hustle." },
      { icon: TrendingDown, text: "You will quietly abandon said side hustle by Hidar." },
      { icon: PiggyBank, text: "You will say “I need to save money.”" },
      { icon: UtensilsCrossed, text: "You will still spend money on food." },
    ],
    cardStats: [
      { label: "Ambition", value: "89%" },
      { label: "“Trust the process”", value: "72%" },
      { label: "Ethiopian", value: "100%", isFlag: true },
    ],
    accent: "#eab308",
  },
  leaving: {
    key: "leaving",
    icon: Plane,
    name: "The One Who's Leaving",
    tagline: "Bags packed. Visa pending. Vibes: elsewhere.",
    description:
      "You didn't come here to set resolutions, you came here to check the visa portal for the 41st time. Your group chat has seen 3 screenshots of embassy appointment pages this month alone. Wherever you end up, please still come back for Enkutatash.",
    predictions: [
      { icon: RefreshCw, text: "You will refresh the visa portal at least 40 times." },
      { icon: FileText, text: "You will restart “the process” (again)." },
      { icon: PiggyBank, text: "You will say “I need to save money” — for the ticket." },
      { icon: UtensilsCrossed, text: "You will still spend money on food (habesha food hits different)." },
    ],
    cardStats: [
      { label: "Manifesting abroad", value: "93%" },
      { label: "Group chat screenshots", value: "85%" },
      { label: "Ethiopian", value: "100%", isFlag: true },
    ],
    accent: "#0ea5e9",
  },
  survivor: {
    key: "survivor",
    icon: Frown,
    name: "The Survivor",
    tagline: "Not thriving. Just here. And that's valid.",
    description:
      "No 47-tab spreadsheet, no visa portal, no five-year plan. Just you, making it from one Enkutatash to the next, one day at a time. Honestly? Bold strategy. Lowest expectations, highest chance of a pleasant surprise.",
    predictions: [
      { icon: Dumbbell, text: "You will start exercising. (Narrator: they did not.)" },
      { icon: Sprout, text: "You will finish 1 out of 10 goals and call it growth." },
      { icon: Sparkles, text: "You will say “this is my year” unironically." },
      { icon: UtensilsCrossed, text: "You will still spend money on food." },
    ],
    cardStats: [
      { label: "Just vibing", value: "100%" },
      { label: "Emotional damage", value: "76%" },
      { label: "Ethiopian", value: "100%", isFlag: true },
    ],
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
