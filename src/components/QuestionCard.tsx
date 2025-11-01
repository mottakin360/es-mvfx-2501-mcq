import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Question } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const getButtonVariant = (index: number) => {
    if (!isAnswered) return "outline";
    if (index === question.correctAnswer) return "default";
    if (index === selectedAnswer) return "destructive";
    return "outline";
  };

  const getButtonClasses = (index: number) => {
    const baseClasses = "h-auto min-h-[60px] text-left justify-start p-4 transition-all duration-300";
    
    if (!isAnswered) {
      return `${baseClasses} hover:scale-105 hover:shadow-lg`;
    }
    
    if (index === question.correctAnswer) {
      return `${baseClasses} bg-success hover:bg-success animate-bounce-in`;
    }
    
    if (index === selectedAnswer) {
      return `${baseClasses} bg-destructive hover:bg-destructive animate-bounce-in`;
    }
    
    return `${baseClasses} opacity-50`;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-8 animate-scale-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
            {question.category}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-foreground leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant={getButtonVariant(index)}
            className={getButtonClasses(index)}
            onClick={() => handleAnswerClick(index)}
            disabled={isAnswered}
          >
            <span className="flex items-center gap-3 w-full">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-background/50 font-bold">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-base">{option}</span>
              {isAnswered && index === question.correctAnswer && (
                <Check className="flex-shrink-0 w-6 h-6 text-success-foreground" />
              )}
              {isAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                <X className="flex-shrink-0 w-6 h-6 text-destructive-foreground" />
              )}
            </span>
          </Button>
        ))}
      </div>
    </Card>
  );
};
