import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { questions } from '../data';
import { Question, QuizHistoryEntry } from '../types';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { cn } from '../utils';
import { AlertCircle, CheckCircle2, Lightbulb, XCircle, RotateCcw, ChevronRight, Clock } from 'lucide-react';

export default function Quiz({ durationMinutes }: { durationMinutes: number }) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [eliminated, setEliminated] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(durationMinutes * 60);
  const [isSaved, setIsSaved] = useState(false);

  const latestStateRef = useRef({
    score: 0,
    currentIndex: 0,
    timeRemaining: durationMinutes * 60,
    totalQuestions: 0,
    selectedCount: 0,
    isSubmitted: false,
    isSaved: false,
  });
  const isMountedRef = useRef(true);
  
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const isFinished = shuffledQuestions.length > 0 && (currentIndex >= shuffledQuestions.length || timeRemaining === 0);

  useEffect(() => {
    latestStateRef.current = {
      score,
      currentIndex,
      timeRemaining,
      totalQuestions: shuffledQuestions.length,
      selectedCount: selected.length,
      isSubmitted,
      isSaved,
    };
  }, [score, currentIndex, timeRemaining, shuffledQuestions.length, selected.length, isSubmitted, isSaved]);

  const appendHistoryEntry = useCallback((entry: QuizHistoryEntry) => {
    const existing = localStorage.getItem('quizHistory');
    let history: QuizHistoryEntry[] = [];
    try {
      history = existing ? JSON.parse(existing) : [];
      if (!Array.isArray(history)) history = [];
    } catch {
      history = [];
    }
    history.unshift(entry);
    localStorage.setItem('quizHistory', JSON.stringify(history));
  }, []);

  const saveHistory = useCallback((completed: boolean) => {
    const latest = latestStateRef.current;
    if (latest.isSaved || latest.totalQuestions === 0) return;

    const answeredQuestions = Math.min(
      latest.currentIndex + (latest.isSubmitted ? 1 : 0),
      latest.totalQuestions
    );
    const hasProgress =
      answeredQuestions > 0 ||
      latest.selectedCount > 0 ||
      latest.score > 0 ||
      latest.timeRemaining < durationMinutes * 60;
    if (!completed && !hasProgress) return;

    const entry: QuizHistoryEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      score: latest.score,
      total: latest.totalQuestions,
      timeTakenSeconds: (durationMinutes * 60) - latest.timeRemaining,
      answeredQuestions,
      completed,
    };

    appendHistoryEntry(entry);
    latestStateRef.current.isSaved = true;
    if (isMountedRef.current) {
      setIsSaved(true);
    }
  }, [appendHistoryEntry, durationMinutes]);

  useEffect(() => {
    let timer: number | undefined;
    if (shuffledQuestions.length > 0 && !isFinished && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [shuffledQuestions.length, isFinished, timeRemaining > 0]);

  useEffect(() => {
    if (isFinished && !isSaved) {
      saveHistory(true);
    }
  }, [isFinished, isSaved, saveHistory]);

  useEffect(() => {
    return () => {
      if (!latestStateRef.current.isSaved) {
        saveHistory(false);
      }
    };
  }, [saveHistory]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (shuffledQuestions.length === 0) return null;

  if (currentIndex >= shuffledQuestions.length || timeRemaining === 0) {
    return (
      <div className="max-w-xl mx-auto text-center mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-4xl font-extrabold text-slate-800 mb-6">
                {timeRemaining === 0 ? "Time's Up!" : "Quiz Complete!"}
            </h2>
            <div className="text-6xl font-black text-indigo-600 mb-2">{score}</div>
            <p className="text-xl text-slate-500 mb-6 font-medium">out of {shuffledQuestions.length} correct</p>
            <div className="flex items-center justify-center gap-2 text-slate-600 mb-10 font-medium">
              <Clock className="w-5 h-5 text-indigo-500" />
              <span>Time taken: {formatTime((durationMinutes * 60) - timeRemaining)}</span>
            </div>
            <Button 
              onClick={() => { 
                const shuffled = [...questions].sort(() => Math.random() - 0.5);
                setShuffledQuestions(shuffled);
                setCurrentIndex(0); 
                setSelected([]);
                setIsSubmitted(false);
                setScore(0);
                setEliminated([]);
                setTimeRemaining(durationMinutes * 60);
                setIsSaved(false);
              }} 
              className="text-lg px-8 py-3 w-full max-w-xs mx-auto"
            >
                <RotateCcw className="w-5 h-5 mr-2" /> Restart Quiz
            </Button>
        </div>
      </div>
    );
  }

  const q = shuffledQuestions[currentIndex];
  // Determine if question requires multiple answers based on correct answers count
  const isMulti = q.answer.length > 1;

  const handleSelect = (key: string) => {
    if (isSubmitted || eliminated.includes(key)) return;
    
    if (isMulti) {
      setSelected(prev => {
        if (prev.includes(key)) {
          return prev.filter(k => k !== key);
        }
        if (prev.length >= q.answer.length) {
          return prev;
        }
        return [...prev, key];
      });
    } else {
      setSelected([key]);
    }
  };

  const handleHint = () => {
    if (isSubmitted) return;
    const incorrectKeys = Object.keys(q.options).filter(k => !q.answer.includes(k) && !eliminated.includes(k) && !selected.includes(k));
    if (incorrectKeys.length > 0) {
      const toEliminate = incorrectKeys[Math.floor(Math.random() * incorrectKeys.length)];
      setEliminated(prev => [...prev, toEliminate]);
    }
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    
    // Exact match logic for multi-select
    const isCorrect = selected.length === q.answer.length && selected.every(s => q.answer.includes(s));
    if (isCorrect) setScore(s => s + 1);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelected([]);
    setEliminated([]);
    setIsSubmitted(false);
    setCurrentIndex(prev => prev + 1);
  };

  const availableHints = Object.keys(q.options).length - q.answer.length - eliminated.length;

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex-1 bg-slate-200 h-2.5 rounded-full overflow-hidden mr-6 shadow-inner">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${(currentIndex / shuffledQuestions.length) * 100}%` }}
          />
        </div>
        <div className="text-sm font-bold text-slate-500 whitespace-nowrap uppercase tracking-wider flex items-center gap-4">
          <span className="flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-md">
            <Clock className="w-4 h-4" />
            <span className={cn(timeRemaining < 300 && "text-red-500")}>{formatTime(timeRemaining)}</span>
          </span>
          <span>Question {currentIndex + 1} / {shuffledQuestions.length}</span>
        </div>
        <div className="ml-6 text-sm font-bold bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full shadow-sm border border-indigo-100">
          Score: {score}
        </div>
      </div>

      <Card className="p-6 md:p-10 mb-6 relative">
        <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed">
          {q.text}
          {isMulti && (
            <span className="ml-3 inline-block align-middle text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
              Choose {q.answer.length}
            </span>
          )}
        </h2>

        <div className="space-y-3">
          {Object.entries(q.options).map(([key, value]) => {
            const isSelected = selected.includes(key);
            const isEliminated = eliminated.includes(key);
            const isCorrectAnswer = q.answer.includes(key);
            
            let stateClass = "border-slate-200 hover:border-indigo-400 bg-white";
            
            if (isSelected) {
                stateClass = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500";
            }
            if (isEliminated) {
                stateClass = "opacity-40 grayscale cursor-not-allowed border-slate-200 bg-slate-50";
            }
            
            if (isSubmitted) {
              if (isCorrectAnswer) {
                  stateClass = "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
              } else if (isSelected && !isCorrectAnswer) {
                  stateClass = "border-red-500 bg-red-50 ring-1 ring-red-500";
              } else {
                  stateClass = "opacity-50 border-slate-200 bg-white";
              }
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={isSubmitted || isEliminated}
                className={cn(
                  "w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-200 flex gap-4 items-start focus:outline-none",
                  stateClass
                )}
              >
                <div className={cn(
                    "shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border font-bold shadow-sm transition-colors mt-0.5",
                    isSelected ? "bg-indigo-600 border-indigo-600 text-white" : "bg-white border-slate-300 text-slate-600",
                    isSubmitted && isCorrectAnswer && "bg-emerald-600 border-emerald-600 text-white",
                    isSubmitted && isSelected && !isCorrectAnswer && "bg-red-600 border-red-600 text-white"
                )}>
                  {key}
                </div>
                <span className={cn(
                    "text-slate-700 leading-relaxed", 
                    isEliminated && "line-through",
                    isSelected && "font-medium"
                )}>
                  {value}
                </span>
                
                {isSubmitted && isCorrectAnswer && <CheckCircle2 className="w-6 h-6 text-emerald-500 ml-auto shrink-0 mt-1" />}
                {isSubmitted && isSelected && !isCorrectAnswer && <XCircle className="w-6 h-6 text-red-500 ml-auto shrink-0 mt-1" />}
              </button>
            );
          })}
        </div>
      </Card>

      {!isSubmitted ? (
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={handleHint} 
            disabled={availableHints === 0} 
            className="flex items-center gap-2"
          >
            <Lightbulb className={cn("w-5 h-5", availableHints > 0 ? "text-amber-500" : "text-slate-400")} /> 
            {availableHints > 0 ? "Hint" : "No hints left"}
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={selected.length === 0} 
            className="px-8 flex items-center gap-2"
          >
            Submit Answer
          </Button>
        </div>
      ) : (
        <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
          <Card className="p-6 md:p-8 bg-slate-800 text-slate-100 mb-6 border-slate-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="flex items-start gap-4 relative z-10">
              <AlertCircle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">Explanation</h3>
                <p className="text-slate-300 leading-relaxed max-w-none text-sm whitespace-pre-wrap">{q.explanation}</p>
              </div>
            </div>
          </Card>
          <div className="flex justify-end">
            <Button onClick={handleNext} className="px-8 flex items-center gap-2 text-lg py-3">
              Next Question <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
