import Link from 'next/link';
import Image from 'next/image';
import type {Metadata} from 'next';
import {getArticles, formatDate} from '../../lib/articles';
import {pageMeta} from '../../lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Άρθρα',
  description:
    'Άρθρα για τη διατροφή στην πράξη: γαστρεντερικό, διαχείριση βάρους, μεταβολική υγεία, καθημερινότητα και συνταγές.',
  path: '/arthra',
});

export default async function Articles() {
  const articles = await getArticles();

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Correct Eat Journal</p>
          <h1>Άρθρα για την πράξη — όχι για την τελειότητα.</h1>
          <p className="large-copy">
            Ό,τι γράφω για τη διατροφή, με επιστημονική βάση και πρακτικό βλέμμα.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {articles.length === 0 ? (
            <div className="empty-state">
              <h2>Τα άρθρα έρχονται σύντομα.</h2>
              <p>
                Η μεταφορά του αρχείου από το προσωπικό blog βρίσκεται σε εξέλιξη. Στο μεταξύ,
                μπορείς να δεις τα παλιότερα άρθρα{' '}
                <a href="https://tsitakh.blogspot.com/" target="_blank" rel="noreferrer">
                  εδώ
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="article-grid">
              {articles.map((a) => (
                <Link key={a.slug} href={`/arthra/${a.slug}`} className="article-card">
                  <div className="article-thumb">
                    {a.eikona ? (
                      <Image
                        src={a.eikona}
                        alt=""
                        width={640}
                        height={420}
                        sizes="(max-width: 760px) 90vw, 360px"
                      />
                    ) : (
                      <span className="article-thumb-fallback" aria-hidden="true">
                        Correct Eat
                      </span>
                    )}
                  </div>
                  <div className="article-body">
                    <p className="article-meta">
                      <span className="chip">{a.katigoriaLabel}</span>
                      <time dateTime={a.imerominia}>{formatDate(a.imerominia)}</time>
                    </p>
                    <h2>{a.titlos}</h2>
                    <p>{a.perilipsi}</p>
                    <span className="text-link">Διάβασε το άρθρο →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
