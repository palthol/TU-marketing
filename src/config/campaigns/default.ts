export const defaultCampaign = {
  id: 'default',
  analyticsCampaignId: 'qr-default',
  hero: {
    emphasis: 'integrated',
  },
} as const;

export type CampaignConfig = typeof defaultCampaign;
