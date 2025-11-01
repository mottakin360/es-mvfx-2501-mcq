import { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { ProgressBar } from "./ProgressBar";
import { QuizResults } from "./QuizResults";
import { quizQuestions } from "@/data/quizData";

export const QuizContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizComplete(false);
  };

  if (isQuizComplete) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Motion Graphics & Presentation Quiz
        </h1>
        <p className="text-center text-muted-foreground text-lg">
          Test your knowledge on Adobe After Effects and Presentation Software
        </p>
      </div>

      <ProgressBar
        current={currentQuestionIndex + 1}
        total={quizQuestions.length}
      />

      <QuestionCard
        question={quizQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
      />
    </div>
  );
};
