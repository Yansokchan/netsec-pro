import { useState } from 'react';
import { questions } from '../data';
import { Card } from './ui/Card';
import { Search, BookOpen, CheckCircle2 } from 'lucide-react';

export default function StudyGuide() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = questions.filter(
    (q) =>
      q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="mb-8 text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          Study Guide
        </h2>
        <p className="text-slate-500 text-lg">
          Review all {questions.length} questions, answers, and detailed explanations.
        </p>
      </div>

      <div className="relative mb-10 max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-4 md:py-3 border-slate-200 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-slate-700 font-medium"
          placeholder="Search questions or explanations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-8">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            No questions found matching your search.
          </div>
        ) : (
          filteredQuestions.map((q, index) => (
            <Card key={q.id} className="p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="flex gap-4 mb-6 relative">
                <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-sm">
                  {q.id}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 leading-snug pt-1">
                  {q.text}
                </h3>
              </div>

              <div className="pl-0 md:pl-14 space-y-4 mb-8">
                {Object.entries(q.options).map(([key, value]) => {
                  const isCorrect = q.answer.includes(key);
                  return (
                    <div
                      key={key}
                      className={`flex items-start gap-4 p-4 rounded-xl border ${
                        isCorrect
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-slate-100 bg-slate-50'
                      }`}
                    >
                      <div
                        className={`shrink-0 w-7 h-7 rounded bg-white flex items-center justify-center text-sm font-bold border ${
                          isCorrect ? 'border-emerald-400 text-emerald-600' : 'border-slate-300 text-slate-500'
                        }`}
                      >
                        {key}
                      </div>
                      <div className={`flex-1 leading-relaxed ${isCorrect ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>
                        {value}
                      </div>
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
                    </div>
                  );
                })}
              </div>

              <div className="pl-0 md:pl-14">
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">
                    Explanation
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
                    {q.explanation}
                  </p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
