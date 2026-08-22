import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ευδοξία Τσιτάκη | Correct Eat',
    short_name: 'Correct Eat',
    description:
      'Διαιτολόγος – Διατροφολόγος στα Λαγυνά Θεσσαλονίκης. Εξατομικευμένα ' +
      'προγράμματα διατροφής, δια ζώσης και online.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f5f6',
    theme_color: '#6f4d39',
    lang: 'el',
    icons: [
      {src: '/icon-192.png', sizes: '192x192', type: 'image/png'},
      {src: '/icon-512.png', sizes: '512x512', type: 'image/png'},
    ],
  };
}
