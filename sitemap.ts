import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://webpage-correcteat1.vercel.app';
  const now = new Date();
  const pages = ['/', '/sxetika-me-emena', '/ypiresies', '/arthra', '/epikoinonia'];

  return pages.map((path) => ({
    url: base + path,
    lastModified: now,
  }));
}
