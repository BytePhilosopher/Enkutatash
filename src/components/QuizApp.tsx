"use client";

import { useState } from "react";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import AnalysisScreen from "@/components/AnalysisScreen";
import Result from "@/components/Result";
import FlowerBackground from "@/components/FlowerBackground";
import { scoreAnswers } from "@/lib/scoring";
import { Answer, PersonalityKey } from "@/types/quiz";

type Stage = "landing" | "quiz" | "analysis" | "result";

export default function QuizApp() {
  const [stage, setStage] = useState<Stage>("landing");
  const [personality, setPersonality] = useState<PersonalityKey | null>(null);

  function handleQuizComplete(answers: Answer[]) {
    setPersonality(scoreAnswers(answers));
    setStage("analysis");
  }

  function handleRestart() {
    setPersonality(null);
    setStage("landing");
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <FlowerBackground />

      {stage === "landing" && <Landing onStart={() => setStage("quiz")} />}

      {stage === "quiz" && (
        <Quiz onComplete={handleQuizComplete} onExit={() => setStage("landing")} />
      )}

      {stage === "analysis" && (
        <AnalysisScreen onDone={() => setStage("result")} />
      )}

      {stage === "result" && personality && (
        <Result personality={personality} onRestart={handleRestart} />
      )}
    </div>
  );
}
