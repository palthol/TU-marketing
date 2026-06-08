import type { Locale } from '@/lib/i18n';

export function localePath(locale: Locale, path = '') {
  const base = `/${locale}`;
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function trialUrl(locale: Locale) {
  return localePath(locale, '/book');
}

export function alternateLocale(current: Locale): Locale {
  return current === 'en' ? 'es' : 'en';
}
