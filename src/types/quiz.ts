export type PersonalityKey =
  | "procrastinator"
  | "academic"
  | "millionaire"
  | "leaving"
  | "survivor";

export interface CardStat {
  label: string;
  value: string;
}

export interface Personality {
  key: PersonalityKey;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  predictions: string[];
  cardStats: CardStat[];
  /** Tailwind gradient classes used to theme the result + card for this personality */
  gradient: string;
  /** Solid accent color (hex) used for small UI bits, chart bars, etc. */
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
