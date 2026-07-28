import fs from "fs";
import path from "path";
import process from "process";
import sharp from "sharp";

const root = process.cwd();
const mediaDir = path.join(root, "content-source", "hydroscope", "media");
const outDir = path.join(root, "content-source", "hydroscope", "contact-sheets");
fs.mkdirSync(outDir, { recursive: true });

const files = fs
  .readdirSync(mediaDir)
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
  .sort();

const cols = 5;
const thumbWidth = 230;
const labelHeight = 34;
const gap = 16;

const thumbs = await Promise.all(
  files.map(async (file) => {
    const image = sharp(path.join(mediaDir, file));
    const meta = await image.metadata();
    const height = Math.round(((meta.height || thumbWidth) / (meta.width || thumbWidth)) * thumbWidth);
    return {
      file,
      buffer: await image.resize({ width: thumbWidth }).png().toBuffer(),
      height
    };
  })
);

const cellHeight = Math.max(...thumbs.map((thumb) => thumb.height)) + labelHeight;
const rows = Math.ceil(thumbs.length / cols);
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
    `<svg width="${thumbWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ffffff"/><text x="8" y="22" font-family="Arial" font-size="13" fill="#09244c">${thumb.file}</text></svg>`
  );
  composites.push({ input: label, left, top: top + thumb.height });
});

const target = path.join(outDir, "source-media-sheet.png");
await sharp({
  create: { width, height, channels: 4, background: "#eef6ff" }
})
  .composite(composites)
  .png()
  .toFile(target);

console.log(path.relative(root, target));
