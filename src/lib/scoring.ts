import { PERSONALITY_PRIORITY } from "@/data/personalities";
import { Answer, PersonalityKey } from "@/types/quiz";

/**
 * Deliberately simple: one point per answer, most points wins.
 * Ties break using PERSONALITY_PRIORITY so the result is always deterministic.
 */
export function scoreAnswers(answers: Answer[]): PersonalityKey {
  const tally: Record<PersonalityKey, number> = {
    procrastinator: 0,
    academic: 0,
    millionaire: 0,
    leaving: 0,
    survivor: 0,
  };

  for (const answer of answers) {
    tally[answer.personality] += 1;
  }

  let winner: PersonalityKey = PERSONALITY_PRIORITY[0];
  let bestScore = -1;

  for (const key of PERSONALITY_PRIORITY) {
    if (tally[key] > bestScore) {
      bestScore = tally[key];
      winner = key;
    }
  }

  return winner;
}
