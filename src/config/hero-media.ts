/**
 * Hero background slides — add optimized files to public/images/ after running
 * `npm run optimize-images` (e.g. hero-bg-1920.webp). Multiple entries enable
 * a CSS-only crossfade; one entry is a static background.
 */
export type HeroBackgroundSlide = {
  /** Base name matching optimize-images output (e.g. "hero-bg") */
  base: string;
  /** Brief description for alt when needed; decorative slides use empty alt */
  alt: string;
};

export const heroBackgroundSlides: HeroBackgroundSlide[] = [
  {
    base: 'hero-bg',
    alt: 'Temple Underground training atmosphere',
  },
];

/** Seconds per slide when crossfading */
export const heroSlideDurationSec = 8;
