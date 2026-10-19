// Chuyển ảnh gốc trong source-images/portfolio thành WebP nhiều kích thước (public/images/portfolio).
// Chạy: npm run images
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'source-images/portfolio';
const OUT = 'public/images/portfolio';
const WIDTHS = [640, 1200, 2000];

// Tên gốc -> tên ngắn dùng trong src/data/portfolio.js
const NAMES = {
  '709636563': 'alley',
  '716690412': 'kiss-street',
  '734210198': 'lantern-portrait',
  '737325830': 'river-boat',
  '738678102': 'beach-twirl',
  '739363084': 'rice-field',
  '797784597': 'umbrella-street',
  '797841452': 'ao-dai-bougainvillea',
  '800715671': 'umbrella-yellow-house',
  '805585256': 'temple-courtyard',
  '806073474': 'rooftops',
  '807675149': 'yellow-wall',
  '830883158': 'grass-seated',
  '831155191': 'field-portrait',
  '831505568': 'ring-detail',
};

fs.mkdirSync(OUT, { recursive: true });
const manifest = {};
for (const file of fs.readdirSync(SRC)) {
  const key = file.split('_')[0];
  const name = NAMES[key];
  if (!name) continue;
  const img = sharp(path.join(SRC, file));
  const { width, height } = await img.metadata();
  manifest[name] = { width, height };
  for (const w of WIDTHS) {
    if (w > width) continue;
    await sharp(path.join(SRC, file)).resize({ width: w }).webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
}
console.log(JSON.stringify(manifest, null, 1));
