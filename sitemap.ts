import type { MetadataRoute } from 'next';

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://webpage-correcteat1.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ['/', '/sxetika-me-emena', '/ypiresies', '/arthra', '/epikoinonia'];

  return pages.map((path) => ({
    url: base + path,
    lastModified: now,
  }));
}
