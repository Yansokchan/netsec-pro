import { useState } from 'react';
import { Mode } from '../App';
import { questions as netsecQuestions } from '../data';
import { questions as secopsQuestions } from '../secopsData';
import { questions as netsec2Questions } from '../netsec2Data';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import {
  BookOpen,
  BrainCircuit,
  ChevronRight,
  Clock,
  X,
  History as HistoryIcon,
  ShieldCheck,
} from 'lucide-react';

export type Course = 'netsec' | 'secops' | 'netsec2';

interface HomeProps {
  onSelect: (course: Course, mode: Mode, duration?: number) => void;
}

const COURSES = [
  {
    id: 'netsec' as const,
    name: 'NetSec-Pro',
    description:
      'Palo Alto Networks Certified Network Security Professional exam prep.',
    questions: netsecQuestions.length,
    icon: BookOpen,
    styles: {
      cardBorder: 'border-blue-100',
      topBar: 'bg-gradient-to-r from-blue-400 to-indigo-500',
      iconBg: 'bg-blue-50 text-blue-600',
      studyBtn: 'border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/50',
      studyIcon: 'text-indigo-600',
      quizBtn: 'border-teal-100 hover:border-teal-300 hover:bg-teal-50/50',
      quizIcon: 'text-teal-600',
    }
  },
  {
    id: 'secops' as const,
    name: 'SecOps-Pro',
    description: 'Security Operations exam prep from SecOps-Pro study material.',
    questions: secopsQuestions.length,
    icon: ShieldCheck,
    styles: {
      cardBorder: 'border-green-100',
      topBar: 'bg-gradient-to-r from-green-400 to-emerald-500',
      iconBg: 'bg-green-50 text-green-600',
      studyBtn: 'border-green-100 hover:border-green-300 hover:bg-green-50/50',
      studyIcon: 'text-green-600',
      quizBtn: 'border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/50',
      quizIcon: 'text-emerald-600',
    }
  },
  {
    id: 'netsec2' as const,
    name: 'NetSec-Pro-II',
    description: 'Palo Alto Networks Certified Network Security Professional II exam prep with discussions.',
    questions: netsec2Questions.length,
    icon: BookOpen,
    styles: {
      cardBorder: 'border-indigo-100',
      topBar: 'bg-gradient-to-r from-indigo-400 to-purple-500',
      iconBg: 'bg-indigo-50 text-indigo-600',
      studyBtn: 'border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/50',
      studyIcon: 'text-indigo-600',
      quizBtn: 'border-purple-100 hover:border-purple-300 hover:bg-purple-50/50',
      quizIcon: 'text-purple-600',
    }
  },
];

export default function Home({ onSelect }: HomeProps) {
  const [quizCourse, setQuizCourse] = useState<Course | null>(null);
  const [minutes, setMinutes] = useState(60);

  const openQuizConfig = (course: Course) => {
    setQuizCourse(course);
    const count =
      course === 'netsec'
        ? netsecQuestions.length
        : course === 'secops'
        ? secopsQuestions.length
        : netsec2Questions.length;
    setMinutes(Math.min(180, Math.max(30, Math.ceil(count * 1.5))));
  };

  const courseMeta = quizCourse ? COURSES.find((c) => c.id === quizCourse) : null;
  const quizCount = quizCourse
    ? quizCourse === 'netsec'
      ? netsecQuestions.length
      : quizCourse === 'secops'
      ? secopsQuestions.length
      : netsec2Questions.length
    : 0;

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {quizCourse && courseMeta && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setQuizCourse(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{courseMeta.name} Quiz</h2>
                <p className="text-sm text-slate-500">{quizCount} questions</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Set a time limit for your practice quiz. Questions are shuffled each session.
            </p>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Time limit (minutes)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="300"
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
                <span>300m</span>
              </div>
            </div>

            <Button
              className="w-full py-3 text-lg"
              onClick={() => {
                onSelect(quizCourse, 'quiz', minutes);
                setQuizCourse(null);
              }}
            >
              Start Quiz
            </Button>
          </div>
        </div>
      )}

      <div className="text-center mb-14 space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-2xl mb-4 shadow-sm border border-indigo-100">
          <BrainCircuit className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Palo Alto Exam Prep
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Study guides and practice quizzes for NetSec-Pro and SecOps-Pro certifications.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {COURSES.map((course) => {
          const Icon = course.icon;
          const { cardBorder, topBar, iconBg, studyBtn, studyIcon, quizBtn, quizIcon } = course.styles;
          return (
            <Card
              key={course.id}
              className={`relative overflow-hidden border-2 ${cardBorder}`}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${topBar}`}
              />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${iconBg}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{course.name}</h2>
                    <p className="text-sm font-semibold text-slate-400 mt-1">
                      {course.questions} questions
                    </p>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => onSelect(course.id, 'study-guide')}
                    className={`group flex items-center justify-between p-4 rounded-xl border transition-all text-left ${studyBtn}`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen
                        className={`w-5 h-5 ${studyIcon}`}
                      />
                      <span className="font-semibold text-slate-800">Study Guide</span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform ${studyIcon}`}
                    />
                  </button>

                  <button
                    onClick={() => openQuizConfig(course.id)}
                    className={`group flex items-center justify-between p-4 rounded-xl border transition-all text-left ${quizBtn}`}
                  >
                    <div className="flex items-center gap-3">
                      <BrainCircuit
                        className={`w-5 h-5 ${quizIcon}`}
                      />
                      <span className="font-semibold text-slate-800">Practice Quiz</span>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 opacity-50 group-hover:translate-x-1 transition-transform ${quizIcon}`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card
        className="group cursor-pointer hover:shadow-xl hover:border-amber-200 transition-all duration-300"
        onClick={() => onSelect('netsec', 'history')}
      >
        <div className="p-8 md:flex md:items-center md:gap-8">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 md:mb-0 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <HistoryIcon className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
              Quiz History
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Review past quiz results for NetSec-Pro and SecOps-Pro.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center text-amber-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
            View History <ChevronRight className="w-5 h-5 ml-1 shrink-0" />
          </div>
        </div>
      </Card>
    </div>
  );
}
