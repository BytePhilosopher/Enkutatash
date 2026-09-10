import type { LucideIcon } from "lucide-react";

export type PersonalityKey =
  | "procrastinator"
  | "academic"
  | "millionaire"
  | "leaving"
  | "survivor";

export interface CardStat {
  label: string;
  value: string;
  /** Show the small Ethiopian flag icon next to this stat */
  isFlag?: boolean;
}

export interface Prediction {
  icon: LucideIcon;
  text: string;
}

export interface Personality {
  key: PersonalityKey;
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  predictions: Prediction[];
  cardStats: CardStat[];
  /** Solid accent color (hex) used for small UI bits, chart bars, etc. Never a gradient. */
  accent: string;
}

export interface QuizOption {
  id: string;
  text: string;
  personality: PersonalityKey;
  /** Optional joke that appears the moment this option is picked */
  easterEgg?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface Answer {
  questionId: string;
  optionId: string;
  personality: PersonalityKey;
}

export interface CommunityStat {
  key: PersonalityKey;
  percent: number;
}
