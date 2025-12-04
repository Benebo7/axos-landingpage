import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '..', 'public');
const imageDirs = ['images', 'figma-assets'];

const extensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath, outputPath) {
  const ext = extname(filePath).toLowerCase();

  if (!extensions.includes(ext)) {
    return;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    console.log(`Optimizing ${basename(filePath)}...`);

    // Convert to WebP with quality 85
    const webpPath = outputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    await image
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const originalSize = (await stat(filePath)).size;
    const webpSize = (await stat(webpPath)).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`  ${basename(filePath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB (${savings}% reduction)`);

  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        await processDirectory(filePath);
      } else if (fileStat.isFile()) {
        await optimizeImage(filePath, filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');

  for (const dir of imageDirs) {
    const fullPath = join(publicDir, dir);
    console.log(`Processing ${dir}/...`);
    await processDirectory(fullPath);
    console.log('');
  }

  console.log('Image optimization complete!');
}

main().catch(console.error);
