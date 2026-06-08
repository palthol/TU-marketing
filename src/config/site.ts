const primarySiteFromEnv =
  typeof import.meta.env.PUBLIC_PRIMARY_SITE_URL === 'string'
    ? import.meta.env.PUBLIC_PRIMARY_SITE_URL
    : '';

export const siteConfig = {
  business: {
    name: 'Temple Underground',
    phone: '(423) 523-9167',
    phoneTel: '+14235239167',
    smsTel: '+14235239167',
    email: 'templeundergroundhq@gmail.com',
    addressLine1: '1810 Ivy Lane',
    cityStateZip: 'Morristown, TN 37814',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=1810+Ivy+Lane+Morristown+TN+37814',
  },
  urls: {
    primaryWebsite:
      primarySiteFromEnv || 'https://templeunderground.com',
  },
  socials: {
    instagram: 'https://instagram.com/templeunderground',
  },
  analytics: {
    plausibleDomain:
      typeof import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN === 'string'
        ? import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN
        : '',
  },
  campaign: {
    defaultId: 'default',
  },
} as const;

export type SiteConfig = typeof siteConfig;
