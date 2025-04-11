import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Cat } from './components/Cat';

function App() {
  const { isDarkMode } = useStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>
          <Cat />
        </div>
      </div>
    </Router>
  );
}

export default App;