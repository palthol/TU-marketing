const primarySiteFromEnv =
  typeof import.meta.env.PUBLIC_PRIMARY_SITE_URL === 'string'
    ? import.meta.env.PUBLIC_PRIMARY_SITE_URL
    : '';

export const siteConfig = {
  business: {
    name: 'Temple Underground',
    phone: '(423) 555-0100',
    phoneTel: '+14235550100',
    smsTel: '+14235550100',
    email: 'hello@templeunderground.com',
    addressLine1: 'Morristown Training Area',
    cityStateZip: 'Morristown, Tennessee',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Temple+Underground+Morristown+Tennessee',
  },
  urls: {
    primaryWebsite:
      primarySiteFromEnv || 'https://templeunderground.com',
    trialPath: '/contact',
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
