/**
 * Why section card carousels — optimized WebP in public/images/ (npm run optimize-images).
 * Each inner array is one card; slide order is intentional.
 */
import { publicImageSrc } from '@/lib/image-path';

export type WhyCardSlide = {
  base: string;
  alt: string;
};

export const whyCardCarousels: WhyCardSlide[][] = [
  [
    { base: 'grappling', alt: 'Grappling training at Temple Underground' },
    { base: 'striking', alt: 'Striking training at Temple Underground' },
    {
      base: 'striking-grappling_combined',
      alt: 'Integrated striking and grappling at Temple Underground',
    },
  ],
  [
    { base: 'breathing', alt: 'Breath work during training at Temple Underground' },
    { base: 'structure', alt: 'Structural fighting stance at Temple Underground' },
    { base: 'movement', alt: 'Movement training at Temple Underground' },
  ],
  [
    { base: 'community3', alt: 'Temple Underground training community' },
    { base: 'community1', alt: 'Athletes training together at Temple Underground' },
    { base: 'community2', alt: 'Community on the mat at Temple Underground' },
  ],
];

export { publicImageSrc as whyImageSrc };
