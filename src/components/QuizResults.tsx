import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, Award, Target } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const QuizResults = ({ score, totalQuestions, onRestart }: QuizResultsProps) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding!", icon: Trophy, color: "text-accent" };
    if (percentage >= 75) return { message: "Excellent Work!", icon: Award, color: "text-success" };
    if (percentage >= 60) return { message: "Good Job!", icon: Target, color: "text-primary" };
    return { message: "Keep Practicing!", icon: Target, color: "text-muted-foreground" };
  };

  const performance = getPerformanceMessage();
  const Icon = performance.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-12 text-center animate-bounce-in shadow-[var(--shadow-card)]">
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 animate-scale-in`}>
            <Icon className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${performance.color}`}>
            {performance.message}
          </h1>
          <p className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            {score}/{totalQuestions}
          </p>
          <p className="text-2xl text-muted-foreground">
            {percentage.toFixed(1)}% Correct
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-success/10 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Correct</p>
            <p className="text-2xl font-bold text-success">{score}</p>
          </div>
          <div className="p-4 bg-destructive/10 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Incorrect</p>
            <p className="text-2xl font-bold text-destructive">{totalQuestions - score}</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Total</p>
            <p className="text-2xl font-bold text-primary">{totalQuestions}</p>
          </div>
        </div>

        <Button
          size="lg"
          onClick={onRestart}
          className="w-full max-w-xs h-14 text-lg font-semibold"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Try Again
        </Button>
      </Card>
    </div>
  );
};
