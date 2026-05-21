import { useEffect, useState } from 'react';
import { QuizHistoryEntry } from '../types';
import { Card } from './ui/Card';
import { History as HistoryIcon, Clock, CheckCircle2, AlertTriangle, Trash2 } from 'lucide-react';
import { Button } from './ui/Button';

export default function History() {
  const [history, setHistory] = useState<QuizHistoryEntry[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem('quizHistory');
    if (!existing) return;
    try {
      const parsed = JSON.parse(existing);
      setHistory(Array.isArray(parsed) ? parsed : []);
    } catch {
      setHistory([]);
    }
  }, []);

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all history?')) {
      localStorage.removeItem('quizHistory');
      setHistory([]);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getAnsweredCount = (entry: QuizHistoryEntry) => {
    return entry.answeredQuestions ?? entry.total;
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <HistoryIcon className="w-8 h-8 text-indigo-600" />
            Quiz History
          </h2>
          <p className="text-slate-500 text-lg">
            Review your past quiz performances.
          </p>
        </div>
        {history.length > 0 && (
          <Button variant="outline" onClick={handleClear} className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300">
            <Trash2 className="w-4 h-4 mr-2" /> Clear History
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <Card className="p-12 text-center text-slate-500 bg-slate-50/50 border-dashed">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HistoryIcon className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-lg font-medium text-slate-600">No quiz history found.</p>
          <p className="mt-2 text-sm text-slate-500">Take a practice quiz to see your results here.</p>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {history.map((entry) => (
            <Card key={entry.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 ${
                      entry.course === 'secops'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {(entry.course ?? 'netsec') === 'secops' ? 'SecOps-Pro' : 'NetSec-Pro'}
                  </span>
                  <div className="text-sm font-semibold text-slate-500 mb-1">
                    {formatDate(entry.date)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    Time: {formatTime(entry.timeTakenSeconds)}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 font-medium">
                    Answered: {getAnsweredCount(entry)} / {entry.total}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-indigo-600">
                    {entry.score}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    out of {entry.total}
                  </div>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full" 
                  style={{ width: `${(entry.score / entry.total) * 100}%` }}
                />
              </div>
              {entry.completed ?? true ? (
                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  Completed · {Math.round((entry.score / entry.total) * 100)}% Accuracy
                </div>
              ) : (
                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-amber-600">
                  <AlertTriangle className="w-4 h-4" />
                  Ended early · {Math.round((entry.score / entry.total) * 100)}% Accuracy
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
