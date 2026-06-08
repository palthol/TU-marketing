export type AnalyticsEvent =
  | 'cta_call'
  | 'cta_text'
  | 'cta_email'
  | 'cta_directions'
  | 'cta_free_class'
  | 'cta_main_site'
  | 'lead_submit';

const UTM_STORAGE_KEY = 'tu_utm_campaign';

export function captureUtmFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const campaign = params.get('utm_campaign') ?? params.get('ref');
    if (campaign) {
      sessionStorage.setItem(UTM_STORAGE_KEY, campaign);
    }
  } catch {
    /* ignore */
  }
}

export function getStoredCampaign(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    return sessionStorage.getItem(UTM_STORAGE_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

export function trackEvent(name: AnalyticsEvent, props?: Record<string, string>): void {
  if (typeof window === 'undefined') return;

  const campaign = getStoredCampaign();
  const payload = { ...props, ...(campaign ? { campaign } : {}) };

  const plausible = (window as Window & { plausible?: (e: string, o?: { props: Record<string, string> }) => void })
    .plausible;
  if (plausible) {
    plausible(name, { props: payload });
    return;
  }

  if (import.meta.env.DEV) {
    console.debug('[analytics]', name, payload);
  }
}
