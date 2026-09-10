"use client";

import { useState } from "react";
import { QUESTIONS } from "@/data/questions";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { Answer, QuizOption } from "@/types/quiz";

interface QuizProps {
  onComplete: (answers: Answer[]) => void;
  onExit: () => void;
}

export default function Quiz({ onComplete, onExit }: QuizProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(Answer | undefined)[]>(
    () => Array(QUESTIONS.length).fill(undefined)
  );

  const question = QUESTIONS[index];
  const isLast = index === QUESTIONS.length - 1;

  function handleAnswer(option: QuizOption) {
    const next = [...answers];
    next[index] = {
      questionId: question.id,
      optionId: option.id,
      personality: option.personality,
    };
    setAnswers(next);

    if (isLast) {
      onComplete(next.filter((a): a is Answer => Boolean(a)));
    } else {
      setIndex((i) => i + 1);
    }
  }

  function handleBack() {
    if (index === 0) {
      onExit();
    } else {
      setIndex((i) => i - 1);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 py-6 sm:py-10">
      <div className="mb-5 flex items-center gap-4">
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back to the previous question"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-lg text-[color:var(--enku-ink)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500 active:scale-95 dark:border-white/10 dark:bg-white/5"
        >
          ←
        </button>
        <div className="flex-1">
          <ProgressBar current={index + 1} total={QUESTIONS.length} />
        </div>
      </div>

      <div key={question.id} className="flex-1 animate-fade-in">
        <QuestionCard
          question={question}
          selectedOptionId={answers[index]?.optionId}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
