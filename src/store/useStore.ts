import { create } from 'zustand';
import type { Language } from '../types';

interface Store {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useStore = create<Store>((set) => ({
  isDarkMode: true, // Set dark mode as default
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  language: 'en',
  setLanguage: (language) => set({ language }),
}));