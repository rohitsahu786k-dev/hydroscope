import AdmZip from "adm-zip";
import { XMLParser } from "fast-xml-parser";
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import process from "process";

const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

const root = process.cwd();
const sourceFiles = [
  {
    type: "pptx",
    label: "Product Deck - 25 Mar 2026",
    file: "C:/Users/rohit.sahu/Downloads/Product Deck - 25 Mar 2026(1)(1).pptx"
  },
  {
    type: "pdf",
    label: "revished 6",
    file: "C:/Users/rohit.sahu/Downloads/revished 6.pdf"
  },
  {
    type: "pdf",
    label: "Hydropure Electrochlorinator Catalog",
    file: "C:/Users/rohit.sahu/Downloads/Hydropure Electrochlorinator Catalog.pdf"
  }
];

const imageFiles = [
  {
    label: "HydroPure electrochlorinator source infographic",
    file: "C:/Users/rohit.sahu/Downloads/WhatsApp Image 2026-07-27 at 11.25.15.jpeg"
  },
  {
    label: "HydroPure village tank source infographic",
    file: "C:/Users/rohit.sahu/Downloads/WhatsApp Image 2026-07-27 at 11.20.23.jpeg"
  }
];

const outDir = path.join(root, "content-source", "hydroscope");
const mediaDir = path.join(outDir, "media");
const pdfPageDir = path.join(outDir, "pdf-pages");
const pdfImageDir = path.join(outDir, "pdf-images");
fs.mkdirSync(mediaDir, { recursive: true });
fs.mkdirSync(pdfPageDir, { recursive: true });
fs.mkdirSync(pdfImageDir, { recursive: true });

const parser = new XMLParser({
  ignoreAttributes: false,
  preserveOrder: true,
  trimValues: true
});

function textNodes(node, acc = []) {
  if (Array.isArray(node)) {
    node.forEach((child) => textNodes(child, acc));
    return acc;
  }
  if (!node || typeof node !== "object") return acc;
  for (const [key, value] of Object.entries(node)) {
    if (key === "#text" && typeof value === "string") acc.push(value);
    else textNodes(value, acc);
  }
  return acc;
}

function normalizeText(text) {
  return text
    .replace(/\r/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractPptx(file) {
  const zip = new AdmZip(file);
  const slideEntries = zip
    .getEntries()
    .filter((entry) => /^ppt\/slides\/slide\d+\.xml$/.test(entry.entryName))
    .sort((a, b) => Number(a.entryName.match(/slide(\d+)/)?.[1] || 0) - Number(b.entryName.match(/slide(\d+)/)?.[1] || 0));

  const slides = slideEntries.map((entry) => {
    const slideNumber = Number(entry.entryName.match(/slide(\d+)/)?.[1] || 0);
    const xml = entry.getData().toString("utf8");
    const parsed = parser.parse(xml);
    const text = normalizeText(textNodes(parsed).join("\n"));
    return { slideNumber, text };
  });

  const media = [];
  zip
    .getEntries()
    .filter((entry) => /^ppt\/media\/.+\.(png|jpe?g|webp)$/i.test(entry.entryName))
    .forEach((entry, index) => {
      const ext = path.extname(entry.entryName).toLowerCase();
      const basename = `product-deck-media-${String(index + 1).padStart(2, "0")}${ext}`;
      const target = path.join(mediaDir, basename);
      fs.writeFileSync(target, entry.getData());
      media.push({ source: entry.entryName, file: path.relative(root, target).replace(/\\/g, "/") });
    });

  return { slides, media };
}

async function extractPdf(file) {
  const buffer = fs.readFileSync(file);
  const parser = new PDFParse({ data: buffer });
  const data = await parser.getText();
  await parser.destroy();
  const pageParser = new PDFParse({ data: buffer });
  const screenshots = await pageParser.getScreenshot({ desiredWidth: 1400, imageDataUrl: false });
  await pageParser.destroy();

  const slug = path.basename(file, path.extname(file)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const renderedPages = [];
  screenshots.pages.forEach((page, index) => {
    const target = path.join(pdfPageDir, `${slug}-page-${String(index + 1).padStart(2, "0")}.png`);
    fs.writeFileSync(target, page.data);
    renderedPages.push(path.relative(root, target).replace(/\\/g, "/"));
  });

  const imageParser = new PDFParse({ data: buffer });
  const extractedImages = await imageParser.getImage({ imageThreshold: 120, imageDataUrl: false });
  await imageParser.destroy();
  const embeddedImages = [];
  extractedImages.pages.forEach((page, pageIndex) => {
    page.images.forEach((image, imageIndex) => {
      const target = path.join(pdfImageDir, `${slug}-page-${String(pageIndex + 1).padStart(2, "0")}-image-${String(imageIndex + 1).padStart(2, "0")}.png`);
      fs.writeFileSync(target, image.data);
      embeddedImages.push(path.relative(root, target).replace(/\\/g, "/"));
    });
  });

  return {
    pageCount: data.total,
    text: normalizeText(data.text),
    renderedPages,
    embeddedImages
  };
}

function copyReferenceImages() {
  return imageFiles.map((image, index) => {
    const ext = path.extname(image.file).toLowerCase();
    const target = path.join(mediaDir, `provided-reference-${index + 1}${ext}`);
    fs.copyFileSync(image.file, target);
    return {
      label: image.label,
      file: path.relative(root, target).replace(/\\/g, "/")
    };
  });
}

const result = {
  generatedAt: new Date().toISOString(),
  sources: [],
  referenceImages: copyReferenceImages()
};

for (const source of sourceFiles) {
  if (!fs.existsSync(source.file)) {
    result.sources.push({ ...source, error: "File not found" });
    continue;
  }
  if (source.type === "pptx") {
    result.sources.push({ ...source, ...extractPptx(source.file) });
  } else {
    result.sources.push({ ...source, ...(await extractPdf(source.file)) });
  }
}

const jsonPath = path.join(outDir, "extracted-content.json");
const markdownPath = path.join(outDir, "extracted-content.md");
fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), "utf8");

const markdown = [
  "# HYDROscope Extracted Source Content",
  "",
  `Generated: ${result.generatedAt}`,
  "",
  "## Reference Images",
  ...result.referenceImages.map((image) => `- ${image.label}: ${image.file}`),
  "",
  ...result.sources.flatMap((source) => {
    const lines = [`## ${source.label}`, "", `Source: ${source.file}`, ""];
    if (source.error) return [...lines, `Error: ${source.error}`, ""];
    if (source.type === "pptx") {
      lines.push(`Slides: ${source.slides.length}`, "");
      source.slides.forEach((slide) => {
        lines.push(`### Slide ${slide.slideNumber}`, "", slide.text || "[No text extracted]", "");
      });
      lines.push("### Extracted PPT Media", "", ...(source.media || []).map((item) => `- ${item.file}`), "");
      return lines;
    }
    lines.push(`Pages: ${source.pageCount}`, "", source.text || "[No text extracted]", "");
    if (source.renderedPages?.length) {
      lines.push("### Rendered PDF Pages", "", ...source.renderedPages.map((item) => `- ${item}`), "");
    }
    if (source.embeddedImages?.length) {
      lines.push("### Extracted PDF Images", "", ...source.embeddedImages.map((item) => `- ${item}`), "");
    }
    return lines;
  })
].join("\n");

fs.writeFileSync(markdownPath, markdown, "utf8");

console.log(`Extracted content: ${path.relative(root, markdownPath)}`);
console.log(`Extracted JSON: ${path.relative(root, jsonPath)}`);
console.log(`Reference media: ${path.relative(root, mediaDir)}`);
