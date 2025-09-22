import { en } from '@/locales/en';
import { it } from '@/locales/it';
import { fr } from '@/locales/fr';

export type Language = 'en' | 'it' | 'fr';
export type Dictionary = typeof en;

export const dictionaries: Record<Language, Dictionary> = {
  en,
  it,
  fr,
};

export const getDictionary = (lang: Language): Dictionary => {
  return dictionaries[lang] ?? dictionaries.en;
};
