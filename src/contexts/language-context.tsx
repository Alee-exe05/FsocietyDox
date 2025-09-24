
"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getDictionary, Dictionary, Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  dictionary: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('fsociety-dox-lang') as Language;
    if (storedLanguage && ['en', 'it', 'fr'].includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fsociety-dox-lang', lang);
    }
  };

  const dictionary = useMemo(() => getDictionary(language), [language]);
  
  const value = { language, setLanguage, dictionary };

  if (!isMounted) {
    // Render a loader or null until the component is mounted and language is determined
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export type { Language };
