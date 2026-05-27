import en from '@/i18n/en.json';
import es from '@/i18n/es.json';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, es } as const;

export type Dictionary = typeof en;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function t(locale: Locale): Dictionary {
  return getDictionary(locale);
}
