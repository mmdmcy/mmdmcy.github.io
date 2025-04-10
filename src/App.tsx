import React from 'react';
import { useStore } from './store/useStore';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';

function App() {
  const { isDarkMode } = useStore();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="pt-16">
          <Hero />
          <Experience />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default App;