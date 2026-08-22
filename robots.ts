import type {MetadataRoute} from 'next';

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://webpage-correcteat1.vercel.app';

export default function robots():MetadataRoute.Robots{return{rules:{userAgent:'*',allow:'/'},sitemap:`${base}/sitemap.xml`}}
