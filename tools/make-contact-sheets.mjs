import fs from "fs";
import path from "path";
import process from "process";
import sharp from "sharp";

const root = process.cwd();
const pageDir = path.join(root, "content-source", "hydroscope", "pdf-pages");
const outDir = path.join(root, "content-source", "hydroscope", "contact-sheets");
fs.mkdirSync(outDir, { recursive: true });

async function sheet(files, outFile, cols = 4, thumbWidth = 340) {
  const thumbs = await Promise.all(
    files.map(async (file) => {
      const image = sharp(path.join(pageDir, file));
      const meta = await image.metadata();
      const height = Math.round(((meta.height || thumbWidth) / (meta.width || thumbWidth)) * thumbWidth);
      const buffer = await image.resize({ width: thumbWidth }).png().toBuffer();
      return { file, buffer, width: thumbWidth, height };
    })
  );
  const labelHeight = 36;
  const gap = 18;
  const rows = Math.ceil(thumbs.length / cols);
  const cellHeight = Math.max(...thumbs.map((thumb) => thumb.height)) + labelHeight;
  const width = cols * thumbWidth + (cols - 1) * gap;
  const height = rows * cellHeight + (rows - 1) * gap;
  const composites = [];
  thumbs.forEach((thumb, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const left = col * (thumbWidth + gap);
    const top = row * (cellHeight + gap);
    composites.push({ input: thumb.buffer, left, top });
    const label = Buffer.from(
      `<svg width="${thumbWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ffffff"/><text x="8" y="23" font-family="Arial" font-size="16" fill="#09244c">${thumb.file}</text></svg>`
    );
    composites.push({ input: label, left, top: top + thumb.height });
  });
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: "#eef6ff"
    }
  })
    .composite(composites)
    .png()
    .toFile(path.join(outDir, outFile));
  console.log(path.relative(root, path.join(outDir, outFile)));
}

const revised = fs.readdirSync(pageDir).filter((file) => file.startsWith("revished-6-page")).sort();
const catalog = fs.readdirSync(pageDir).filter((file) => file.startsWith("hydropure-electrochlorinator")).sort();

await sheet(revised.slice(0, 12), "revished-6-pages-01-12.png", 4, 330);
await sheet(revised.slice(12), "revished-6-pages-13-22.png", 4, 330);
await sheet(catalog, "hydropure-catalog-pages.png", 3, 390);
