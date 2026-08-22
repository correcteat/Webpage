import type {MetadataRoute} from 'next';
import {siteUrl} from '../lib/site';
import {getArticles} from '../lib/articles';

const pages = [
  {path: '', priority: 1},
  {path: '/ypiresies', priority: 0.9},
  {path: '/sxetika-me-emena', priority: 0.8},
  {path: '/arthra', priority: 0.8},
  {path: '/epikoinonia', priority: 0.8},
  {path: '/o-choros-mas', priority: 0.7},
  {path: '/politiki-aporritou', priority: 0.3},
  {path: '/oroi-xrisis', priority: 0.3},
  {path: '/cookies', priority: 0.3},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const articles = await getArticles();

  return [
    ...pages.map((p) => ({
      url: `${siteUrl}${p.path}`,
      lastModified: now,
      priority: p.priority,
    })),
    ...articles.map((a) => ({
      url: `${siteUrl}/arthra/${a.slug}`,
      lastModified: a.imerominia ? new Date(a.imerominia) : now,
      priority: 0.6,
    })),
  ];
}
