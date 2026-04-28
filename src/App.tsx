/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Menu from './components/Menu';
import StudyGuide from './components/StudyGuide';
import Quiz from './components/Quiz';
import History from './components/History';
import { Button } from './components/ui/Button';

export type Mode = 'menu' | 'study-guide' | 'quiz' | 'history';

export default function App() {
  const [mode, setMode] = useState<Mode>('menu');
  const [quizDuration, setQuizDuration] = useState<number>(60);
  const [showConfirmMenu, setShowConfirmMenu] = useState<boolean>(false);

  const handleSelectMode = (newMode: Mode, duration?: number) => {
    if (duration) setQuizDuration(duration);
    setMode(newMode);
  };

  const handleBackToMenu = () => {
    if (mode === 'quiz') {
      setShowConfirmMenu(true);
    } else {
      setMode('menu');
    }
  };

  const confirmBackToMenu = () => {
    setShowConfirmMenu(false);
    setMode('menu');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {showConfirmMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-slate-800 mb-3">End Quiz?</h2>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Are you sure you want to exit? Your current progress will be saved to history.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowConfirmMenu(false)}>Cancel</Button>
              <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white border-0 shadow-sm" onClick={confirmBackToMenu}>Exit</Button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer flex items-center gap-2" 
            onClick={handleBackToMenu}
          >
            <span className="bg-indigo-100 rounded-md p-1">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </span>
            NetSec-Pro
          </h1>
          {mode !== 'menu' && (
            <button
              onClick={handleBackToMenu}
              className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              Back to Menu
            </button>
          )}
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {mode === 'menu' && <Menu onSelect={handleSelectMode} />}
        {mode === 'study-guide' && <StudyGuide />}
        {mode === 'quiz' && <Quiz durationMinutes={quizDuration} />}
        {mode === 'history' && <History />}
      </main>
    </div>
  );
}


