export interface Question {
  id: number;
  text: string;
  options: Record<string, string>;
  answer: string[];
  explanation: string;
}

export interface QuizHistoryEntry {
  id: string;
  date: string;
  score: number;
  total: number;
  timeTakenSeconds: number;
  answeredQuestions: number;
  completed: boolean;
  course?: 'netsec' | 'secops' | 'netsec2';
}
