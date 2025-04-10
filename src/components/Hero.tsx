import React from 'react';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';
import { Mail, Twitter, Instagram } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];

  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Jelle Ten Haken
          </h1>
          <div className="mt-6 flex justify-center">
            <img
              src="/profielfoto.png"
              alt="Jelle Ten Haken"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </div>
          <p className="mt-6 text-xl text-gray-900 dark:text-white sm:mt-5 sm:text-2xl">
            {t.title}
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-900 dark:text-white">
            {t.about}
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="mailto:jelleth@proton.me"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/jelletenhaken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/jelletenhaken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};