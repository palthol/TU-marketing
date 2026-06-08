import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceDir = path.join(root, 'public', 'images', 'source');
const outDir = path.join(root, 'public', 'images');
const assetsDir = path.join(root, 'src', 'assets', 'images');

const widths = [480, 768, 1200, 1920];

async function ensureDirs() {
  await fs.mkdir(sourceDir, { recursive: true });
  await fs.mkdir(outDir, { recursive: true });
  await fs.mkdir(assetsDir, { recursive: true });
}

async function createPlaceholderSource(filePath) {
  const svg = `
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b0c0e"/>
      <stop offset="50%" style="stop-color:#272727"/>
      <stop offset="100%" style="stop-color:#8e1e1e"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="52%" fill="#e4b744" font-family="Arial,sans-serif" font-size="48" font-weight="bold" text-anchor="middle">Temple Underground</text>
</svg>`;
  await fs.writeFile(filePath, svg.trim());
  console.log('Created placeholder source:', filePath);
}

function publicImageBase(sourceBase) {
  return sourceBase.replace(/\+/g, '-');
}

async function processImage(name) {
  const rawBase = path.parse(name).name;
  const base = publicImageBase(rawBase);
  const sourcePath = path.join(sourceDir, name);

  let pipeline = sharp(sourcePath);
  const meta = await pipeline.metadata();

  for (const width of widths) {
    const outName = `${base}-${width}.webp`;
    const outPath = path.join(outDir, outName);
    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
    console.log('Wrote', outPath);
  }

  const heroAsset = path.join(assetsDir, `${base}.webp`);
  await sharp(sourcePath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(heroAsset);
  console.log('Wrote', heroAsset);

  return meta;
}

/** Full-bleed hero background uses public/images/{base}-*.webp */
async function ensureHeroBgFromHeroSource() {
  const heroSrc = path.join(sourceDir, 'hero.svg');
  const heroBgSrc = path.join(sourceDir, 'hero-bg.svg');
  try {
    await fs.access(heroBgSrc);
  } catch {
    try {
      await fs.access(heroSrc);
      await fs.copyFile(heroSrc, heroBgSrc);
      console.log('Copied hero.svg → hero-bg.svg for background layer');
    } catch {
      await createPlaceholderSource(heroBgSrc);
    }
  }
  await processImage('hero-bg.svg');
}

async function main() {
  await ensureDirs();

  const heroSource = path.join(sourceDir, 'hero.svg');
  try {
    await fs.access(heroSource);
  } catch {
    await createPlaceholderSource(heroSource);
  }

  await ensureHeroBgFromHeroSource();

  const entries = await fs.readdir(sourceDir);
  const images = entries.filter(
    (f) => /\.(svg|png|jpe?g|webp)$/i.test(f) && f !== 'hero-bg.svg',
  );

  for (const name of images) {
    await processImage(name);
  }

  if (images.length === 0) {
    console.log('Add photos to public/images/source/ (hero.jpg, training-1.jpg, …) and re-run.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
