import { siteConfig } from '@/config/site';
import type { Locale } from '@/lib/i18n';

export function localePath(locale: Locale, path = '') {
  const base = `/${locale}`;
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function trialUrl(locale: Locale) {
  const { primaryWebsite, trialPath } = siteConfig.urls;
  const url = new URL(trialPath, primaryWebsite);
  url.searchParams.set('lang', locale);
  return url.toString();
}

export function alternateLocale(current: Locale): Locale {
  return current === 'en' ? 'es' : 'en';
}
