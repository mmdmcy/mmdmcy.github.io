import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';

export const Cat: React.FC = () => {
  const { language } = useStore();
  const [isHappy, setIsHappy] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const t = translations[language];

  useEffect(() => {
    if (isHappy) {
      const interval = setInterval(() => {
        setIsHappy(prev => !prev);
      }, 500); // Switch sprite every 500ms
      return () => clearInterval(interval);
    }
  }, [isHappy]);

  const handleClick = () => {
    setIsHappy(true);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setIsHappy(false);
    }, 2000);
  };

  return (
    <div className="relative bottom-0 right-4 mb-4 mr-4 z-50 float-right">
      {showMessage && (
        <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
          <p className="text-gray-900 dark:text-white whitespace-nowrap">{t.catMessage}</p>
        </div>
      )}
      <img
        src={isHappy ? '/B2_Transparent.png' : '/B_Transparent.png'}
        alt="Pixel Cat"
        className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform"
        onClick={handleClick}
      />
    </div>
  );
};