import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Languages } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { LanguageOption } from '../types';

const languageOptions: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
];

export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode, language, setLanguage } = useStore();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Jelle Ten Haken
          </Link>
          <div className="flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Languages className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setLanguage(option.code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        language === option.code ? 'bg-gray-100 dark:bg-gray-700' : ''
                      }`}
                    >
                      <span className="mr-2">{option.flag}</span>
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};