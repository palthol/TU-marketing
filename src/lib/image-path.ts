/** URL-safe public image base — must match optimize-images.mjs output names */
export function publicImageBase(base: string) {
  return base.replace(/\+/g, '-');
}

export function publicImageSrc(base: string, width: number) {
  return `/images/${encodeURIComponent(publicImageBase(base))}-${width}.webp`;
}
