import { useState } from 'react';
import { Mode } from '../App';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { BookOpen, BrainCircuit, ChevronRight, Clock, X, History as HistoryIcon } from 'lucide-react';

interface MenuProps {
  onSelect: (mode: Mode, duration?: number) => void;
}

export default function Menu({ onSelect }: MenuProps) {
  const [showConfig, setShowConfig] = useState(false);
  const [minutes, setMinutes] = useState(60);

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {showConfig && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
                onClick={() => setShowConfig(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
                <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Quiz Timer</h2>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                Set a time limit for your practice quiz. The quiz contains 60 questions.
            </p>

            <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Time Limit (minutes)</label>
                <div className="flex items-center gap-4">
                    <input 
                        type="range" 
                        min="5" 
                        max="180" 
                        step="5"
                        value={minutes} 
                        onChange={(e) => setMinutes(Number(e.target.value))}
                        className="flex-1 accent-indigo-600"
                    />
                    <div className="w-16 h-10 border border-slate-200 rounded-lg flex items-center justify-center font-bold text-indigo-700 bg-indigo-50 shadow-inner">
                        {minutes}
                    </div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                    <span>5m</span>
                    <span>180m</span>
                </div>
            </div>

            <Button className="w-full py-3 text-lg" onClick={() => onSelect('quiz', minutes)}>
                Start Quiz
            </Button>
          </div>
        </div>
      )}

      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl mb-4 shadow-sm border border-blue-100">
          <BrainCircuit className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">NetSec-Pro Exam Prep</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Master your Palo Alto Networks Certified Network Security Professional exam with our interactive study tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Study Guide Option */}
        <Card 
          className="group cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden" 
          onClick={() => onSelect('study-guide')}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <div className="p-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-700 transition-colors">Study Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Review all questions, correct answers, and detailed explanations in a structured, easily searchable format.
            </p>
            <div className="flex items-center text-indigo-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
              Open Study Guide <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </div>
        </Card>

        {/* Quiz Option */}
        <Card 
          className="group cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden" 
          onClick={() => setShowConfig(true)}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <div className="p-8">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">Practice Quiz</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Test your knowledge with multiple-choice questions. Get instant feedback, use hints, and track your score.
            </p>
            <div className="flex items-center text-teal-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
              Take the Quiz <ChevronRight className="w-5 h-5 ml-1" />
            </div>
          </div>
        </Card>

        {/* History Option */}
        <Card 
          className="md:col-span-2 group cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden" 
          onClick={() => onSelect('history')}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <div className="p-8 md:flex md:items-center md:gap-8">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 md:mb-0 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <HistoryIcon className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">Quiz History</h2>
              <p className="text-slate-500 leading-relaxed md:pr-12">
                Review your past quiz performances, track your accuracy over time, and see how much you've improved.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex items-center text-amber-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
              View History <ChevronRight className="w-5 h-5 ml-1 shrink-0" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
