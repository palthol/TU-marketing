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

/** Static mobile hero strips — one discipline per row, no carousel */
export type HeroMobileStrip = {
  base: string;
  alt: string;
  discipline: 'boxing' | 'bjj' | 'wrestling';
};

/** Three disciplines for the mobile stacked strip layout (480px WebP) */
export const heroMobileStrips: HeroMobileStrip[] = [
  {
    base: 'over_shoulder_jab',
    alt: 'Boxing training at Temple Underground',
    discipline: 'boxing',
  },
  {
    base: 'bullfight',
    alt: 'Brazilian Jiu-Jitsu training at Temple Underground',
    discipline: 'bjj',
  },
  {
    base: 'double leg high2',
    alt: 'Wrestling training at Temple Underground',
    discipline: 'wrestling',
  },
];

export const heroBackgroundSlides: HeroBackgroundSlide[] = [
  {
    base: 'over_shoulder_jab',
    alt: 'Boxing training at Temple Underground',
  },
  {
    base: 'bullfight',
    alt: 'Sparring at Temple Underground',
  },
  {
    base: 'stance 1 backup',
    alt: 'Fighter stance at Temple Underground',
  },
  {
    base: 'double leg high2',
    alt: 'Grappling and takedown training at Temple Underground',
  },
  {
    base: 'IMG_1625',
    alt: 'Training session at Temple Underground',
  },
  {
    base: 'IMG_1644',
    alt: 'Temple Underground gym atmosphere',
  },
  {
    base: 'IMG_1646',
    alt: 'Athletes training at Temple Underground',
  },
];

/** Seconds per slide when crossfading */
export const heroSlideDurationSec = 8;
