import type { AnalyticsEvent } from '@/lib/analytics';
import { captureUtmFromUrl, trackEvent } from '@/lib/analytics';

captureUtmFromUrl();

document.addEventListener(
  'click',
  (e) => {
    const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-track]');
    if (!anchor?.dataset.track) return;
    trackEvent(anchor.dataset.track as AnalyticsEvent);
  },
  { capture: true },
);
