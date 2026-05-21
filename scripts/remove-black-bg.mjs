import sharp from "sharp";

const IN = "public/images/about-room.jpg";
const OUT = "public/images/about-flower.png";

// Soglie sulla "brillantezza" (max canale) per costruire l'alpha:
// sotto LOW -> trasparente, sopra HIGH -> opaco, in mezzo rampa morbida.
const LOW = 12;
const HIGH = 80;

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

const img = sharp(IN).removeAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info; // channels = 3
const out = Buffer.alloc(width * height * 4);

for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const v = Math.max(r, g, b);
  const a = smoothstep(LOW, HIGH, v); // 0..1
  if (a <= 0) {
    out[j] = out[j + 1] = out[j + 2] = 0;
    out[j + 3] = 0;
  } else {
    // un-premultiply rispetto al nero per recuperare il colore reale ai bordi
    out[j] = Math.min(255, Math.round(r / a));
    out[j + 1] = Math.min(255, Math.round(g / a));
    out[j + 2] = Math.min(255, Math.round(b / a));
    out[j + 3] = Math.round(a * 255);
  }
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(OUT);

console.log(`OK -> ${OUT} (${width}x${height})`);
