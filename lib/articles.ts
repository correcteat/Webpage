import {createReader} from '@keystatic/core/reader';
import config from '../keystatic.config';

export const categories: Record<string, string> = {
  'vasiki-diatrofi': 'Βασική διατροφή',
  gastrenteriko: 'Γαστρεντερικό',
  'kliniki-diatrofi': 'Κλινική διατροφή',
  'metavoliki-ygeia': 'Μεταβολική υγεία',
  'athlitiki-diatrofi': 'Αθλητική διατροφή',
  kathimerinotita: 'Καθημερινότητα',
  syntages: 'Συνταγές',
};

export type ArticleCard = {
  slug: string;
  titlos: string;
  imerominia: string;
  katigoria: string;
  katigoriaLabel: string;
  perilipsi: string;
  eikona: string | null;
};

const reader = () => createReader(process.cwd(), config);

/** Όλα τα άρθρα, από το νεότερο στο παλαιότερο. */
export async function getArticles(): Promise<ArticleCard[]> {
  try {
    const all = await reader().collections.arthra.all();
    return all
      .map(({slug, entry}) => ({
        slug,
        titlos: entry.titlos,
        imerominia: entry.imerominia ?? '',
        katigoria: entry.katigoria,
        katigoriaLabel: categories[entry.katigoria] ?? entry.katigoria,
        perilipsi: entry.perilipsi ?? '',
        eikona: entry.eikona ?? null,
      }))
      .sort((a, b) => b.imerominia.localeCompare(a.imerominia));
  } catch {
    return [];
  }
}

export async function getArticle(slug: string) {
  try {
    return await reader().collections.arthra.read(slug, {resolveLinkedFiles: true});
  } catch {
    return null;
  }
}

/** 18 Αυγούστου 2025 */
export function formatDate(iso: string): string {
  if (!iso) return '';
  const months = [
    'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
    'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου',
  ];
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${months[m - 1]} ${y}`;
}
