"use client";

import { useState } from "react";
import { QuizOption, QuizQuestion } from "@/types/quiz";

interface QuestionCardProps {
  question: QuizQuestion;
  selectedOptionId?: string;
  onAnswer: (option: QuizOption) => void;
}

const ADVANCE_DELAY_MS = 750;

// Note: Quiz.tsx mounts this component with `key={question.id}`, so it fully
// remounts (and this local state resets cleanly) whenever the question changes —
// no effect-based sync needed.
export default function QuestionCard({
  question,
  selectedOptionId,
  onAnswer,
}: QuestionCardProps) {
  const [pendingId, setPendingId] = useState<string | undefined>(selectedOptionId);
  const [eggFor, setEggFor] = useState<string | null>(null);

  function handlePick(option: QuizOption) {
    if (pendingId) return; // already advancing, ignore extra taps
    setPendingId(option.id);
    if (option.easterEgg) setEggFor(option.id);

    window.setTimeout(() => {
      onAnswer(option);
    }, ADVANCE_DELAY_MS);
  }

  return (
    <div className="w-full">
      <h2 className="mb-6 text-balance text-xl font-bold leading-snug text-[color:var(--enku-ink)] sm:text-2xl">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = pendingId === option.id;
          return (
            <div key={option.id} className="flex flex-col">
              <button
                type="button"
                aria-pressed={isSelected}
                disabled={!!pendingId && !isSelected}
                onClick={() => handlePick(option)}
                className={`min-h-[3.25rem] w-full rounded-2xl border-2 px-5 py-3.5 text-left text-base font-medium leading-snug transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:opacity-40 ${
                  isSelected
                    ? "scale-[1.02] border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md dark:bg-emerald-500/15 dark:text-emerald-50"
                    : "border-black/10 bg-white/80 text-[color:var(--enku-ink)] hover:border-black/20 hover:bg-white active:scale-[0.99] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                }`}
              >
                {option.text}
              </button>
              {eggFor === option.id && option.easterEgg && (
                <p
                  role="status"
                  className="mt-1.5 animate-toast-in px-2 text-sm font-medium italic text-amber-700 dark:text-amber-300"
                >
                  {option.easterEgg}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
