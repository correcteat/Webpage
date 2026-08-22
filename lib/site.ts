/** Μία και μόνη πηγή για τη διεύθυνση του site.
 *  Όταν έρθει το πραγματικό domain, αλλάζει ΜΟΝΟ εδώ. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

export const siteName = 'Ευδοξία Τσιτάκη | Correct Eat';
